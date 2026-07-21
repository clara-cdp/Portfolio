import RevealWrapper from '../RevealWrapper/RevealWrapper';
import {
  Code2,
  Server,
  Network,
  Database,
  ShieldCheck,
  GitBranch,
  CloudUpload,
  RefreshCw,
  Brain,
  Wrench,
  Palette,
  LayoutGrid,
  Film,
  Terminal,
  Sparkles,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface StackCard {
  id: string;
  title: string;
  technologies: string[];
  icon: LucideIcon;
  color: {
    iconBg: string;
    iconText: string;
    border: string;
    divider: string;
    dotBg: string;
    dotGlow: string;
  };
}

const stackCards: StackCard[] = [
  {
    id: 'frontend',
    title: 'FRONTEND',
    technologies: ['React | TypeScript | JavaScript', 'HTML5 | CSS3 | Tailwind CSS'],
    icon: Code2,
    color: {
      iconBg: 'bg-cyan-500/10',
      iconText: 'text-brand-cyan',
      border: 'border-cyan-500/30 hover:border-brand-cyan',
      divider: 'bg-brand-cyan/40',
      dotBg: 'bg-brand-cyan',
      dotGlow: 'shadow-[0_0_8px_#17D0D0]',
    },
  },
  {
    id: 'backend',
    title: 'BACKEND',
    technologies: ['PHP | Laravel | Node.js | Express.js'],
    icon: Server,
    color: {
      iconBg: 'bg-amber-500/10',
      iconText: 'text-amber-400',
      border: 'border-amber-500/30 hover:border-amber-400',
      divider: 'bg-amber-400/40',
      dotBg: 'bg-amber-400',
      dotGlow: 'shadow-[0_0_8px_#F59E0B]',
    },
  },
  {
    id: 'architecture',
    title: 'ARCHITECTURE & APIS',
    technologies: ['MVC | REST APIs | Systems Design'],
    icon: Network,
    color: {
      iconBg: 'bg-purple-500/10',
      iconText: 'text-purple-400',
      border: 'border-purple-500/30 hover:border-purple-400',
      divider: 'bg-purple-400/40',
      dotBg: 'bg-purple-400',
      dotGlow: 'shadow-[0_0_8px_#C084FC]',
    },
  },
  {
    id: 'databases',
    title: 'DATABASES',
    technologies: ['MySQL | PostgreSQL | SQLite', 'MongoDB'],
    icon: Database,
    color: {
      iconBg: 'bg-emerald-500/10',
      iconText: 'text-emerald-400',
      border: 'border-emerald-500/30 hover:border-emerald-400',
      divider: 'bg-emerald-400/40',
      dotBg: 'bg-emerald-400',
      dotGlow: 'shadow-[0_0_8px_#34D399]',
    },
  },
  {
    id: 'testing',
    title: 'TESTING',
    technologies: ['Vitest | Pest | PHPUnit'],
    icon: ShieldCheck,
    color: {
      iconBg: 'bg-pink-500/10',
      iconText: 'text-pink-400',
      border: 'border-pink-500/30 hover:border-pink-400',
      divider: 'bg-pink-400/40',
      dotBg: 'bg-pink-400',
      dotGlow: 'shadow-[0_0_8px_#F472B6]',
    },
  },
  {
    id: 'version-control',
    title: 'VERSION CONTROL',
    technologies: ['Git | GitHub | GitLab | Gitflow'],
    icon: GitBranch,
    color: {
      iconBg: 'bg-orange-500/10',
      iconText: 'text-orange-400',
      border: 'border-orange-500/30 hover:border-orange-400',
      divider: 'bg-orange-400/40',
      dotBg: 'bg-orange-400',
      dotGlow: 'shadow-[0_0_8px_#FB923C]',
    },
  },
  {
    id: 'devops',
    title: 'DEVOPS & DEPLOYMENT',
    technologies: ['Docker | CI/CD | Render'],
    icon: CloudUpload,
    color: {
      iconBg: 'bg-blue-500/10',
      iconText: 'text-blue-400',
      border: 'border-blue-500/30 hover:border-blue-400',
      divider: 'bg-blue-400/40',
      dotBg: 'bg-blue-400',
      dotGlow: 'shadow-[0_0_8px_#60A5FA]',
    },
  },
  {
    id: 'workflow',
    title: 'DEVELOPMENT WORKFLOW',
    technologies: ['Agile (Scrum) | Kanban', 'Code Reviews | Pull Requests'],
    icon: RefreshCw,
    color: {
      iconBg: 'bg-teal-500/10',
      iconText: 'text-teal-400',
      border: 'border-teal-500/30 hover:border-teal-400',
      divider: 'bg-teal-400/40',
      dotBg: 'bg-teal-400',
      dotGlow: 'shadow-[0_0_8px_#2DD4BF]',
    },
  },
  {
    id: 'ai-dev',
    title: 'AI DEVELOPMENT',
    technologies: [
      'Prompt Engineering | LLM Integration',
      'Cursor | Antigravity | OpenAI Codex | Claude',
    ],
    icon: Brain,
    color: {
      iconBg: 'bg-violet-500/10',
      iconText: 'text-violet-400',
      border: 'border-violet-500/30 hover:border-violet-400',
      divider: 'bg-violet-400/40',
      dotBg: 'bg-violet-400',
      dotGlow: 'shadow-[0_0_8px_#A78BFA]',
    },
  },
  {
    id: 'dev-tools',
    title: 'DEVELOPMENT TOOLS',
    technologies: ['VS Code | Postman | Bruno | npm | Vite'],
    icon: Wrench,
    color: {
      iconBg: 'bg-lime-500/10',
      iconText: 'text-lime-400',
      border: 'border-lime-500/30 hover:border-lime-400',
      divider: 'bg-lime-400/40',
      dotBg: 'bg-lime-400',
      dotGlow: 'shadow-[0_0_8px_#A3E635]',
    },
  },
  {
    id: 'design',
    title: 'DESIGN',
    technologies: ['Figma | Illustrator | Photoshop', 'InDesign'],
    icon: Palette,
    color: {
      iconBg: 'bg-rose-500/10',
      iconText: 'text-rose-400',
      border: 'border-rose-500/30 hover:border-rose-400',
      divider: 'bg-rose-400/40',
      dotBg: 'bg-rose-400',
      dotGlow: 'shadow-[0_0_8px_#FB7185]',
    },
  },
  {
    id: 'product-ux',
    title: 'PRODUCT & UX',
    technologies: [
      'Wireframing | Prototyping',
      'Responsive Design | Design Systems',
    ],
    icon: LayoutGrid,
    color: {
      iconBg: 'bg-sky-500/10',
      iconText: 'text-sky-400',
      border: 'border-sky-500/30 hover:border-sky-400',
      divider: 'bg-sky-400/40',
      dotBg: 'bg-sky-400',
      dotGlow: 'shadow-[0_0_8px_#38BDF8]',
    },
  },
  {
    id: 'motion-media',
    title: 'MOTION & MEDIA',
    technologies: ['After Effects | Premiere Pro', 'Motion Graphics'],
    icon: Film,
    color: {
      iconBg: 'bg-orange-500/10',
      iconText: 'text-orange-400',
      border: 'border-orange-500/30 hover:border-orange-400',
      divider: 'bg-orange-400/40',
      dotBg: 'bg-orange-400',
      dotGlow: 'shadow-[0_0_8px_#FB923C]',
    },
  },
  {
    id: 'additional-languages',
    title: 'ADDITIONAL LANGUAGES',
    technologies: ['Go | Java | Python'],
    icon: Terminal,
    color: {
      iconBg: 'bg-emerald-500/10',
      iconText: 'text-emerald-400',
      border: 'border-emerald-500/30 hover:border-emerald-400',
      divider: 'bg-emerald-400/40',
      dotBg: 'bg-emerald-400',
      dotGlow: 'shadow-[0_0_8px_#34D399]',
    },
  },
  {
    id: 'extras',
    title: 'EXTRAS',
    technologies: ['Unity (C#) | Advanced WordPress'],
    icon: Sparkles,
    color: {
      iconBg: 'bg-emerald-500/10',
      iconText: 'text-emerald-400',
      border: 'border-emerald-500/30 hover:border-emerald-400',
      divider: 'bg-emerald-400/40',
      dotBg: 'bg-emerald-400',
      dotGlow: 'shadow-[0_0_8px_#34D399]',
    },
  },
];

export default function StackSection() {
  return (
    <section id="stack" className="max-w-7xl mx-auto w-full px-6 sm:px-8 md:px-16 lg:px-24 py-16 sm:py-24">
      <RevealWrapper>
        {/* Section Header */}
        <div className="flex items-center gap-3 font-mono text-xs sm:text-sm tracking-[0.2em] mb-10 sm:mb-14">
          <span className="text-brand-cyan font-bold uppercase">
            01 - STACK &gt;
          </span>
          <span className="text-brand-cream/90 font-medium">
            All Systems Operational
          </span>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {stackCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className={`bg-[#0A0E1A]/90 border ${card.color.border} rounded-md p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between group hover:bg-[#0E1424] hover:shadow-lg`}
              >
                <div>
                  {/* Card Header Row */}
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      {/* Icon container */}
                      <div
                        className={`p-2 rounded-md ${card.color.iconBg} ${card.color.iconText} flex items-center justify-center border border-white/5`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      {/* Card Title */}
                      <h3 className="font-mono text-xs sm:text-sm font-bold text-white tracking-wider uppercase">
                        {card.title}
                      </h3>
                    </div>

                    {/* Glowing Status Dot */}
                    <span
                      className={`block w-2.5 h-2.5 rounded-full ${card.color.dotBg} ${card.color.dotGlow} flex-shrink-0`}
                    />
                  </div>

                  {/* Accent Line Divider */}
                  <div className={`w-full h-[1px] ${card.color.divider} my-3.5`} />

                  {/* Technologies Lines */}
                  <div className="font-mono text-[11px] sm:text-xs text-brand-cream/70 tracking-wide leading-relaxed space-y-1">
                    {card.technologies.map((line, idx) => (
                      <div key={idx}>{line}</div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </RevealWrapper>
    </section>
  );
}
