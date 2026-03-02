export interface Pillar {
  number: number;
  name: string;
  tagline: string;
  description: string;
  icon: 'persistence' | 'orchestration' | 'memory' | 'autonomy' | 'hybrid';
}

export const pillars: Pillar[] = [
  {
    number: 1,
    name: 'Long-Horizon Task Persistence',
    tagline: 'Tasks that span hours, days, or weeks.',
    description:
      'Checkpoint/resume, progress tracking, failure recovery, and resource budgets. No existing product fully supports tasks beyond a single session. Stagent makes task persistence the architectural foundation, not a feature bolted onto chat.',
    icon: 'persistence',
  },
  {
    number: 2,
    name: 'Multi-Model Orchestration',
    tagline: 'Route subtasks to the best available model.',
    description:
      'Claude for reasoning, GPT for long-context, Gemini for research, Grok for speed, open-source models for cost control and privacy. Transparent routing with measured performance — including local model support via Ollama for offline work.',
    icon: 'orchestration',
  },
  {
    number: 3,
    name: 'Memory-Native Architecture',
    tagline: 'Memory as a core primitive, not a subsystem.',
    description:
      'Four-tier hierarchical memory: working (active context), episodic (past interactions), semantic (distilled knowledge), and procedural (learned strategies). Agents curate their own memory — not just passively accumulate it.',
    icon: 'memory',
  },
  {
    number: 4,
    name: 'Graduated Autonomy',
    tagline: 'Trust calibrated by observed performance.',
    description:
      'New or risky tasks run in high-oversight mode. Well-understood tasks graduate to autonomous execution. Trust is per-agent-type, per-task-type, and per-risk-level — not global. Hard boundaries remain regardless of trust level.',
    icon: 'autonomy',
  },
  {
    number: 5,
    name: 'Desktop-Native with Hybrid Execution',
    tagline: 'Local-first with cloud-optional elasticity.',
    description:
      'Tauri-based desktop application for privacy, low latency, and full filesystem access. Cloud-optional for background execution and elastic compute. The same task graph runs locally or in the cloud — the orchestration layer is location-agnostic.',
    icon: 'hybrid',
  },
];
