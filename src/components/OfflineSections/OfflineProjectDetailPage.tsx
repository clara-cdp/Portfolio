import { useEffect, useState } from 'react';
import { offLineProjects } from '../../data/offLineProjects';
import RevealWrapper from '../RevealWrapper/RevealWrapper';
import Footer from '../Footer/Footer';

interface OfflineProjectDetailPageProps {
  projectId: string;
}

export default function OfflineProjectDetailPage({ projectId }: OfflineProjectDetailPageProps) {
  const [isMounted, setIsMounted] = useState(false);

  // Find project by ID
  const project = offLineProjects.find((p) => p.id === projectId);

  useEffect(() => {
    // Scroll to top when mounting the detail page
    window.scrollTo({ top: 0 });

    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [projectId]);

  if (!project) {
    return (
      <div className="min-h-screen bg-brand-dark text-brand-cream flex flex-col justify-center items-center font-sans">
        <p className="text-sm font-semibold tracking-wider uppercase mb-4 text-brand-light">Project not found</p>
        <a href="#offline" className="text-xs font-bold underline uppercase tracking-widest hover:text-brand-gold transition-colors duration-300 text-brand-cream">
          Back to portfolio
        </a>
      </div>
    );
  }

  const details = project.details;

  return (
    <div className="min-h-screen bg-brand-cream text-brand-dark font-sans relative overflow-x-hidden flex flex-col justify-between">
      {/* Navigation Header (Light Mode) */}
      <header className="w-full flex justify-between items-center py-6 px-8 md:px-16 lg:px-24 fixed top-0 left-0 z-50 bg-brand-cream/90 backdrop-blur-md border-b border-brand-dark/5">
        <a
          href="#"
          className="font-sans text-[10px] tracking-[0.25em] font-bold text-brand-dark/70 uppercase select-none cursor-pointer hover:text-brand-dark transition-colors duration-200"
        >
          CLARA<span className="hidden md:inline"> CDP</span>
        </a>

        {/* Back Link */}
        <a
          href="#projects"
          className="font-sans text-[10px] tracking-[0.25em] font-bold uppercase text-brand-dark/70 hover:text-brand-dark transition-colors duration-200 cursor-pointer inline-flex items-center gap-1.5"
        >
          &larr; Back to portfolio
        </a>
      </header>

      {/* Main Content Area */}
      <main
        className={`w-full flex flex-col transition-all duration-[800ms] ease-out transform ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
      >
        {/* Title & Hero Section (Light Mode) */}
        <section className="w-full bg-brand-cream text-brand-dark pt-32 pb-12">
          <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
            {/* Project Header Title */}
            <div className="max-w-3xl mt-12 mb-16">
              <span className="text-brand-light text-xs font-mono font-semibold tracking-[0.25em] uppercase mb-4 block">
                {project.tagline}
              </span>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-normal tracking-tight leading-[1.05] text-brand-dark">
                {project.title}
              </h1>
            </div>

            {/* Hero Showcase Image */}
            <div className="w-full overflow-hidden bg-brand-dark/5 rounded-sm shadow-md">
              <img
                src={details?.hero || project.cardHero}
                alt={project.title}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Case Narrative Section (Dark Mode - Journey Style) */}
        <section className="w-full bg-brand-dark text-brand-cream py-20 md:py-28 border-t border-b border-brand-cream/5">
          <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
            <div className="grid grid-cols-12 gap-8 md:gap-16 lg:gap-24">
              {/* Left Column: Metadata */}
              <div className="col-span-12 md:col-span-4 flex flex-col gap-8 text-sm">
                <RevealWrapper className="flex flex-col gap-8">
                  {details?.client && (
                    <div>
                      <span className="text-brand-light text-[10px] tracking-[0.2em] font-mono uppercase block mb-1">
                        Client
                      </span>
                      <span className="text-brand-cream font-sans font-medium">{details.client}</span>
                    </div>
                  )}

                  {details?.role && (
                    <div>
                      <span className="text-brand-light text-[10px] tracking-[0.2em] font-mono uppercase block mb-1">
                        Role
                      </span>
                      <span className="text-brand-cream font-sans font-medium">{details.role}</span>
                    </div>
                  )}

                  {details?.deliverables && (
                    <div>
                      <span className="text-brand-light text-[10px] tracking-[0.2em] font-mono uppercase block mb-2">
                        Deliverables
                      </span>
                      <ul className="flex flex-col gap-1 text-brand-cream font-sans font-medium">
                        {details.deliverables.map((del) => (
                          <li key={del} className="flex items-center gap-1.5">
                            <span className="w-1 h-1 bg-brand-gold rounded-full" />
                            {del}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {details?.pdfUrl && (
                    <div className="pt-4 border-t border-brand-cream/10">
                      <a
                        href={details.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 text-[10px] tracking-[0.25em] font-bold uppercase text-brand-cream border border-brand-cream/25 px-4 py-2.5 rounded-sm hover:bg-brand-cream hover:text-brand-dark transition-all duration-300 cursor-pointer w-full text-center sm:w-auto"
                      >
                        View full brand book (PDF) &rarr;
                      </a>
                    </div>
                  )}

                  {details?.figmaUrl && (
                    <div className="pt-4 border-t border-brand-cream/10">
                      <a
                        href={details.figmaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 text-[10px] tracking-[0.25em] font-bold uppercase text-brand-cream border border-brand-cream/25 px-4 py-2.5 rounded-sm hover:bg-brand-cream hover:text-brand-dark transition-all duration-300 cursor-pointer w-full text-center sm:w-auto"
                      >
                        View Figma Design &rarr;
                      </a>
                      <p className="text-[9px] sm:text-[10px] tracking-[0.15em] uppercase text-brand-light/70 italic mt-2 block">
                        * Web under construction
                      </p>
                    </div>
                  )}
                </RevealWrapper>
              </div>

              {/* Right Column: Case description */}
              <div className="col-span-12 md:col-span-8 text-brand-light text-sm sm:text-base leading-relaxed tracking-wide space-y-6 md:pt-[2px]">
                {details?.longDescription ? (
                  details.longDescription.map((item, index) => {
                    if (item.startsWith('## ')) {
                      return (
                        <RevealWrapper key={index}>
                          <h2
                            className="text-lg font-serif text-brand-gold font-normal tracking-wide mt-8 mb-4 border-b border-brand-cream/10 pb-2 first:mt-0"
                          >
                            {item.replace('## ', '')}
                          </h2>
                        </RevealWrapper>
                      );
                    }
                    if (item.startsWith('*') && item.endsWith('*')) {
                      return (
                        <RevealWrapper key={index}>
                          <p className="italic text-brand-cream/80 font-serif">
                            {item.replace(/\*/g, '')}
                          </p>
                        </RevealWrapper>
                      );
                    }
                    return (
                      <RevealWrapper key={index}>
                        <p className="font-sans">{item}</p>
                      </RevealWrapper>
                    );
                  })
                ) : (
                  <RevealWrapper>
                    <p className="font-sans">{project.description}</p>
                  </RevealWrapper>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Video & Media Showcase Section (Light Mode) */}
        <section className="w-full bg-brand-cream text-brand-dark py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
            {/* Image Showcase Block */}
            {details?.gallery && details.gallery.length > 0 && (
              <div className="flex flex-col gap-12 md:gap-20 w-full max-w-5xl mx-auto">
                <span className="text-brand-light text-[10px] tracking-[0.2em] font-mono uppercase block text-center md:text-left border-b border-brand-dark/10 pb-4">
                  Project Gallery Showcase
                </span>
                {details?.videoUrl && (
                  <div className="w-full mb-20 md:mb-28 flex flex-col gap-4">
                    <div className="w-full bg-brand-dark rounded-sm overflow-hidden shadow-md max-w-5xl mx-auto border border-brand-dark/10">
                      <video
                        src={details.videoUrl}
                        autoPlay
                        loop
                        muted
                        playsInline
                        controls
                        className="w-full h-auto object-contain block"
                      >
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                )}
                {details.gallery.map((image, index) => (
                  <div
                    key={index}
                    className="w-full overflow-hidden bg-brand-dark/5 rounded-sm shadow-sm transition-transform duration-500 hover:scale-[1.005]"
                  >
                    <img
                      src={image}
                      alt={`Showcase item ${index + 1}`}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Footer Area (Dark Mode) */}
      <Footer variant="full-bleed" />
    </div>
  );
}
