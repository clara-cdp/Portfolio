import { useState, useEffect, useRef } from 'react';
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
  group: 'dev' | 'system' | 'design' | 'ai-extras';
  technologies: string[];
  icon: LucideIcon;
  color: {
    iconBg: string;
    iconText: string;
    border: string;
    borderGlow: string;
    divider: string;
    dotBg: string;
    dotGlow: string;
    tagBg: string;
    tagText: string;
  };
}

const stackCards: StackCard[] = [
  {
    id: 'frontend',
    title: 'FRONTEND',
    group: 'dev',
    technologies: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
    icon: Code2,
    color: {
      iconBg: 'bg-cyan-500/15',
      iconText: 'text-brand-cyan',
      border: 'border-cyan-500/30 hover:border-brand-cyan',
      borderGlow: 'hover:shadow-[0_0_25px_rgba(23,208,208,0.25)]',
      divider: 'bg-brand-cyan/40',
      dotBg: 'bg-brand-cyan',
      dotGlow: 'shadow-[0_0_10px_#17D0D0]',
      tagBg: 'hover:bg-cyan-500/20 hover:border-cyan-500/50',
      tagText: 'group-hover/tag:text-brand-cyan',
    },
  },
  {
    id: 'backend',
    title: 'BACKEND',
    group: 'dev',
    technologies: ['PHP', 'Laravel', 'Node.js', 'Express.js'],
    icon: Server,
    color: {
      iconBg: 'bg-amber-500/15',
      iconText: 'text-amber-400',
      border: 'border-amber-500/30 hover:border-amber-400',
      borderGlow: 'hover:shadow-[0_0_25px_rgba(245,158,11,0.25)]',
      divider: 'bg-amber-400/40',
      dotBg: 'bg-amber-400',
      dotGlow: 'shadow-[0_0_10px_#F59E0B]',
      tagBg: 'hover:bg-amber-500/20 hover:border-amber-500/50',
      tagText: 'group-hover/tag:text-amber-400',
    },
  },
  {
    id: 'architecture',
    title: 'ARCHITECTURE & APIS',
    group: 'system',
    technologies: ['MVC', 'REST APIs', 'Systems Design'],
    icon: Network,
    color: {
      iconBg: 'bg-purple-500/15',
      iconText: 'text-purple-400',
      border: 'border-purple-500/30 hover:border-purple-400',
      borderGlow: 'hover:shadow-[0_0_25px_rgba(192,132,252,0.25)]',
      divider: 'bg-purple-400/40',
      dotBg: 'bg-purple-400',
      dotGlow: 'shadow-[0_0_10px_#C084FC]',
      tagBg: 'hover:bg-purple-500/20 hover:border-purple-500/50',
      tagText: 'group-hover/tag:text-purple-400',
    },
  },
  {
    id: 'databases',
    title: 'DATABASES',
    group: 'system',
    technologies: ['MySQL', 'PostgreSQL', 'SQLite', 'MongoDB'],
    icon: Database,
    color: {
      iconBg: 'bg-emerald-500/15',
      iconText: 'text-emerald-400',
      border: 'border-emerald-500/30 hover:border-emerald-400',
      borderGlow: 'hover:shadow-[0_0_25px_rgba(52,211,153,0.25)]',
      divider: 'bg-emerald-400/40',
      dotBg: 'bg-emerald-400',
      dotGlow: 'shadow-[0_0_10px_#34D399]',
      tagBg: 'hover:bg-emerald-500/20 hover:border-emerald-500/50',
      tagText: 'group-hover/tag:text-emerald-400',
    },
  },
  {
    id: 'testing',
    title: 'TESTING',
    group: 'dev',
    technologies: ['Vitest', 'Pest', 'PHPUnit'],
    icon: ShieldCheck,
    color: {
      iconBg: 'bg-pink-500/15',
      iconText: 'text-pink-400',
      border: 'border-pink-500/30 hover:border-pink-400',
      borderGlow: 'hover:shadow-[0_0_25px_rgba(244,114,182,0.25)]',
      divider: 'bg-pink-400/40',
      dotBg: 'bg-pink-400',
      dotGlow: 'shadow-[0_0_10px_#F472B6]',
      tagBg: 'hover:bg-pink-500/20 hover:border-pink-500/50',
      tagText: 'group-hover/tag:text-pink-400',
    },
  },
  {
    id: 'version-control',
    title: 'VERSION CONTROL',
    group: 'dev',
    technologies: ['Git', 'GitHub', 'GitLab', 'Gitflow'],
    icon: GitBranch,
    color: {
      iconBg: 'bg-orange-500/15',
      iconText: 'text-orange-400',
      border: 'border-orange-500/30 hover:border-orange-400',
      borderGlow: 'hover:shadow-[0_0_25px_rgba(251,146,60,0.25)]',
      divider: 'bg-orange-400/40',
      dotBg: 'bg-orange-400',
      dotGlow: 'shadow-[0_0_10px_#FB923C]',
      tagBg: 'hover:bg-orange-500/20 hover:border-orange-500/50',
      tagText: 'group-hover/tag:text-orange-400',
    },
  },
  {
    id: 'devops',
    title: 'DEVOPS & DEPLOYMENT',
    group: 'system',
    technologies: ['Docker', 'CI/CD', 'Render'],
    icon: CloudUpload,
    color: {
      iconBg: 'bg-blue-500/15',
      iconText: 'text-blue-400',
      border: 'border-blue-500/30 hover:border-blue-400',
      borderGlow: 'hover:shadow-[0_0_25px_rgba(96,165,250,0.25)]',
      divider: 'bg-blue-400/40',
      dotBg: 'bg-blue-400',
      dotGlow: 'shadow-[0_0_10px_#60A5FA]',
      tagBg: 'hover:bg-blue-500/20 hover:border-blue-500/50',
      tagText: 'group-hover/tag:text-blue-400',
    },
  },
  {
    id: 'workflow',
    title: 'DEVELOPMENT WORKFLOW',
    group: 'dev',
    technologies: ['Agile (Scrum)', 'Kanban', 'Code Reviews', 'Pull Requests'],
    icon: RefreshCw,
    color: {
      iconBg: 'bg-teal-500/15',
      iconText: 'text-teal-400',
      border: 'border-teal-500/30 hover:border-teal-400',
      borderGlow: 'hover:shadow-[0_0_25px_rgba(45,212,191,0.25)]',
      divider: 'bg-teal-400/40',
      dotBg: 'bg-teal-400',
      dotGlow: 'shadow-[0_0_10px_#2DD4BF]',
      tagBg: 'hover:bg-teal-500/20 hover:border-teal-500/50',
      tagText: 'group-hover/tag:text-teal-400',
    },
  },
  {
    id: 'ai-dev',
    title: 'AI DEVELOPMENT',
    group: 'ai-extras',
    technologies: [
      'Prompt Engineering',
      'LLM Integration',
      'Cursor',
      'Antigravity',
      'OpenAI Codex',
      'Claude',
    ],
    icon: Brain,
    color: {
      iconBg: 'bg-violet-500/15',
      iconText: 'text-violet-400',
      border: 'border-violet-500/30 hover:border-violet-400',
      borderGlow: 'hover:shadow-[0_0_25px_rgba(167,139,250,0.25)]',
      divider: 'bg-violet-400/40',
      dotBg: 'bg-violet-400',
      dotGlow: 'shadow-[0_0_10px_#A78BFA]',
      tagBg: 'hover:bg-violet-500/20 hover:border-violet-500/50',
      tagText: 'group-hover/tag:text-violet-400',
    },
  },
  {
    id: 'dev-tools',
    title: 'DEVELOPMENT TOOLS',
    group: 'dev',
    technologies: ['VS Code', 'Postman', 'Bruno', 'npm', 'Vite'],
    icon: Wrench,
    color: {
      iconBg: 'bg-lime-500/15',
      iconText: 'text-lime-400',
      border: 'border-lime-500/30 hover:border-lime-400',
      borderGlow: 'hover:shadow-[0_0_25px_rgba(163,230,53,0.25)]',
      divider: 'bg-lime-400/40',
      dotBg: 'bg-lime-400',
      dotGlow: 'shadow-[0_0_10px_#A3E635]',
      tagBg: 'hover:bg-lime-500/20 hover:border-lime-500/50',
      tagText: 'group-hover/tag:text-lime-400',
    },
  },
  {
    id: 'design',
    title: 'DESIGN',
    group: 'design',
    technologies: ['Figma', 'Illustrator', 'Photoshop', 'InDesign'],
    icon: Palette,
    color: {
      iconBg: 'bg-rose-500/15',
      iconText: 'text-rose-400',
      border: 'border-rose-500/30 hover:border-rose-400',
      borderGlow: 'hover:shadow-[0_0_25px_rgba(251,113,133,0.25)]',
      divider: 'bg-rose-400/40',
      dotBg: 'bg-rose-400',
      dotGlow: 'shadow-[0_0_10px_#FB7185]',
      tagBg: 'hover:bg-rose-500/20 hover:border-rose-500/50',
      tagText: 'group-hover/tag:text-rose-400',
    },
  },
  {
    id: 'product-ux',
    title: 'PRODUCT & UX',
    group: 'design',
    technologies: ['Wireframing', 'Prototyping', 'Responsive Design', 'Design Systems'],
    icon: LayoutGrid,
    color: {
      iconBg: 'bg-sky-500/15',
      iconText: 'text-sky-400',
      border: 'border-sky-500/30 hover:border-sky-400',
      borderGlow: 'hover:shadow-[0_0_25px_rgba(56,189,248,0.25)]',
      divider: 'bg-sky-400/40',
      dotBg: 'bg-sky-400',
      dotGlow: 'shadow-[0_0_10px_#38BDF8]',
      tagBg: 'hover:bg-sky-500/20 hover:border-sky-500/50',
      tagText: 'group-hover/tag:text-sky-400',
    },
  },
  {
    id: 'motion-media',
    title: 'MOTION & MEDIA',
    group: 'design',
    technologies: ['After Effects', 'Premiere Pro', 'Motion Graphics'],
    icon: Film,
    color: {
      iconBg: 'bg-orange-500/15',
      iconText: 'text-orange-400',
      border: 'border-orange-500/30 hover:border-orange-400',
      borderGlow: 'hover:shadow-[0_0_25px_rgba(251,146,60,0.25)]',
      divider: 'bg-orange-400/40',
      dotBg: 'bg-orange-400',
      dotGlow: 'shadow-[0_0_10px_#FB923C]',
      tagBg: 'hover:bg-orange-500/20 hover:border-orange-500/50',
      tagText: 'group-hover/tag:text-orange-400',
    },
  },
  {
    id: 'additional-languages',
    title: 'ADDITIONAL LANGUAGES',
    group: 'dev',
    technologies: ['Go', 'Java', 'Python'],
    icon: Terminal,
    color: {
      iconBg: 'bg-emerald-500/15',
      iconText: 'text-emerald-400',
      border: 'border-emerald-500/30 hover:border-emerald-400',
      borderGlow: 'hover:shadow-[0_0_25px_rgba(52,211,153,0.25)]',
      divider: 'bg-emerald-400/40',
      dotBg: 'bg-emerald-400',
      dotGlow: 'shadow-[0_0_10px_#34D399]',
      tagBg: 'hover:bg-emerald-500/20 hover:border-emerald-500/50',
      tagText: 'group-hover/tag:text-emerald-400',
    },
  },
  {
    id: 'extras',
    title: 'EXTRAS',
    group: 'ai-extras',
    technologies: ['Unity (C#)', 'Advanced WordPress'],
    icon: Sparkles,
    color: {
      iconBg: 'bg-indigo-500/15',
      iconText: 'text-indigo-400',
      border: 'border-indigo-500/30 hover:border-indigo-400',
      borderGlow: 'hover:shadow-[0_0_25px_rgba(129,140,248,0.25)]',
      divider: 'bg-indigo-400/40',
      dotBg: 'bg-indigo-400',
      dotGlow: 'shadow-[0_0_10px_#818CF8]',
      tagBg: 'hover:bg-indigo-500/20 hover:border-indigo-500/50',
      tagText: 'group-hover/tag:text-indigo-400',
    },
  },
];

