export interface Layer {
  name: string;
  title: string;
  whatExists: string;
  whatsMissing: string;
}

export const layers: Layer[] = [
  {
    name: 'Infrastructure',
    title: 'Browser pools, compute sandboxes, LLM APIs',
    whatExists: 'Browserbase, E2B, model providers deliver reliable primitives.',
    whatsMissing:
      'Task awareness — infrastructure does not know what the agent is trying to accomplish.',
  },
  {
    name: 'Application',
    title: 'Gateway control planes, messaging, tool connectors',
    whatExists: 'Gateway patterns work. Routing, policy enforcement, observability.',
    whatsMissing:
      'Long-horizon persistence — sessions are reactive and ephemeral.',
  },
  {
    name: 'Orchestration',
    title: 'Workspace managers, multi-model routers',
    whatExists: 'Parallel orchestration and multi-model routing are validated.',
    whatsMissing:
      'Goal decomposition — orchestrators manage workspaces, not objectives.',
  },
  {
    name: 'Harness',
    title: 'Coordinator-sub-agent patterns, desktop agents',
    whatExists: 'Coordinator-sub-agent patterns work at 40x token overhead.',
    whatsMissing:
      'Memory-native architecture, cross-session persistence, graduated autonomy, agent-to-agent communication.',
  },
];
