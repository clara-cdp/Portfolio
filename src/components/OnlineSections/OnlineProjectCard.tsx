import type { OnlineProject } from '../../data/onlineProjects';

interface OnlineProjectCardProps {
  project: OnlineProject;
}

export default function OnlineProjectCard({ project }: OnlineProjectCardProps) {
  return (
    <div className="w-full bg-[#0A0E1A]/95 border-2 border-brand-cyan/90 rounded-sm p-6 sm:p-8 md:p-10 transition-all duration-300 hover:shadow-[0_0_30px_rgba(23,208,208,0.15)] select-none">
      {/* 2-Column Responsive Layout: Vertical on Mobile/Tablet, Horizontal on Desktop */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-between">
        
        {/* Left Side: Content Details */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left order-1">
          {/* Status Badge */}
          <div className="flex items-center gap-2.5 font-mono text-[11px] sm:text-xs tracking-wider mb-4 sm:mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan" />
            </span>
            <span className="text-brand-cyan font-bold uppercase">{project.statusText}</span>
            <span className="text-brand-cream/30">&rsaquo;</span>
            <span className="text-brand-cream/60">{project.statusDetail}</span>
          </div>

          {/* Title */}
          <h3 className="font-mono font-bold text-xl sm:text-2xl text-brand-orange tracking-widest mb-3.5 sm:mb-5 uppercase">
            {project.title}
          </h3>

          {/* Description */}
          <p className="font-sans text-brand-cream/80 text-sm sm:text-base leading-relaxed tracking-wide mb-6 sm:mb-8 max-w-xl">
            {project.description}
          </p>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 border border-brand-cyan/20 text-brand-cyan bg-brand-cyan/5 rounded-sm font-mono text-[10px] sm:text-xs font-bold tracking-wider uppercase transition-all duration-200 hover:border-brand-orange/50 hover:text-brand-orange hover:bg-brand-orange/10"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-4 mb-2">
            <a
              href={`#online/projects/${project.id}`}
              className="inline-flex items-center justify-center border border-brand-cyan/40 text-brand-cyan hover:bg-brand-cyan hover:text-brand-dark px-6 py-2.5 rounded-sm font-mono text-xs font-bold tracking-[0.25em] transition-all duration-300 hover:shadow-[0_0_15px_rgba(23,208,208,0.35)] hover:scale-103 cursor-pointer uppercase"
            >
              CASE STUDY
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-white/20 text-white/70 hover:border-white/40 hover:text-white px-6 py-2.5 rounded-sm font-mono text-xs font-bold tracking-[0.25em] transition-all duration-300 hover:scale-103 cursor-pointer uppercase"
            >
              GITHUB
            </a>
          </div>
        </div>

        {/* Right Side: Image Showcase */}
        <div className="w-full lg:w-1/2 flex items-center justify-center order-2">
          <div className="relative w-full max-w-md lg:max-w-none border border-brand-cyan/30 rounded-sm overflow-hidden bg-brand-dark/40 shadow-inner group">
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Subtle Cyan Border Overlay */}
            <div className="absolute inset-0 border border-brand-cyan/10 pointer-events-none group-hover:border-brand-cyan/30 transition-all duration-300" />
          </div>
        </div>

      </div>
    </div>
  );
}