// Individual Card Component with its OWN IntersectionObserver
function StackCardItem({
  card,
  index,
  isHovered,
  isDimmed,
  onMouseEnter,
  onMouseLeave,
}: {
  card: StackCard;
  index: number;
  isHovered: boolean;
  isDimmed: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  const [isCardVisible, setIsCardVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsCardVisible(entry.isIntersecting);
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  const Icon = card.icon;
  // Stagger timing per column in row (0ms, 60ms, 120ms)
  const colStagger = (index % 3) * 60;

  return (
    <div
      ref={cardRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        transitionDelay: isCardVisible ? `${colStagger}ms` : '0ms',
        transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      }}
      className={`group relative bg-[#0A0E1A]/90 border ${card.color.border} ${card.color.borderGlow} rounded-lg p-5 sm:p-6 transition-all duration-500 ease-out flex flex-col justify-between overflow-hidden cursor-default ${isCardVisible
        ? 'opacity-100 scale-100 translate-y-0'
        : 'opacity-0 scale-75 translate-y-12 pointer-events-none'
        } ${isHovered ? '-translate-y-2.5 scale-[1.03] z-20 bg-[#0E1424]' : ''
        } ${isDimmed ? 'opacity-50 scale-[0.97]' : ''}`}
    >
      {/* Sheen Sweep Beam on Hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />

      <div>
        {/* Card Header Row */}
        <div className="flex items-center justify-between gap-3 mb-3.5">
          <div className="flex items-center gap-3">
            {/* Icon Container with Playful Pop Rotation */}
            <div
              className={`p-2.5 rounded-md ${card.color.iconBg} ${card.color.iconText} flex items-center justify-center border border-white/5 transition-transform duration-300 group-hover:scale-115 group-hover:-rotate-6 shadow-inner`}
            >
              <Icon className="w-5 h-5 transition-transform duration-300 group-hover:rotate-6" />
            </div>
            {/* Card Title */}
            <h3 className="font-mono text-xs sm:text-sm font-bold text-white tracking-wider uppercase group-hover:text-brand-cyan transition-colors">
              {card.title}
            </h3>
          </div>

          {/* Glowing Radar Pulse Status Dot */}
          <div className="relative flex items-center justify-center flex-shrink-0">
            <span
              className={`animate-ping absolute inline-flex h-3 w-3 rounded-full ${card.color.dotBg} opacity-75`}
            />
            <span
              className={`relative block w-2.5 h-2.5 rounded-full ${card.color.dotBg} ${card.color.dotGlow}`}
            />
          </div>
        </div>

        {/* Accent Line Divider */}
        <div
          className={`w-full h-[1.5px] ${card.color.divider} my-3.5 transition-all duration-300 group-hover:scale-x-105 origin-left`}
        />

        {/* Tech Pill Chips */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {card.technologies.map((tech, idx) => (
            <span
              key={idx}
              className={`group/tag inline-flex items-center px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/10 font-mono text-[11px] sm:text-xs text-brand-cream/80 tracking-wide transition-all duration-200 ${card.color.tagBg} ${card.color.tagText} hover:scale-105 hover:shadow-sm`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function StackSection() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'dev' | 'system' | 'design' | 'ai-extras'>('all');
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  const filteredCards = stackCards.filter(
    (card) => activeFilter === 'all' || card.group === activeFilter
  );

  return (
    <section
      id="stack"
      className="max-w-7xl mx-auto w-full px-6 sm:px-8 md:px-16 lg:px-24 py-16 sm:py-24 relative overflow-hidden select-none"
    >
      {/* Background Cyber Grid Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#17d0d0_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.04] pointer-events-none" />

      {/* Section Title Header */}
      <div className="flex flex-col gap-4 mb-10 sm:mb-12">
        {/* Main Title Line */}
        <div className="flex items-center gap-3 font-mono text-xs sm:text-sm tracking-[0.2em]">
          <span className="text-brand-cyan font-bold uppercase animate-pulse">
            01 - STACK &gt;
          </span>
          <span className="text-brand-cream/90 font-medium flex items-center gap-2">
            All Systems Operational
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
          </span>
        </div>

        {/* Interactive Filter HUD Buttons Placed UNDER Title */}
        <div className="flex flex-wrap items-center gap-4 font-mono text-[10px] sm:text-xs pt-1">
          {[
            { id: 'all', label: '[ ALL SYSTEMS ]' },
            { id: 'dev', label: '[ CODE & DEV ]' },
            { id: 'system', label: '[ INFRA & DATA ]' },
            { id: 'design', label: '[ DESIGN & MEDIA ]' },
            { id: 'ai-extras', label: '[ AI & EXTRAS ]' },
          ].map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-3 py-2 rounded-sm font-semibold tracking-wider transition-all duration-300 cursor-pointer ${isActive
                  ? 'bg-brand-cyan text-brand-dark shadow-[0_0_14px_#17D0D0] scale-105'
                  : 'bg-slate-900/80 border border-slate-800 text-brand-cream/70 hover:text-brand-orange hover:border-brand-orange/50 hover:shadow-[0_0_12px_rgba(255,197,86,0.25)] hover:scale-102'
                  }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3-Column Grid with Per-Card Individual IntersectionObserver for Progressive Scroll Pop-In */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {filteredCards.map((card, index) => (
          <StackCardItem
            key={card.id}
            card={card}
            index={index}
            isHovered={hoveredCardId === card.id}
            isDimmed={hoveredCardId !== null && hoveredCardId !== card.id}
            onMouseEnter={() => setHoveredCardId(card.id)}
            onMouseLeave={() => setHoveredCardId(null)}
          />
        ))}
      </div>
    </section>
  );
}
