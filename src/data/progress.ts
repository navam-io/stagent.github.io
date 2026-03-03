export interface ProgressStats {
  loc: { rust: number; tsProduction: number; tsTests: number; total: number };
  tests: { vitest: number; playwright: number; rust: number; total: number };
  intents: { completed: number; total: number; completedNames: string[] };
  commits: { count: number; hoursElapsed: number };
  ipc: number;
  dbTables: number;
  components: number;
  lastUpdated: string;
}

export interface VelocityPoint {
  day: number;
  label: string;
  loc: number;
  tests: number;
  commits: number;
}

export interface IntentStatus {
  id: string;
  name: string;
  done: boolean;
}

export const stats: ProgressStats = {
  loc: { rust: 4489, tsProduction: 6960, tsTests: 4836, total: 16285 },
  tests: { vitest: 365, playwright: 3, rust: 53, total: 421 },
  intents: {
    completed: 10,
    total: 37,
    completedNames: [
      '001-tauri-app-scaffold',
      '002-shared-types-schemas',
      '003-sqlite-database-layer',
      '004-tauri-ipc-bridge',
      '005-sidecar-process-manager',
      '006-config-settings',
      '007-model-registry-providers',
      '008-multi-model-router',
      '009-task-graph-data-model',
      '012-agent-lifecycle-interface',
    ],
  },
  commits: { count: 27, hoursElapsed: 33.5 },
  ipc: 31,
  dbTables: 11,
  components: 16,
  lastUpdated: '2026-03-02',
};

export const velocity: VelocityPoint[] = [
  { day: 0, label: 'Start', loc: 0, tests: 0, commits: 0 },
  { day: 1, label: 'Day 1', loc: 4520, tests: 74, commits: 12 },
  { day: 2, label: 'Day 2', loc: 16285, tests: 421, commits: 27 },
];

export const intents: IntentStatus[] = [
  { id: '001', name: 'Tauri Scaffold', done: true },
  { id: '002', name: 'Shared Schemas', done: true },
  { id: '003', name: 'SQLite Layer', done: true },
  { id: '004', name: 'IPC Bridge', done: true },
  { id: '005', name: 'Sidecar Manager', done: true },
  { id: '006', name: 'Config & Settings', done: true },
  { id: '007', name: 'Model Registry', done: true },
  { id: '008', name: 'Multi-Model Router', done: true },
  { id: '009', name: 'Task Graph', done: true },
  { id: '010', name: 'Task Canvas Basic', done: false },
  { id: '011', name: 'Canvas Interactions', done: false },
  { id: '012', name: 'Agent Lifecycle', done: true },
  { id: '013', name: 'MCP Tools', done: false },
  { id: '014', name: 'Execution Engine', done: false },
  { id: '015', name: 'Checkpoint Resume', done: false },
  { id: '016', name: 'Working Memory', done: false },
  { id: '017', name: 'Episodic Memory', done: false },
  { id: '018', name: 'Permission Model', done: false },
  { id: '019', name: 'Audit Trail', done: false },
  { id: '020', name: 'Task Import/Export', done: false },
  { id: '021', name: 'Dark Mode/Theme', done: false },
  { id: '022', name: 'Chat View', done: false },
  { id: '023', name: 'Dashboard View', done: false },
  { id: '024', name: 'Keyboard Shortcuts', done: false },
  { id: '025', name: 'Task Templates', done: false },
  { id: '026', name: 'Agent Inspector', done: false },
  { id: '027', name: 'Memory Explorer', done: false },
  { id: '028', name: 'Browser Provider', done: false },
  { id: '029', name: 'Browser Fleet', done: false },
  { id: '030', name: 'Connector Market', done: false },
  { id: '031', name: 'Semantic Memory', done: false },
  { id: '032', name: 'Procedural Memory', done: false },
  { id: '033', name: 'Learning Loop', done: false },
  { id: '034', name: 'Spec-Driven Tasks', done: false },
  { id: '035', name: 'WASM Sandbox', done: false },
  { id: '036', name: 'Hybrid Execution', done: false },
  { id: '037', name: 'A2A Protocol', done: false },
];
