import RevealWrapper from '../RevealWrapper/RevealWrapper';

interface StackCategory {
  id: string;
  title: string;
  technologies: string;
  statusColor: 'cyan' | 'yellow' | 'white';
}

const stackData: StackCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend Systems',
    technologies: 'React | TypeScript | JavaScript | HTML5 & CSS3 | Tailwind CSS',
    statusColor: 'cyan',
  },
  {
    id: 'backend',
    title: 'Backend Systems',
    technologies: 'PHP | Laravel | Node.js | Express.js | Java | Go | Python',
    statusColor: 'yellow',
  },
  {
    id: 'architecture',
    title: 'Architecture Systems',
    technologies: 'MVC Architecture | REST APIs | Systems Design',
    statusColor: 'yellow',
  },
  {
    id: 'data-management',
    title: 'Data Management Systems',
    technologies: 'MySQL | PostgreSQL | SQLite | MongoDB',
    statusColor: 'yellow',
  },
  {
    id: 'testing',
    title: 'Testing Systems',
    technologies: 'Vitest | Pest | PHPUnit | API Testing',
    statusColor: 'yellow',
  },
  {
    id: 'version-control',
    title: 'Version Control Systems',
    technologies: 'Git | GitHub | GitLab | Gitflow',
    statusColor: 'yellow',
  },
  {
    id: 'devops-workflow',
    title: 'DevOps & Workflow Systems',
    technologies: 'Docker | Render | CI/CD | Agile (Scrum) | Kanban',
    statusColor: 'yellow',
  },
  {
    id: 'ai-workflows',
    title: 'AI Workflows',
    technologies: 'LLM Integration | Prompt Engineering | Cursor | Copilot | OpenAI Codex',
    statusColor: 'yellow',
  },
  {
    id: 'tools-platforms',
    title: 'Tools & Platforms',
    technologies: 'npm | Postman | WordPress | Unity (C#)',
    statusColor: 'white',
  },
  {
    id: 'design',
    title: 'Design Systems',
    technologies: 'Figma | Illustrator | Photoshop | InDesign',
    statusColor: 'white',
  },
  {
    id: 'media',
    title: 'Media Systems',
    technologies: 'Premiere Pro | After Effects | Motion Graphics',
    statusColor: 'white',
  },
  {
    id: 'digital-product',
    title: 'Digital Product & UI/UX',
    technologies: 'Wireframing | Prototyping | Responsive Layouts | User Flows',
    statusColor: 'white',
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

        {/* 3-Column Desktop Grid / 1-Column Mobile Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {stackData.map((category) => (
            <div
              key={category.id}
              className="bg-[#0B0F19] border border-brand-cream/15 hover:border-brand-cyan/40 rounded-sm p-5 sm:p-6 transition-all duration-300 flex items-start gap-4 group hover:bg-[#0E1424]"
            >
              {/* Status Dot */}
              <div className="mt-1 flex-shrink-0">
                {category.statusColor === 'cyan' && (
                  <span className="block w-2.5 h-2.5 rounded-full bg-brand-cyan shadow-[0_0_8px_#17D0D0]" />
                )}
                {category.statusColor === 'yellow' && (
                  <span className="block w-2.5 h-2.5 rounded-full bg-brand-orange shadow-[0_0_8px_#FFC556]" />
                )}
                {category.statusColor === 'white' && (
                  <span className="block w-2.5 h-2.5 rounded-full bg-brand-cream/80 shadow-[0_0_8px_#F5F2ED]" />
                )}
              </div>

              {/* Title & Technologies */}
              <div className="flex flex-col gap-1.5">
                <h3 className="font-mono text-xs sm:text-sm font-bold text-white tracking-wider uppercase group-hover:text-brand-cyan transition-colors">
                  {category.title}
                </h3>
                <p className="font-mono text-[11px] sm:text-xs text-brand-cream/70 tracking-wide leading-relaxed">
                  {category.technologies}
                </p>
              </div>
            </div>
          ))}
        </div>
      </RevealWrapper>
    </section>
  );
}
