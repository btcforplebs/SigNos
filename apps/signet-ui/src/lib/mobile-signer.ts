import { SimplePool, type Event, type Filter } from 'nostr-tools';
import { getPublicKey, verifyEvent, finalizeEvent } from 'nostr-tools/pure';
import { decrypt as nip44Decrypt, encrypt as nip44Encrypt, getConversationKey } from 'nostr-tools/nip44';
import { decrypt as nip04Decrypt, encrypt as nip04Encrypt } from 'nostr-tools/nip04';
import { npubEncode, decode as nip19Decode } from 'nostr-tools/nip19';
import { Preferences } from '@capacitor/preferences';
import type { PendingRequest, ActivityEntry, KeyInfo, RelayStatusResponse, ServerEvent } from '@signet/types';
import { showNotification } from './notifications.js';

/**
 * MobileSigner handles NIP-46 requests directly within the mobile app.
 * It simulates the backend daemon's behavior but runs in the browser/app process.
 */
class MobileSigner {
    private pool = new SimplePool();
    private relays: string[] = [
        'wss://relay.nsec.app',
        'wss://relay.nip46.com',
        'wss://relay.primal.net',
        'wss://relay.damus.io',
        'wss://theforest.nostr1.com',
        'wss://nostr.oxtr.dev',
        'wss://relay.nostr.band',
    ];
    private sub: any = null;
    private keys: Map<string, Uint8Array> = new Map(); // keyName -> privateKey
    private eventCallbacks: ((event: ServerEvent) => void)[] = [];
    private pendingRequests: Map<string, PendingRequest> = new Map();

    private initialized: Promise<void>;
    private initialLoadDone = false;

    constructor() {
        console.log('[MobileSigner] Constructor called (Instance ID:', Math.random().toString(36).substring(7), ')');
        this.initialized = this.loadKeys().then(() => {
            this.initialLoadDone = true;
        });
    }

    private async loadKeys() {
        try {
            const { value } = await Preferences.get({ key: 'signet_keys' });
            console.log('[MobileSigner] loadKeys raw value:', value);
            if (value) {
                const parsed = JSON.parse(value);
                this.keys.clear();
                for (const [name, hex] of Object.entries(parsed)) {
                    const bytes = new Uint8Array((hex as string).match(/.{1,2}/g)!.map(byte => parseInt(byte, 16)));
                    this.keys.set(name, bytes);
                }
                console.log(`[MobileSigner] Loaded ${this.keys.size} keys:`, Array.from(this.keys.keys()));
            }
        } catch (e) {
            console.error('[MobileSigner] Failed to load keys', e);
        }
    }

    private async saveKeys() {
        const obj: any = {};
        for (const [name, bytes] of this.keys.entries()) {
            obj[name] = Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join('');
        }
        console.log('[MobileSigner] Saving keys to preferences:', Object.keys(obj));
        await Preferences.set({ key: 'signet_keys', value: JSON.stringify(obj) });
    }

    public onEvent(callback: (event: ServerEvent) => void) {
        this.eventCallbacks.push(callback);
        return () => {
            this.eventCallbacks = this.eventCallbacks.filter(cb => cb !== callback);
        };
    }

    private emit(event: ServerEvent) {
        this.eventCallbacks.forEach(cb => cb(event));
    }

    private log(level: 'debug' | 'info' | 'warn' | 'error', message: string, data?: any) {
        console[level === 'debug' ? 'log' : level](`[MobileSigner] ${message}`, data || '');
        this.emit({
            type: 'log:entry',
            entry: {
                timestamp: new Date().toISOString(),
                level,
                message,
                data
            }
        });
    }

    public async start() {
        if (!this.initialLoadDone) await this.initialized;

        this.log('info', `Starting with ${this.keys.size} keys`);
        if (this.sub) {
            this.log('debug', 'Closing existing subscription');
            this.sub.close();
        }

        const pubkeys = Array.from(this.keys.values()).map(k => getPublicKey(k));
        if (pubkeys.length === 0) {
            this.log('warn', 'No keys found to listen for. Please create or import a key.');
            return;
        }

        const filter: Filter = {
            kinds: [24133],
            '#p': pubkeys,
        };

        this.log('info', `Subscribing to ${this.relays.length} relays...`, this.relays);

        try {
            this.sub = (this.pool as any).subscribeMany(
                this.relays,
                filter,
                {
                    onevent: (event: Event) => {
                        this.log('debug', `Received NIP-46 event ${event.id.slice(0, 8)}`);
                        this.handleNip46Event(event);
                    },
                    oneose: () => {
                        this.log('debug', 'Subscription EOSE (End of Stored Events)');
                    }
                }
            );

            this.emit({ type: 'connected' });
            this.emitRelayStatus();
        } catch (err: any) {
            this.log('error', 'Failed to start relay subscription', err.message);
        }
    }

