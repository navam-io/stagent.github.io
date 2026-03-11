# Stagent Development Metrics

## [2026-03-02 22:00] Metrics Snapshot

| Category | Metric | Value |
|----------|--------|-------|
| LOC | Rust | 4,489 |
| LOC | TypeScript (production) | 6,960 |
| LOC | TypeScript (tests) | 4,836 |
| LOC | SQL / CSS / HTML | 511 |
| LOC | **Total** | **16,796** |
| Tests | Vitest (src) | 171 |
| Tests | Vitest (sidecar) | 194 |
| Tests | Playwright | 3 |
| Tests | Rust | 53 |
| Tests | **Total** | **421** |
| Git | Commits | 27 |
| Git | Hours elapsed | 33.5 |
| Git | Commits/hour | 0.81 |
| Git | LOC/hour | 501 |
| Intents | Completed | 10/37 |
| Infra | IPC commands | 31 |
| Infra | DB tables | 11 |
| Infra | UI components | 16 |

### Completed Intents
- 001-tauri-app-scaffold
- 002-shared-types-and-schemas
- 003-sqlite-database-layer
- 004-tauri-ipc-bridge
- 005-sidecar-process-manager
- 006-config-and-settings
- 007-model-registry-providers
- 008-multi-model-router
- 009-task-graph-data-model
- 012-agent-lifecycle-interface

### Trend (vs previous snapshot — Day 2 partial)
- ↑ +9,515 LOC (7,281 → 16,796)
- ↑ +304 tests (117 → 421)
- ↑ +8 commits (19 → 27)
- ↑ +5 intents completed (5 → 10)
- ↑ +9 IPC commands (22 → 31)
- ↑ +6 UI components (10 → 16)

### Notes
- LOC counted via `find + wc -l` (tokei not installed)
- Rust LOC includes inline `#[cfg(test)]` test modules
- TypeScript production = `src/` + `sidecar/src/` minus test files
- TypeScript tests = `src/test/` + `sidecar/src/__tests__/` + `e2e/`

---

## [2026-03-09 18:00] Metrics Snapshot — Next.js Rewrite

| Category | Metric | Value |
|----------|--------|-------|
| LOC | Production | 18,423 |
| LOC | Tests | 1,580 |
| LOC | **Total** | **20,003** |
| Tests | Vitest | 132 |
| Tests | **Total** | **132** |
| Git | Commits | 22 |
| Git | Days elapsed | 3 |
| Git | Commits/day | 7.2 |
| Git | LOC/day | 6,575 |
| Features | Completed | 21/30 |
| Infra | API routes | 32 |
| Infra | DB tables | 8 |
| Infra | UI components | 91 |
| Infra | Pages | 12 |
| Infra | Agent profiles | 12 |

### Per-Day Feature Velocity
- Day 1 (Mar 6): 0 features (initial commit/setup)
- Day 2 (Mar 8): 18 features shipped (MVP + polish + documents)
- Day 3 (Mar 9): 3 features shipped (agent intelligence + platform)

### Trend (vs previous snapshot — Tauri → Next.js rewrite)
- ↑ +3,207 LOC (16,796 → 20,003)
- ↓ -289 tests (421 → 132) — architecture rewrite, Rust/Playwright tests removed
- ↑ +11 features completed (10/37 → 21/30)
- ↑ +75 UI components (16 → 91)
- ↓ -3 DB tables (11 → 8) — simplified schema
- New: 32 API routes, 12 agent profiles, 12 pages

### Notes
- Complete rewrite from Tauri (Rust + TypeScript) to pure Next.js 16
- LOC/day velocity of 6,575 reflects AI-assisted development with Claude Code
- Feature count methodology changed: "intents" → "features" with new scope (30 total)
