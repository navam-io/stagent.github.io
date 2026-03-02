---
name: stagent-stats
description: Collect development metrics (LOC, tests, commits, intents, infrastructure) from the Stagent project and write a timestamped report to stagent-stats.md. Use when the user asks to check project stats, update metrics, or track development velocity.
---

This skill collects comprehensive development metrics from the Stagent project and writes them to `stagent-stats.md` as a timestamped entry. Each run appends a new entry, building a time-series of project velocity.

## Target Project

The Stagent codebase lives at `/Users/manavsehgal/Developer/stagent/`. All metric collection commands run against that directory. The report file `stagent-stats.md` is written to the current working directory.

## Collection Steps

### 1. Verify Tools

Check availability of these tools before proceeding:
- `tokei` — fast LOC counter (install: `brew install tokei`)
- `cargo` — Rust toolchain (for `cargo clippy`)
- `git` — version control

If `tokei` is missing, fall back to `find + wc -l` for LOC counting. Note any missing tools in the report.

### 2. Collect LOC

Run `tokei` on the Stagent project root:
```bash
tokei /Users/manavsehgal/Developer/stagent/ --sort code -t=Rust,TypeScript,TSX,CSS,HTML,SQL,TOML,JSON
```

If `tokei` is unavailable, use:
```bash
find /Users/manavsehgal/Developer/stagent/src -name '*.rs' -o -name '*.ts' -o -name '*.tsx' | xargs wc -l
```

Record: Rust LOC, TypeScript production LOC, TypeScript test LOC, total LOC.

### 3. Count Tests

Count test functions across all frameworks:
```bash
# Vitest/Jest tests
grep -r "it(\|test(" /Users/manavsehgal/Developer/stagent/src --include="*.test.ts" --include="*.test.tsx" --include="*.spec.ts" | wc -l

# Playwright tests
grep -r "test(" /Users/manavsehgal/Developer/stagent/e2e --include="*.ts" 2>/dev/null | wc -l

# Rust tests
grep -r "#\[test\]" /Users/manavsehgal/Developer/stagent/src-tauri --include="*.rs" | wc -l
```

Record: Vitest count, Playwright count, Rust count, total.

### 4. Git Velocity

```bash
cd /Users/manavsehgal/Developer/stagent/
git rev-list --count HEAD
git log --oneline --since="$(git log --reverse --format='%aI' | head -1)" | wc -l
git log --reverse --format='%aI' | head -1  # first commit timestamp
git log -1 --format='%aI'                   # latest commit timestamp
```

Compute:
- Total commits
- Hours elapsed (latest - first commit)
- Commits per hour (commits / hours)
- LOC per hour (total LOC / hours)

### 5. Intent Status

```bash
# Count completed intents
grep -rl "status: done\|status: complete" /Users/manavsehgal/Developer/stagent/intents/ 2>/dev/null | wc -l

# Count total intents
ls /Users/manavsehgal/Developer/stagent/intents/*.md 2>/dev/null | wc -l
```

If intents directory doesn't exist, check for alternative locations or note as unavailable.
List completed intent names.

### 6. Infrastructure Counts

```bash
# IPC commands
grep -r "#\[tauri::command\]" /Users/manavsehgal/Developer/stagent/src-tauri --include="*.rs" | wc -l

# Database tables
grep -c "CREATE TABLE" /Users/manavsehgal/Developer/stagent/src-tauri/migrations/*.sql 2>/dev/null || echo 0

# React components (exported components in src/)
find /Users/manavsehgal/Developer/stagent/src/components -name "*.tsx" 2>/dev/null | wc -l
```

### 7. Quality Indicators

```bash
cd /Users/manavsehgal/Developer/stagent/
cargo clippy 2>&1 | tail -5  # Rust lint summary
```

Note TypeScript strict mode and ESLint config status if available.

### 8. Write Report

Read the existing `stagent-stats.md` file if it exists. Append a new timestamped entry in this format:

```markdown
## [YYYY-MM-DD HH:MM] Metrics Snapshot

| Category | Metric | Value |
|----------|--------|-------|
| LOC | Rust | X,XXX |
| LOC | TypeScript (production) | X,XXX |
| LOC | TypeScript (tests) | X,XXX |
| LOC | **Total** | **X,XXX** |
| Tests | Vitest | XX |
| Tests | Playwright | XX |
| Tests | Rust | XX |
| Tests | **Total** | **XXX** |
| Git | Commits | XX |
| Git | Hours elapsed | XX.X |
| Git | Commits/hour | X.X |
| Git | LOC/hour | XXX |
| Intents | Completed | X/XX |
| Infra | IPC commands | XX |
| Infra | DB tables | XX |
| Infra | UI components | XX |
```

### 9. Trend Comparison

If previous entries exist in `stagent-stats.md`, compute and display deltas:
- LOC: +X,XXX since last snapshot
- Tests: +XX since last snapshot
- Commits: +XX since last snapshot

Format deltas with arrows: `↑ +1,234 LOC` or `→ no change`.

## Output

After writing the report, summarize the key metrics to the user in a concise format. Highlight any notable velocity changes if previous data exists.

## Updating the Website

After collecting stats, also update `src/data/progress.ts` in the stagent.github.io project with the latest values so the website dashboard stays current. Update:
- `stats.loc` object with new LOC breakdown
- `stats.tests` object with new test counts
- `stats.intents` with completion count and names
- `stats.commits` with count and hours
- `stats.ipc`, `stats.dbTables`, `stats.components`
- `stats.lastUpdated` with today's date
- Add a new entry to the `velocity` array if a new day has passed
- Update `done` flags in the `intents` array for any newly completed intents
