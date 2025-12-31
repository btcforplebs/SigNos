import React, { useState } from 'react';
import type { DisplayRequest } from '@signet/types';
import { Clock, ChevronRight, Eye } from 'lucide-react';
import { getMethodInfo, getEventKindLabel } from '../../lib/event-labels.js';
import { formatTtl } from '../../lib/formatters.js';
import styles from './RequestCard.module.css';

interface RequestCardProps {
  request: DisplayRequest;
  password: string;
  onPasswordChange: (value: string) => void;
  onApprove: () => Promise<void>;
  onViewDetails: () => void;
}

export function RequestCard({
  request,
  password,
  onPasswordChange,
  onApprove,
  onViewDetails,
}: RequestCardProps) {
  const [approving, setApproving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleApprove = async () => {
    setApproving(true);
    setError(null);
    try {
      await onApprove();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setApproving(false);
    }
  };

  const { Icon: MethodIcon } = getMethodInfo(request.method);
  const methodLabel = request.method.replace(/_/g, ' ');
  const needsPassword = request.requiresPassword;

  // Get event kind info if signing
  const eventKind = request.method === 'sign_event' && request.eventPreview?.kind !== undefined
    ? getEventKindLabel(request.eventPreview.kind)
    : null;

  // TTL info
  const ttlUrgent = request.ttl < 60;

  return (
    <div className={styles.card}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.methodInfo}>
          <span className={styles.methodIcon}><MethodIcon size={16} /></span>
          <span className={styles.methodName}>{methodLabel}</span>
          {eventKind && (
            <span className={styles.eventKind}>{eventKind}</span>
          )}
        </div>
        <button
          type="button"
          className={styles.detailsButton}
          onClick={onViewDetails}
          aria-label="View details"
        >
          <Eye size={14} />
          <span>Details</span>
          <ChevronRight size={14} />
        </button>
      </div>

      {/* Meta info */}
      <div className={styles.meta}>
        {request.keyName && (
          <>
            <span className={styles.keyName}>{request.keyName}</span>
            <span className={styles.separator}>·</span>
          </>
        )}
        <span className={styles.appName} title={request.remotePubkey}>
          {request.npub.slice(0, 12)}...
        </span>
        <span className={styles.separator}>·</span>
        <span className={`${styles.expiry} ${ttlUrgent ? styles.expiryUrgent : ''}`}>
          <Clock size={12} />
          {formatTtl(request.ttl)}
        </span>
      </div>

      {/* Content preview for sign_event */}
      {request.method === 'sign_event' && request.eventPreview?.content && (
        <div className={styles.contentPreview}>
          {request.eventPreview.content.slice(0, 120)}
          {request.eventPreview.content.length > 120 && '...'}
        </div>
      )}

      {/* Actions */}
      <div className={styles.actions}>
        {needsPassword && (
          <input
            type="password"
            className={styles.passwordInput}
            placeholder="Passphrase to unlock key"
            value={password}
            onChange={(e) => onPasswordChange(e.target.value)}
            disabled={approving}
          />
        )}
        <button
          type="button"
          className={styles.approveButton}
          onClick={handleApprove}
          disabled={approving || (needsPassword && !password)}
        >
          {approving ? 'Approving...' : 'Approve'}
        </button>
      </div>

      {/* Error */}
      {error && (
        <div className={styles.error}>{error}</div>
      )}
    </div>
  );
}
