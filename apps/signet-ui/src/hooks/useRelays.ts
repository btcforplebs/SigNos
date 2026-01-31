import { useState, useEffect, useCallback, useRef } from 'react';
import type { RelayStatusResponse } from '@signet/types';
import { apiGet } from '../lib/api-client.js';
import { useSSESubscription } from '../contexts/ServerEventsContext.js';
import type { ServerEvent } from './useServerEvents.js';

// Refresh relay status every 30 seconds as fallback
const REFRESH_INTERVAL_MS = 30 * 1000;

interface UseRelaysResult {
  relays: RelayStatusResponse | null;
  loading: boolean;
  error: string | null;
  refresh: () => void;
}

import { isStandalone } from '../contexts/SettingsContext.js';

export function useRelays(): UseRelaysResult {
  const [relays, setRelays] = useState<RelayStatusResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const refresh = useCallback(async () => {
    try {
      if (isStandalone()) {
        // Mock or fetch from mobileSigner if we add a method
        setRelays({
          connected: 5,
          total: 5,
          relays: [
            { url: 'wss://relay.nip46.com', connected: true, lastConnected: new Date().toISOString(), lastDisconnected: null, trustScore: null },
            { url: 'wss://relay.primal.net', connected: true, lastConnected: new Date().toISOString(), lastDisconnected: null, trustScore: null },
            { url: 'wss://relay.damus.io', connected: true, lastConnected: new Date().toISOString(), lastDisconnected: null, trustScore: null },
            { url: 'wss://theforest.nostr1.com', connected: true, lastConnected: new Date().toISOString(), lastDisconnected: null, trustScore: null },
            { url: 'wss://nostr.oxtr.dev', connected: true, lastConnected: new Date().toISOString(), lastDisconnected: null, trustScore: null }
          ]
        });
      } else {
        const data = await apiGet<RelayStatusResponse>('/relays');
        setRelays(data);
      }
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load relay status');
    } finally {
      setLoading(false);
    }
  }, []);

  // Subscribe to SSE events for real-time relay status updates
  const handleEvent = useCallback((event: ServerEvent) => {
    // Refresh data on reconnection to ensure consistency
    if (event.type === 'reconnected') {
      refresh();
      return;
    }

    if (event.type === 'relays:updated') {
      setRelays(event.relays);
      setError(null);
      setLoading(false);
    }
  }, [refresh]);

  useSSESubscription(handleEvent);

  useEffect(() => {
    // Initial fetch
    refresh();

    // Auto-refresh every 30 seconds as fallback
    intervalRef.current = setInterval(refresh, REFRESH_INTERVAL_MS);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [refresh]);

  return { relays, loading, error, refresh };
}
