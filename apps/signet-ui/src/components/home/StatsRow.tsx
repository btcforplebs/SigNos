import React from 'react';
import type { DashboardStats, RelayStatusResponse } from '@signet/types';
import { Radio, Key, Smartphone, Clock } from 'lucide-react';
import styles from './HomeView.module.css';

interface StatsRowProps {
  stats: DashboardStats | null;
  relayStatus: RelayStatusResponse | null;
}

export function StatsRow({ stats, relayStatus }: StatsRowProps) {
  return (
    <section className={styles.statsSection}>
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.statIconRelays}`}>
            <Radio size={24} />
          </div>
          <div className={styles.statContent}>
            <span className={styles.statValue}>
              {relayStatus ? `${relayStatus.connected}/${relayStatus.total}` : '-'}
            </span>
            <span className={styles.statLabel}>Relays</span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.statIconKeys}`}>
            <Key size={24} />
          </div>
          <div className={styles.statContent}>
            <span className={styles.statValue}>{stats?.activeKeys ?? '-'}</span>
            <span className={styles.statLabel}>Keys</span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.statIconApps}`}>
            <Smartphone size={24} />
          </div>
          <div className={styles.statContent}>
            <span className={styles.statValue}>{stats?.connectedApps ?? '-'}</span>
            <span className={styles.statLabel}>Apps</span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.statIconActivity}`}>
            <Clock size={24} />
          </div>
          <div className={styles.statContent}>
            <span className={styles.statValue}>{stats?.recentActivity24h ?? '-'}</span>
            <span className={styles.statLabel}>Last 24h</span>
          </div>
        </div>
      </div>
    </section>
  );
}
