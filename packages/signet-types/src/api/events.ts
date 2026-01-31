import type { PendingRequest, ConnectedApp, DashboardStats, KeyInfo, RelayStatusResponse, ActivityEntry, LogEntry, HealthStatus } from './index.js';
import type { AdminActivityEntry } from './dashboard.js';

export interface DeadManSwitchStatus {
    enabled: boolean;
    timeframeSec: number;
    lastResetAt: number | null;
    remainingSec: number | null;
    panicTriggeredAt: number | null;
    remainingAttempts?: number;
}

export type ServerEvent =
    | { type: 'connected' }
    | { type: 'reconnected' }
    | { type: 'request:created'; request: PendingRequest }
    | { type: 'request:approved'; requestId: string; activity: ActivityEntry }
    | { type: 'request:denied'; requestId: string; activity: ActivityEntry }
    | { type: 'request:expired'; requestId: string }
    | { type: 'request:auto_approved'; activity: ActivityEntry }
    | { type: 'app:connected'; app: ConnectedApp }
    | { type: 'app:revoked'; appId: number }
    | { type: 'app:updated'; app: ConnectedApp }
    | { type: 'apps:updated' }
    | { type: 'key:created'; key: KeyInfo }
    | { type: 'key:unlocked'; keyName: string }
    | { type: 'key:locked'; keyName: string }
    | { type: 'key:deleted'; keyName: string }
    | { type: 'key:renamed'; oldName: string; newName: string }
    | { type: 'key:updated'; keyName: string }
    | { type: 'stats:updated'; stats: DashboardStats }
    | { type: 'relays:updated'; relays: RelayStatusResponse }
    | { type: 'admin:event'; activity: AdminActivityEntry }
    | { type: 'deadman:panic'; status: DeadManSwitchStatus }
    | { type: 'deadman:reset'; status: DeadManSwitchStatus }
    | { type: 'deadman:updated'; status: DeadManSwitchStatus }
    | { type: 'log:entry'; entry: LogEntry }
    | { type: 'health:updated'; health: HealthStatus }
    | { type: 'ping' };