    private emitRelayStatus() {
        this.emit({
            type: 'relays:updated',
            relays: {
                connected: this.relays.length,
                total: this.relays.length,
                relays: this.relays.map(url => ({
                    url,
                    connected: true,
                    lastConnected: new Date().toISOString(),
                    lastDisconnected: null,
                    trustScore: null,
                })),
            },
        });
    }

    private async handleNip46Event(event: Event) {
        if (!verifyEvent(event)) {
            console.warn('[MobileSigner] Invalid event signature', event.id);
            return;
        }

        let targetKeyName: string | null = null;
        let targetPrivKey: Uint8Array | null = null;
        const pTag = event.tags.find(t => t[0] === 'p')?.[1];

        for (const [name, priv] of this.keys.entries()) {
            if (getPublicKey(priv) === pTag) {
                targetKeyName = name;
                targetPrivKey = priv;
                break;
            }
        }

        if (!targetPrivKey || !targetKeyName) {
            this.log('warn', 'Received event for unknown p-tag', pTag);
            return;
        }

        try {
            let decrypted: string;

            // Try NIP-44 first
            try {
                const conversationKey = getConversationKey(targetPrivKey, event.pubkey);
                decrypted = nip44Decrypt(event.content, conversationKey);
                this.log('debug', 'Decrypted using NIP-44');
            } catch (err) {
                // Fallback to NIP-04
                this.log('debug', 'NIP-44 decryption failed, trying NIP-04...');
                const privHex = Array.from(targetPrivKey).map(b => b.toString(16).padStart(2, '0')).join('');
                decrypted = await nip04Decrypt(privHex, event.pubkey, event.content);
                this.log('debug', 'Decrypted using NIP-04');
            }

            const request = JSON.parse(decrypted);
            this.log('info', `NIP-46 Request: ${request.method}`, { id: request.id, from: event.pubkey });

            const pendingRequest: PendingRequest = {
                id: request.id,
                keyName: targetKeyName,
                method: request.method,
                remotePubkey: event.pubkey,
                params: JSON.stringify(request.params),
                createdAt: new Date().toISOString(),
                expiresAt: new Date(Date.now() + 3600000).toISOString(),
                ttlSeconds: 3600,
                requiresPassword: false,
                autoApproved: false,
            };

            this.pendingRequests.set(request.id, pendingRequest);
            this.emit({ type: 'request:created', request: pendingRequest });

            await showNotification(
                'New Signing Request',
                `App ${npubEncode(event.pubkey).slice(0, 12)}... wants to ${request.method}`,
                { requestId: request.id }
            );

        } catch (e: any) {
            this.log('error', 'Failed to handle NIP-46 event content', e.message);
        }
    }

    public async getKeys(): Promise<KeyInfo[]> {
        if (!this.initialLoadDone) await this.initialized;
        console.log('[MobileSigner] getKeys called. Returning:', this.keys.size, 'keys');
        return Array.from(this.keys.entries()).map(([name, priv]) => ({
            name,
            pubkey: getPublicKey(priv),
            npub: npubEncode(getPublicKey(priv)),
            status: 'online',
            isEncrypted: false,
            encryptionFormat: 'none',
            userCount: 0,
            tokenCount: 0,
            requestCount: 0,
            lastUsedAt: null,
        }));
    }

    public async approve(requestId: string) {
        const request = this.pendingRequests.get(requestId);
        if (!request || !request.keyName) return;

        const privKey = this.keys.get(request.keyName);
        if (!privKey) return;

        console.log('[MobileSigner] Approving request:', request.method);
        let result = 'ack';
        if (request.method === 'get_public_key') {
            result = getPublicKey(privKey);
        } else if (request.method === 'sign_event') {
            const params = JSON.parse(request.params || '[]');
            const unsigned = JSON.parse(params[0]);
            const signed = finalizeEvent(unsigned, privKey);
            result = JSON.stringify(signed);
        }

        await this.sendResponse(request.id, request.remotePubkey, privKey, result);
        this.pendingRequests.delete(requestId);

        const activity: ActivityEntry = {
            id: Math.floor(Math.random() * 1000000),
            timestamp: new Date().toISOString(),
            type: 'approval',
            method: request.method,
            keyName: request.keyName,
            userPubkey: request.remotePubkey,
            autoApproved: false,
        };

        this.emit({ type: 'request:approved', requestId, activity });
    }

