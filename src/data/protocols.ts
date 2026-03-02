export interface Protocol {
  label: string;
  description: string;
  isCore: boolean;
}

export const protocols: Protocol[] = [
  {
    label: 'HARNESS IPC',
    description: 'Task graph + agent lifecycle',
    isCore: true,
  },
  {
    label: 'MCP',
    description: 'Agent ↔ Tool',
    isCore: true,
  },
  {
    label: 'A2A',
    description: 'Agent ↔ Agent',
    isCore: true,
  },
  {
    label: 'WebMCP',
    description: 'Agent ↔ Website',
    isCore: false,
  },
  {
    label: 'CDP',
    description: 'Browser fallback',
    isCore: false,
  },
  {
    label: 'TAURI IPC',
    description: 'Frontend ↔ Backend',
    isCore: false,
  },
];
