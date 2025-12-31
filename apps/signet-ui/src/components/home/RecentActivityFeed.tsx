import React from 'react';
import type { ActivityEntry } from '@signet/types';
import { getMethodLabelPastTense } from '@signet/types';
import { Clock, ChevronRight, Check, X, Activity } from 'lucide-react';
import { formatTimeAgo } from '../../lib/formatters.js';
import styles from './HomeView.module.css';

interface RecentActivityFeedProps {
  activity: ActivityEntry[];
  showAutoApproved: boolean;
  onToggleShowAutoApproved: () => void;
  onNavigateToActivity: () => void;
}

export function RecentActivityFeed({
  activity,
  showAutoApproved,
  onToggleShowAutoApproved,
  onNavigateToActivity,
}: RecentActivityFeedProps) {
  const filteredActivity = showAutoApproved
    ? activity
    : activity.filter(entry => !entry.autoApproved);
  const recentActivity = filteredActivity.slice(0, 5);

  const getActivityIcon = (type: string) => {
    if (type === 'approved') return <Check size={14} className={styles.activityIconApproved} />;
    if (type === 'denied') return <X size={14} className={styles.activityIconDenied} />;
    return <Clock size={14} className={styles.activityIconPending} />;
  };

  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Recent</h2>
        <label className={styles.filterToggle}>
          <input
            type="checkbox"
            className={styles.visuallyHidden}
            checked={showAutoApproved}
            onChange={onToggleShowAutoApproved}
          />
          <span className={styles.checkbox} aria-hidden="true" />
          <span>Show auto</span>
        </label>
      </div>
      {recentActivity.length === 0 ? (
        <div className={styles.emptyState}>
          <span className={styles.emptyIcon}><Activity size={18} /></span>
          <p>{activity.length === 0 ? 'No recent activity' : 'No manual approvals'}</p>
        </div>
      ) : (
        <div className={styles.listCard}>
          {recentActivity.map((entry) => (
            <div key={entry.id} className={styles.activityItem}>
              {getActivityIcon(entry.type)}
              <span className={styles.activityMethod}>{entry.method ? getMethodLabelPastTense(entry.method, entry.eventKind) : entry.type}</span>
              <span className={styles.activityMeta}>
                {entry.appName || entry.keyName || 'Unknown'}
              </span>
              <span className={styles.activityTime}>
                {entry.autoApproved && <span className={styles.autoBadge}>Auto</span>}
                {formatTimeAgo(entry.timestamp)}
              </span>
            </div>
          ))}
          <button type="button" className={styles.viewAllButton} onClick={onNavigateToActivity}>
            View all
            <ChevronRight size={14} />
          </button>
        </div>
      )}
    </section>
  );
}
