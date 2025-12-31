# Changelog

## [1.0.0-beta]

### Added
- App names displayed throughout UI instead of truncated npubs
- Auto-approved requests now logged and visible in Activity feed
- Real-time updates via Server-Sent Events
- Batch approval for multiple pending requests
- Search and filtering for requests and apps
- Command palette (Cmd+K / Ctrl+K)
- Relay health monitoring with auto-reconnect
- Help page with documentation and keyboard shortcuts
- NIP-04 encryption support for legacy clients
- Added DEPLOYMENT.md to document how to run Signet behind Tailscale
- Added dashboard and help page screenshots

### Changed
- Complete UI redesign with dark theme and sidebar navigation
- WCAG 2.1 AA accessibility compliance
- Connect flow now always requires manual approval with trust level selection
- Simplified trust level labels: "Always Ask", "Auto-approve Safe", "Auto-approve All"
- Switched Docker images from node:20-alpine to node:20-slim to avoid building better-sqlite3 from source on image rebuids.
- Updated all documentation to reflect current state of backend and frontend

### Removed
- OAuth account creation flow
- NDK dependency (replaced with nostr-tools)

### Fixed
- Relay subscriptions now recover after system sleep/wake
- Pending count excludes expired requests
- Various race conditions and error handling improvements

### Security
- JWT authentication required for all sensitive endpoints
- Upgraded to AES-256-GCM encryption with PBKDF2 (600k iterations)
- CSRF protection, rate limiting, timing-safe comparisons

---

## [0.10.5]

Initial public release of Signet fork from nsecbunkerd.

### Added
- Modern React dashboard UI
- NIP-46 remote signing support
- Multi-key management
- Web-based request approval flow
- Docker Compose deployment
