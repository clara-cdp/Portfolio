import { offLineProjects } from '../../data/offLineProjects';
import type { Project } from '../../data/offLineProjects';

function ProjectDetails({ project }: { project: Project }) {
  return (
    <>
      <span className="text-brand-light text-[10px] tracking-[0.25em] font-mono font-semibold uppercase mb-2">
        {project.tagline}
      </span>
      <h4 className="text-brand-dark text-xl sm:text-2xl font-serif font-normal tracking-tight mb-4">
        {project.title}
      </h4>
      <p className="text-brand-light text-xs sm:text-sm leading-relaxed tracking-wide font-sans mb-6">
        {project.description}
      </p>

      {/* Project Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[9px] tracking-wider uppercase font-semibold text-brand-dark/60 border border-brand-dark/20 px-2.5 py-1 rounded-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* see details Link */}
      <a
        href={project.link}
        className="group/link font-sans text-[10px] tracking-[0.25em] font-bold uppercase text-brand-dark/80 hover:text-brand-dark transition-colors duration-300 inline-flex items-center gap-1.5 cursor-pointer"
      >
        see details
        <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">
          &rarr;
        </span>
      </a>
    </>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isEven = index % 2 === 0;

  // Base classes for the text container
  let textContainerClasses = 'w-full md:w-1/2 flex flex-col items-start rounded-sm';

  if (project.variant === 'background') {
    textContainerClasses += ' bg-[#EFECE6] p-8 md:p-12 border border-brand-dark/5 justify-center';
  } else if (project.variant === 'outlined') {
    textContainerClasses += ' border border-brand-dark/15 p-8 md:p-12 justify-center';
  } else {
    // minimal
    textContainerClasses += ' px-2 justify-center';
  }

  // Use items-stretch for boxed card layouts so columns have the same height
  const parentClasses = `flex flex-col md:flex-row gap-8 md:gap-12 w-full ${isEven ? '' : 'md:flex-row-reverse'
    } ${project.variant === 'minimal' ? 'items-center' : 'items-stretch'}`;

  const imgClasses = `w-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.03] ${project.variant === 'minimal' ? 'h-auto' : 'h-full'
    }`;

  return (
    <div className={parentClasses}>
      {/* Project Image */}
      <div className="w-full md:w-1/2 overflow-hidden bg-brand-dark/5 rounded-sm shadow-sm group">
        <img
          src={project.cardHero}
          alt={project.title}
          className={imgClasses}
        />
      </div>

      {/* Project Content */}
      <div className={textContainerClasses}>
        <ProjectDetails project={project} />
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="w-full bg-brand-cream text-brand-dark py-24 md:py-32 lg:py-40 border-t border-brand-dark/5"
    >
      <div className="max-w-7xl mx-auto w-full px-8 md:px-16 lg:px-24">
        {/* Section Header & Copy Block */}
        <div className="mb-16 md:mb-24 lg:mb-32 max-w-3xl">
          <p className="text-brand-light text-xs font-mono tracking-[0.25em] uppercase mb-8 md:mb-12">
            03 - PROJECTS
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem] font-serif font-normal tracking-tight leading-[1.1] select-none text-brand-dark mb-8">
            Work as <span className="block md:inline italic">evidence</span>
          </h2>
          <div className="space-y-4">
            <h3 className="text-brand-dark font-sans font-bold text-sm sm:text-base tracking-wide uppercase">
              Ideas are interesting.
              <br />
              Finished work is more convincing.
            </h3>
            <p className="text-brand-light text-xs sm:text-sm leading-relaxed tracking-wide font-sans">
              These projects represent different aspects of my practice, from visual identity and communication systems to interactive products and software development.
            </p>
          </div>
        </div>

        {/* Projects List */}
        <div className="flex flex-col gap-16 md:gap-24 lg:gap-32 w-full">
          {offLineProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