    private async sendResponse(id: string, remotePubkey: string, privKey: Uint8Array, result: string) {
        this.log('info', `Sending NIP-46 response for request ${id.slice(0, 8)}`);
        const response = { id, result };

        const conversationKey = getConversationKey(privKey, remotePubkey);
        const encrypted = nip44Encrypt(JSON.stringify(response), conversationKey);

        const event = finalizeEvent({
            kind: 24133,
            content: encrypted,
            tags: [['p', remotePubkey]],
            created_at: Math.floor(Date.now() / 1000),
        }, privKey);

        return this.publishEvent(event);
    }

    private async publishEvent(event: any) {
        this.log('debug', `Publishing event ${event.id.slice(0, 8)} to ${this.relays.length} relays...`);

        try {
            const pubs = this.pool.publish(this.relays, event);
            const results = await Promise.allSettled(pubs);

            const successes = results.filter(r => r.status === 'fulfilled').length;
            const failures = results.filter(r => r.status === 'rejected') as PromiseRejectedResult[];

            if (successes > 0) {
                this.log('info', `Published successfully to ${successes}/${this.relays.length} relays`);
            }

            if (failures.length > 0) {
                failures.forEach(f => {
                    this.log('warn', `Relay publish failure: ${f.reason?.message || f.reason || 'Unknown error'}`);
                });
            }

            if (successes === 0) {
                this.log('error', 'Failed to publish to all relays');
            }
        } catch (err: any) {
            this.log('error', 'Critical failure during publish', err.message);
        }
    }

    public async deny(requestId: string) {
        const request = this.pendingRequests.get(requestId);
        if (!request || !request.keyName) return;

        const privKey = this.keys.get(request.keyName);
        if (!privKey) return;

        console.log('[MobileSigner] Denying request:', request.method);
        const response = { id: requestId, error: 'User rejected the request' };

        const conversationKey = getConversationKey(privKey, request.remotePubkey);
        const encrypted = nip44Encrypt(JSON.stringify(response), conversationKey);

        const event = finalizeEvent({
            kind: 24133,
            content: encrypted,
            tags: [['p', request.remotePubkey]],
            created_at: Math.floor(Date.now() / 1000),
        }, privKey);

        await this.publishEvent(event);
        this.pendingRequests.delete(requestId);

        const activity: ActivityEntry = {
            id: Math.floor(Math.random() * 1000000),
            timestamp: new Date().toISOString(),
            type: 'denial',
            method: request.method,
            keyName: request.keyName,
            userPubkey: request.remotePubkey,
            autoApproved: false,
        };
        this.emit({ type: 'request:denied', requestId, activity });
    }

    public async getRequests(): Promise<PendingRequest[]> {
        return Array.from(this.pendingRequests.values());
    }

    public async createKey(keyName: string, nsec?: string) {
        let privKey: Uint8Array;
        if (nsec) {
            if (nsec.startsWith('nsec1')) {
                const { data } = nip19Decode(nsec);
                privKey = data as Uint8Array;
            } else {
                privKey = new Uint8Array(nsec.match(/.{1,2}/g)!.map(byte => parseInt(byte, 16)));
            }
        } else {
            privKey = new Uint8Array(32);
            window.crypto.getRandomValues(privKey);
        }

        this.keys.set(keyName, privKey);
        await this.saveKeys();

        console.log('[MobileSigner] Key created:', keyName, 'Restarting signer...');
        await this.start();

        this.emit({
            type: 'key:created', key: {
                name: keyName,
                pubkey: getPublicKey(privKey),
                npub: npubEncode(getPublicKey(privKey)),
                status: 'online',
                isEncrypted: false,
                encryptionFormat: 'none',
                userCount: 0,
                tokenCount: 0,
                requestCount: 0,
                lastUsedAt: null
            }
        });
    }

    public async deleteKey(keyName: string) {
        console.log('[MobileSigner] Attempting to delete key:', keyName);
        console.log('[MobileSigner] Current keys:', Array.from(this.keys.keys()));

        const deleted = this.keys.delete(keyName);
        console.log('[MobileSigner] Delete result:', deleted);

        if (deleted) {
            await this.saveKeys();
            console.log('[MobileSigner] Key deleted:', keyName, 'Restarting signer...');
            await this.start();
            this.emit({ type: 'key:deleted', keyName });
        } else {
            console.warn('[MobileSigner] Key not found to delete:', keyName);
        }
    }

    public async unlockKey(keyName: string, _passphrase: string): Promise<boolean> {
        // In standalone mock, we just return true
        this.emit({ type: 'key:unlocked', keyName });
        return true;
    }

    public async lockKey(keyName: string) {
        this.emit({ type: 'key:locked', keyName });
    }

    public async lockAllKeys() {
        for (const name of this.keys.keys()) {
            this.emit({ type: 'key:locked', keyName: name });
        }
    }
}

export const mobileSigner = new MobileSigner();
