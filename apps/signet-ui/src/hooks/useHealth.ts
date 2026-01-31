import { useState, useEffect, useCallback } from 'react';
import type { HealthStatus } from '@signet/types';
import { apiGet } from '../lib/api-client.js';
import { useSSESubscription } from '../contexts/ServerEventsContext.js';
import type { ServerEvent } from './useServerEvents.js';

export type UIHealthStatus = 'healthy' | 'degraded' | 'offline';

export interface UseHealthResult {
    health: HealthStatus | null;
    uiStatus: UIHealthStatus;
    loading: boolean;
    error: string | null;
    refresh: () => void;
}

import { isStandalone } from '../contexts/SettingsContext.js';

export function useHealth(): UseHealthResult {
    const [health, setHealth] = useState<HealthStatus | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const refresh = useCallback(async () => {
        try {
            if (isStandalone()) {
                setHealth({
                    status: 'ok',
                    uptime: 3600,
                    memory: { heapMB: 50, rssMB: 100 },
                    relays: { connected: 3, total: 3 },
                    keys: { active: 1, locked: 0, offline: 0 },
                    subscriptions: 1,
                    sseClients: 0,
                    lastPoolReset: null
                });
            } else {
                const data = await apiGet<HealthStatus>('/health');
                setHealth(data);
            }
            setError(null);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to load health status');
        } finally {
            setLoading(false);
        }
    }, []);

    // Subscribe to SSE events for real-time health updates
    const handleSSEEvent = useCallback((event: ServerEvent) => {
        switch (event.type) {
            case 'health:updated':
                // Direct update from SSE - no API call needed
                setHealth(event.health);
                setError(null);
                setLoading(false);
                break;
            case 'reconnected':
                // SSE reconnection - fetch to ensure consistency
                refresh();
                break;
        }
    }, [refresh]);

    useSSESubscription(handleSSEEvent);

    // Initial fetch only - SSE handles updates every 10s
    useEffect(() => {
        refresh();
    }, [refresh]);

    // Derive UI status from health and error state
    const uiStatus: UIHealthStatus = error
        ? 'offline'
        : health?.status === 'degraded'
            ? 'degraded'
            : 'healthy';

    return { health, uiStatus, loading, error, refresh };
}
