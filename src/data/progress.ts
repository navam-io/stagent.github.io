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
  loc: { rust: 2847, tsProduction: 2651, tsTests: 1783, total: 7281 },
  tests: { vitest: 98, playwright: 12, rust: 7, total: 117 },
  intents: {
    completed: 5,
    total: 37,
    completedNames: [
      '001-tauri-shell',
      '002-ipc-bridge',
      '003-task-persistence',
      '004-react-canvas',
      '006-memory-working',
    ],
  },
  commits: { count: 19, hoursElapsed: 21 },
  ipc: 22,
  dbTables: 11,
  components: 10,
  lastUpdated: '2026-03-02',
};

export const velocity: VelocityPoint[] = [
  { day: 0, label: 'Start', loc: 0, tests: 0, commits: 0 },
  { day: 1, label: 'Day 1', loc: 4520, tests: 74, commits: 12 },
  { day: 2, label: 'Day 2', loc: 7281, tests: 117, commits: 19 },
];

export const intents: IntentStatus[] = [
  { id: '001', name: 'Tauri Shell', done: true },
  { id: '002', name: 'IPC Bridge', done: true },
  { id: '003', name: 'Task Persistence', done: true },
  { id: '004', name: 'React Canvas', done: true },
  { id: '005', name: 'Single-Model Agent', done: false },
  { id: '006', name: 'Working Memory', done: true },
  { id: '007', name: 'Episodic Memory', done: false },
  { id: '008', name: 'MCP Tool Runner', done: false },
  { id: '009', name: 'Checkpoint Resume', done: false },
  { id: '010', name: 'Task DAG Engine', done: false },
  { id: '011', name: 'Multi-Model Router', done: false },
  { id: '012', name: 'Provider Registry', done: false },
  { id: '013', name: 'Agent Inspector', done: false },
  { id: '014', name: 'Browser Fleet', done: false },
  { id: '015', name: 'Semantic Memory', done: false },
  { id: '016', name: 'Procedural Memory', done: false },
  { id: '017', name: 'Trust Calibration', done: false },
  { id: '018', name: 'Autonomy Levels', done: false },
  { id: '019', name: 'Template System', done: false },
  { id: '020', name: 'Connector Market', done: false },
  { id: '021', name: 'WASM Sandbox', done: false },
  { id: '022', name: 'Cloud Sandbox', done: false },
  { id: '023', name: 'A2A Protocol', done: false },
  { id: '024', name: 'WebMCP Bridge', done: false },
  { id: '025', name: 'CDP Automation', done: false },
  { id: '026', name: 'Ollama Local', done: false },
  { id: '027', name: 'Learning Loop', done: false },
  { id: '028', name: 'Cost Tracking', done: false },
  { id: '029', name: 'Token Budget', done: false },
  { id: '030', name: 'Context Window', done: false },
  { id: '031', name: 'Trace Viewer', done: false },
  { id: '032', name: 'Metrics Dashboard', done: false },
  { id: '033', name: 'Plugin System', done: false },
  { id: '034', name: 'Theme Engine', done: false },
  { id: '035', name: 'Keyboard Nav', done: false },
  { id: '036', name: 'CLI Interface', done: false },
  { id: '037', name: 'Auto Update', done: false },
];
