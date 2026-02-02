import { useEffect, useRef, useState, useCallback } from 'react';
import type { PendingRequest, ConnectedApp, DashboardStats, KeyInfo, RelayStatusResponse, ActivityEntry, AdminActivityEntry, LogEntry, HealthStatus, ServerEvent, DeadManSwitchStatus } from '@signet/types';

/**
 * Server-sent event types matching the backend event-service.ts
 */
export type { ServerEvent };

export type ServerEventCallback = (event: ServerEvent) => void;

export interface UseServerEventsOptions {
  enabled?: boolean;
  onEvent?: ServerEventCallback;
}

export interface UseServerEventsResult {
  connected: boolean;
  error: string | null;
  reconnecting: boolean;
  connectionCount: number;
}

const MAX_RECONNECT_DELAY = 30000; // 30 seconds
const INITIAL_RECONNECT_DELAY = 1000; // 1 second
const HEARTBEAT_TIMEOUT = 45000; // Expect server ping within 45 seconds
const HEARTBEAT_CHECK_INTERVAL = 10000; // Check every 10 seconds

function getApiBase(): string {
  const envBase = import.meta.env.VITE_DAEMON_API_URL ?? import.meta.env.VITE_BUNKER_API_URL;
  if (typeof envBase === 'string' && envBase.trim().length > 0) {
    return envBase.trim().replace(/\/+$/, '');
  }
  return '';
}

import { isStandalone } from '../contexts/SettingsContext.js';

export function useServerEvents(options: UseServerEventsOptions = {}): UseServerEventsResult {
  const { enabled = true, onEvent } = options;

  const [connected, setConnected] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [reconnecting, setReconnecting] = useState(false);
  const [connectionCount, setConnectionCount] = useState(0);

  const eventSourceRef = useRef<EventSource | null>(null);
  const reconnectDelayRef = useRef(INITIAL_RECONNECT_DELAY);
  const reconnectTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const heartbeatIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const lastEventTimeRef = useRef<number>(Date.now());
  const hasConnectedBeforeRef = useRef(false);
  const onEventRef = useRef(onEvent);
  // Track reconnection state synchronously to prevent race conditions
  const isReconnectingRef = useRef(false);

  // Keep the callback ref up to date
  useEffect(() => {
    onEventRef.current = onEvent;
  }, [onEvent]);

  const connect = useCallback(() => {
    if (!enabled) return;

    if (isStandalone()) {
      // Standalone mode is handled by a separate effect
      return;
    }

    // Clean up any existing connection
    if (eventSourceRef.current) {
      eventSourceRef.current.close();
      eventSourceRef.current = null;
    }

    const apiBase = getApiBase();
    const url = `${apiBase}/events`;

    try {
      const eventSource = new EventSource(url, { withCredentials: true });
      eventSourceRef.current = eventSource;

      eventSource.onopen = () => {
        const isReconnection = hasConnectedBeforeRef.current;
        hasConnectedBeforeRef.current = true;
        isReconnectingRef.current = false; // Clear reconnecting flag synchronously

        setConnected(true);
        setError(null);
        setReconnecting(false);
        reconnectDelayRef.current = INITIAL_RECONNECT_DELAY;
        lastEventTimeRef.current = Date.now();
        setConnectionCount(c => c + 1);

        if (isReconnection && onEventRef.current) {
          onEventRef.current({ type: 'reconnected' });
        }
      };

      eventSource.onmessage = (event) => {
        lastEventTimeRef.current = Date.now();
        try {
          const data = JSON.parse(event.data) as ServerEvent;
          if (onEventRef.current) {
            onEventRef.current(data);
          }
        } catch (err) {
          console.error('Failed to parse SSE event:', err);
        }
      };

      eventSource.onerror = () => {
        setConnected(false);
        eventSource.close();
        eventSourceRef.current = null;

        if (!navigator.onLine) {
          setError('Network offline');
          setReconnecting(false);
          return;
        }

        // Exponential backoff for reconnect
        isReconnectingRef.current = true; // Set synchronously to prevent race conditions
        setReconnecting(true);
        setError('Connection lost. Reconnecting...');

        // Clear any existing reconnect timeout to prevent leaks
        if (reconnectTimeoutRef.current) {
          clearTimeout(reconnectTimeoutRef.current);
        }

        reconnectTimeoutRef.current = setTimeout(() => {
          reconnectDelayRef.current = Math.min(
            reconnectDelayRef.current * 2,
            MAX_RECONNECT_DELAY
          );
          connect();
        }, reconnectDelayRef.current);
      };
    } catch {
      setError('Failed to connect to event stream');
      setConnected(false);
    }
  }, [enabled]);

  const disconnect = useCallback(() => {
    if (reconnectTimeoutRef.current) {
      clearTimeout(reconnectTimeoutRef.current);
      reconnectTimeoutRef.current = null;
    }

    if (eventSourceRef.current) {
      eventSourceRef.current.close();
      eventSourceRef.current = null;
    }

    isReconnectingRef.current = false;
    setConnected(false);
    setReconnecting(false);
  }, []);

  // Main connection effect
  useEffect(() => {
    if (enabled) {
      connect();
    } else {
      disconnect();
    }

    return () => {
      disconnect();
    };
  }, [enabled, connect, disconnect]);

  // Heartbeat monitoring
  useEffect(() => {
    if (!enabled) return;

    heartbeatIntervalRef.current = setInterval(() => {
      // Check both connected state and that we're not already reconnecting
      // Using ref for reconnecting check to avoid race conditions with async state updates
      if (connected && !isReconnectingRef.current && Date.now() - lastEventTimeRef.current > HEARTBEAT_TIMEOUT) {
        console.warn('SSE heartbeat timeout, reconnecting...');
        isReconnectingRef.current = true; // Prevent multiple reconnection attempts
        connect();
      }
    }, HEARTBEAT_CHECK_INTERVAL);

    return () => {
      if (heartbeatIntervalRef.current) {
        clearInterval(heartbeatIntervalRef.current);
      }
    };
  }, [enabled, connected, connect]);

  // Page visibility & Network status
  useEffect(() => {
    if (!enabled) return;

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        lastEventTimeRef.current = Date.now();
        if (!connected && !reconnecting) {
          connect();
        }
      }
    };

    const handleOnline = () => {
      setError(null);
      reconnectDelayRef.current = INITIAL_RECONNECT_DELAY;
      connect();
    };

    const handleOffline = () => {
      disconnect();
      setError('Network offline');
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [enabled, connected, reconnecting, connect, disconnect]);

  // Handle standalone mode
  useEffect(() => {
    if (!enabled) return;

    if (isStandalone()) {
      let unsubscribe: (() => void) | undefined;

      import('../lib/mobile-signer.js').then(({ mobileSigner }) => {
        unsubscribe = mobileSigner.onEvent((event) => {
          if (onEventRef.current) {
            onEventRef.current(event);
          }
          if (event.type === 'connected') {
            setConnected(true);
          }
        });
        mobileSigner.start();
      });

      return () => {
        unsubscribe?.();
      };
    }
  }, [enabled]);

  return {
    connected,
    error,
    reconnecting,
    connectionCount,
  };
}
