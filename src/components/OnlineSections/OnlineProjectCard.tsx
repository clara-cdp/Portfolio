import { useRef, useState } from 'react';
import type { OnlineProject } from '../../data/onlineProjects';

interface OnlineProjectCardProps {
  project: OnlineProject;
}

export default function OnlineProjectCard({ project }: OnlineProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({});
  const [glowStyle, setGlowStyle] = useState<React.CSSProperties>({ opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 3; // Max 3 degrees rotation
    const rotateY = -((x - centerX) / centerX) * 3; // Max 3 degrees rotation

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      transition: 'transform 0.05s ease-out',
    });

    setGlowStyle({
      opacity: 1,
      background: `radial-gradient(circle 200px at ${x}px ${y}px, rgba(23, 208, 208, 0.15), transparent 80%)`,
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
      transition: 'transform 0.5s ease-out',
    });
    setGlowStyle({
      opacity: 0,
      transition: 'opacity 0.5s ease-out',
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={tiltStyle}
      className="relative w-full bg-[#0A0E1A]/95 border-2 border-brand-cyan/90 rounded-sm p-6 sm:p-8 md:p-10 transition-all duration-300 hover:shadow-[0_0_30px_rgba(23,208,208,0.15)] group select-none"
    >
      {/* HUD Corner Brackets */}
      <div className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-brand-cyan/30 transition-all duration-300 group-hover:border-brand-orange group-hover:-translate-x-1.5 group-hover:-translate-y-1.5 group-hover:drop-shadow-[0_0_3px_#FFC556] pointer-events-none" />
      <div className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-brand-cyan/30 transition-all duration-300 group-hover:border-brand-orange group-hover:translate-x-1.5 group-hover:-translate-y-1.5 group-hover:drop-shadow-[0_0_3px_#FFC556] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-brand-cyan/30 transition-all duration-300 group-hover:border-brand-orange group-hover:-translate-x-1.5 group-hover:translate-y-1.5 group-hover:drop-shadow-[0_0_3px_#FFC556] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-brand-cyan/30 transition-all duration-300 group-hover:border-brand-orange group-hover:translate-x-1.5 group-hover:translate-y-1.5 group-hover:drop-shadow-[0_0_3px_#FFC556] pointer-events-none" />

      {/* Inner HUD Overlay (clipped grid and scanline) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-sm">
        {/* Grid background */}
        <div className="absolute inset-0 hud-grid-bg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        {/* Cursor tracking spotlight glow */}
        <div className="absolute inset-0 transition-opacity duration-300" style={glowStyle} />
        {/* Sweeping scanline */}
        <div className="hud-scanline" />
      </div>

      {/* 2-Column Responsive Layout: Vertical on Mobile/Tablet, Horizontal on Desktop */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch justify-between relative z-10">

        {/* Left Side: Content Details */}
        <div className={`w-full ${project.isSmall ? 'lg:w-[60%]' : 'lg:w-1/2'} flex flex-col items-start text-left order-1`}>
          {/* Status Badge */}
          <div className="flex items-center gap-2.5 font-mono text-[11px] sm:text-xs tracking-wider mb-4 sm:mb-6">
            <span className="relative flex h-2 w-2">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${project.statusText === 'IN PROGRESS' ? 'bg-rose-400' : 'bg-brand-cyan'} opacity-75`} />
              <span className={`relative inline-flex rounded-full h-2 w-2 ${project.statusText === 'IN PROGRESS' ? 'bg-rose-400' : 'bg-brand-cyan'}`} />
            </span>
            <span className={`${project.statusText === 'IN PROGRESS' ? 'text-rose-400' : 'text-brand-cyan'} font-bold uppercase`}>{project.statusText}</span>
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
            {project.details && (
              <a
                href={`#online/projects/${project.id}`}
                className="inline-flex items-center justify-center border border-brand-cyan/40 text-brand-cyan hover:bg-brand-cyan hover:text-brand-dark px-6 py-2.5 rounded-sm font-mono text-xs font-bold tracking-[0.25em] transition-all duration-300 hover:shadow-[0_0_15px_rgba(23,208,208,0.35)] hover:scale-103 cursor-pointer uppercase"
              >
                CASE STUDY
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-brand-orange/40 text-brand-orange hover:bg-brand-orange hover:text-brand-dark px-6 py-2.5 rounded-sm font-mono text-xs font-bold tracking-[0.25em] transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,197,86,0.35)] hover:scale-103 cursor-pointer uppercase"
              >
                GITHUB
              </a>
            )}
            {project.githubUrls && project.githubUrls.map((repo, idx) => (
              <a
                key={idx}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-brand-orange/40 text-brand-orange hover:bg-brand-orange hover:text-brand-dark px-6 py-2.5 rounded-sm font-mono text-xs font-bold tracking-[0.25em] transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,197,86,0.35)] hover:scale-103 cursor-pointer uppercase"
              >
                {repo.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right Side: Image Showcase */}
        <div className={`w-full ${project.isSmall ? 'lg:w-[35%]' : 'lg:w-1/2'} flex items-center justify-center order-2 relative py-4 lg:py-0`}>
          <img
            src={project.heroImage}
            alt={project.title}
            className={`max-w-full ${project.isSmall ? 'max-h-[200px] sm:max-h-[240px] lg:max-h-[260px]' : 'max-h-[280px] sm:max-h-[340px] lg:max-h-[380px]'} object-contain rounded-sm transition-transform duration-500 ease-out group-hover:scale-105 drop-shadow-[0_4px_20px_rgba(8,11,20,0.6)] group-hover:drop-shadow-[0_8px_30px_rgba(23,208,208,0.25)]`}
          />
        </div>

      </div>
    </div>
  );
}
