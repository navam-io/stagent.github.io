export interface TimelineItem {
  year: string;
  project: string;
  role: string;
  stats: string;
  techWave: string;
  isCurrent: boolean;
}

export const timeline: TimelineItem[] = [
  {
    year: '2023',
    project: 'FinEdge',
    role: 'Fintech decisioning engine',
    stats: '8K+ lines · React + TypeScript',
    techWave: 'LLM APIs',
    isCurrent: false,
  },
  {
    year: '2023',
    project: 'SuperCRM',
    role: 'Social CRM with AI agents',
    stats: '6K+ lines · Full-stack TypeScript',
    techWave: 'Agent Frameworks',
    isCurrent: false,
  },
  {
    year: '2024',
    project: 'InfraWatch',
    role: 'Infrastructure intelligence platform',
    stats: '10K+ lines · React + Python',
    techWave: 'RAG Systems',
    isCurrent: false,
  },
  {
    year: '2024',
    project: 'AgentKit',
    role: 'Multi-agent development toolkit',
    stats: '5K+ lines · TypeScript + MCP',
    techWave: 'MCP Protocol',
    isCurrent: false,
  },
  {
    year: '2025',
    project: 'Canvas OS',
    role: 'Visual workspace orchestrator',
    stats: '8K+ lines · React Flow + Zustand',
    techWave: 'Agent Orchestration',
    isCurrent: false,
  },
  {
    year: '2025',
    project: 'DeepResearch',
    role: 'Autonomous research synthesis',
    stats: '4K+ lines · Claude SDK + MCP',
    techWave: 'Autonomous Agents',
    isCurrent: false,
  },
  {
    year: '2026',
    project: 'Stagent',
    role: 'Multi-agent autonomous harness',
    stats: '7.3K+ lines · 117 tests · Rust + TypeScript',
    techWave: 'The Harness Layer',
    isCurrent: true,
  },
];
