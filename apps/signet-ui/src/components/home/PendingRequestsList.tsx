import React, { useState } from 'react';
import type { DisplayRequest, TrustLevel } from '@signet/types';
import { getMethodLabel } from '@signet/types';
import { ChevronDown, ChevronRight, Check, X, Inbox } from 'lucide-react';
import { getTrustLevelInfo } from '../../lib/event-labels.js';
import styles from './HomeView.module.css';

const TRUST_LEVELS: TrustLevel[] = ['paranoid', 'reasonable', 'full'];

interface PendingRequestsListProps {
  requests: DisplayRequest[];
  passwords: Record<string, string>;
  appNames: Record<string, string>;
  onPasswordChange: (requestId: string, password: string) => void;
  onAppNameChange: (requestId: string, appName: string) => void;
  onApprove: (requestId: string, trustLevel?: TrustLevel, alwaysAllow?: boolean, allowKind?: number, appName?: string) => Promise<void>;
  onDeny: (requestId: string) => Promise<void>;
  onViewDetails: (request: DisplayRequest) => void;
}

export function PendingRequestsList({
  requests,
  passwords,
  appNames,
  onPasswordChange,
  onAppNameChange,
  onApprove,
  onDeny,
  onViewDetails,
}: PendingRequestsListProps) {
  const [expandedRequestId, setExpandedRequestId] = useState<string | null>(null);
  const [selectedTrustLevels, setSelectedTrustLevels] = useState<Record<string, TrustLevel>>({});
  const [removingItems, setRemovingItems] = useState<Record<string, 'approved' | 'denied'>>({});

  const pendingRequests = requests.filter(r => r.state === 'pending');

  const getTrustLevel = (requestId: string): TrustLevel => {
    return selectedTrustLevels[requestId] || 'reasonable';
  };

  const setTrustLevel = (requestId: string, level: TrustLevel) => {
    setSelectedTrustLevels(prev => ({ ...prev, [requestId]: level }));
  };

  const handleApprove = async (requestId: string, trustLevel?: TrustLevel, appName?: string) => {
    setRemovingItems(prev => ({ ...prev, [requestId]: 'approved' }));
    await new Promise(resolve => setTimeout(resolve, 300));
    await onApprove(requestId, trustLevel, undefined, undefined, appName);
    setRemovingItems(prev => {
      const next = { ...prev };
      delete next[requestId];
      return next;
    });
  };

  const handleDeny = async (requestId: string) => {
    setRemovingItems(prev => ({ ...prev, [requestId]: 'denied' }));
    await new Promise(resolve => setTimeout(resolve, 300));
    await onDeny(requestId);
    setRemovingItems(prev => {
      const next = { ...prev };
      delete next[requestId];
      return next;
    });
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>
        Pending
        {pendingRequests.length > 0 && (
          <span className={styles.badge}>{pendingRequests.length}</span>
        )}
      </h2>
      {pendingRequests.length === 0 ? (
        <div className={styles.emptyState}>
          <span className={styles.emptyIcon}><Inbox size={18} /></span>
          <p>No pending approvals</p>
        </div>
      ) : (
        <div className={styles.listCard}>
          {pendingRequests.map((request) => {
            const isExpanded = expandedRequestId === request.id;
            const removingState = removingItems[request.id];
            return (
              <div
                key={request.id}
                className={`${styles.listItem} ${removingState ? styles[`listItem_${removingState}`] : ''}`}
              >
                <button
                  type="button"
                  className={styles.listItemHeader}
                  onClick={() => setExpandedRequestId(isExpanded ? null : request.id)}
                  aria-expanded={isExpanded}
                >
                  <span className={styles.pendingDot} />
                  <span className={styles.listItemMethod}>{getMethodLabel(request.method, request.eventPreview?.kind)}</span>
                  <span className={styles.listItemMeta}>
                    {request.keyName || 'Unknown'} &bull; {request.createdLabel}
                  </span>
                  {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                </button>
                {isExpanded && (
                  <div className={styles.listItemExpanded}>
                    <div className={styles.listItemDetails}>
                      <div className={styles.detailRow}>
                        <span className={styles.detailLabel}>From:</span>
                        <code className={styles.detailValue}>{request.npub.slice(0, 20)}...</code>
                      </div>
                      {request.requiresPassword && (
                        <div className={styles.detailRow}>
                          <span className={styles.detailLabel}>Password:</span>
                          <input
                            type="password"
                            className={styles.passwordInput}
                            aria-label="Password to unlock key"
                            value={passwords[request.id] || ''}
                            onChange={(e) => onPasswordChange(request.id, e.target.value)}
                            placeholder="Enter key password"
                          />
                        </div>
                      )}
                      {request.method === 'connect' && (
                        <>
                          <div className={styles.detailRow}>
                            <span className={styles.detailLabel}>App name:</span>
                            <input
                              type="text"
                              className={styles.appNameInput}
                              aria-label="App name"
                              value={appNames[request.id] || ''}
                              onChange={(e) => onAppNameChange(request.id, e.target.value)}
                              placeholder="e.g., Primal, Amethyst"
                            />
                          </div>
                          <div className={styles.trustSection}>
                            <span className={styles.detailLabel}>Trust:</span>
                            <div className={styles.trustOptions}>
                              {TRUST_LEVELS.map(level => {
                                const info = getTrustLevelInfo(level);
                                const isSelected = getTrustLevel(request.id) === level;
                                return (
                                  <button
                                    type="button"
                                    key={level}
                                    className={`${styles.trustOption} ${isSelected ? styles.trustOptionSelected : ''} ${styles[`trust_${level}`]}`}
                                    onClick={() => setTrustLevel(request.id, level)}
                                  >
                                    <span className={styles.trustOptionLabel}>{info.label}</span>
                                    <span className={styles.trustOptionDesc}>{info.description}</span>
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                    <div className={styles.listItemActions}>
                      <button
                        type="button"
                        className={styles.approveButton}
                        onClick={() => handleApprove(
                          request.id,
                          request.method === 'connect' ? getTrustLevel(request.id) : undefined,
                          request.method === 'connect' ? appNames[request.id] : undefined
                        )}
                        disabled={!!removingState}
                      >
                        {removingState === 'approved' ? <Check size={16} /> : 'Approve'}
                      </button>
                      <button
                        type="button"
                        className={styles.denyButton}
                        onClick={() => handleDeny(request.id)}
                        disabled={!!removingState}
                      >
                        {removingState === 'denied' ? <X size={16} /> : 'Deny'}
                      </button>
                      <button
                        type="button"
                        className={styles.detailsButton}
                        onClick={() => onViewDetails(request)}
                      >
                        Details
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
