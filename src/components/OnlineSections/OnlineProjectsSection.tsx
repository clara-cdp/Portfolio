import { onlineProjects } from '../../data/onlineProjects';
import OnlineProjectCard from './OnlineProjectCard';
import RevealWrapper from '../RevealWrapper/RevealWrapper';

export default function OnlineProjectsSection() {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto w-full px-6 sm:px-8 md:px-16 lg:px-24 py-16 sm:py-24 relative select-none"
    >
      <RevealWrapper>
        {/* Section Header */}
        <div className="flex items-center gap-3 font-mono text-xs sm:text-sm tracking-[0.2em] mb-10 sm:mb-16">
          <span className="text-brand-cyan font-bold uppercase">
            03 - PROJECTS &gt;
          </span>
          <span className="text-brand-cream/90 font-medium">
            status Active
          </span>
        </div>

        {/* Project Cards Column */}
        <div className="flex flex-col gap-10 sm:gap-16">
          {onlineProjects.map((project) => (
            <OnlineProjectCard key={project.id} project={project} />
          ))}
        </div>
      </RevealWrapper>
    </section>
  );
}
