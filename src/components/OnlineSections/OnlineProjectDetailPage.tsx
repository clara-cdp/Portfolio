import { useEffect, useState } from 'react';
import { onlineProjects } from '../../data/onlineProjects';
import RevealWrapper from '../RevealWrapper/RevealWrapper';
import Footer from '../Footer/Footer';
import apitLogo from '../../assets/APIT-MVC/APIT_logico.png';
import ShowcaseGallery from '../ShowcaseGallery/ShowcaseGallery';

interface OnlineProjectDetailPageProps {
  projectId: string;
}

export default function OnlineProjectDetailPage({ projectId }: OnlineProjectDetailPageProps) {
  const [isMounted, setIsMounted] = useState(false);

  // Find project by ID
  const project = onlineProjects.find((p) => p.id === projectId);

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
      <div className="min-h-screen bg-brand-dark text-white flex flex-col justify-center items-center font-mono p-6 select-none">
        <p className="text-sm font-semibold tracking-wider uppercase mb-4 text-brand-cyan">
          [ PROJECT NOT FOUND ]
        </p>
        <a
          href="#online"
          className="text-xs font-bold underline uppercase tracking-widest hover:text-brand-orange transition-colors duration-300 text-brand-cream"
        >
          Back to portfolio
        </a>
      </div>
    );
  }

  const details = project.details;

  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans relative overflow-x-hidden flex flex-col justify-between selection:bg-brand-cyan selection:text-brand-dark">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#17d0d0_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.03] pointer-events-none" />

      {/* Fixed Navigation Header */}
      <header className="w-full flex justify-between items-center py-6 px-6 sm:px-8 md:px-16 lg:px-24 fixed top-0 left-0 z-50 bg-brand-dark/80 backdrop-blur-md border-b border-white/5 select-none">
        <a
          href="#online"
          className="font-mono text-xs sm:text-sm tracking-[0.2em] font-bold text-brand-cyan uppercase hover:opacity-80 transition-opacity"
        >
          CLARA.DEV
        </a>

        {/* Back Link */}
        <a
          href="#online"
          className="font-mono text-[10px] sm:text-xs tracking-[0.2em] font-semibold text-brand-cream/70 hover:text-brand-cyan transition-colors duration-200 uppercase inline-flex items-center gap-2"
        >
          &larr; BACK TO PORTFOLIO
        </a>
      </header>

      {/* Main Container */}
      <main
        className={`w-full flex flex-col items-center pt-28 sm:pt-32 pb-16 flex-grow transition-all duration-[800ms] ease-out transform ${
          isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 md:px-16 lg:px-24">
          
          {/* 1. Title & Header Intro Section */}
          <div className="max-w-4xl mt-6 sm:mt-10 mb-10 sm:mb-14">
            <span className="text-brand-cyan font-mono text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase mb-5 block">
              03 - CASE STUDY &gt; {project.statusText}
            </span>
            {project.id === 'a-paws-in-time' ? (
              <div className="mb-6 max-w-sm sm:max-w-md">
                <img
                  src={apitLogo}
                  alt={project.title}
                  className="w-full h-auto object-contain max-h-24 sm:max-h-32 select-none"
                />
              </div>
            ) : project.id === 'a-paws-in-time-api' ? (
              <div className="mb-6">
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-mono font-bold text-brand-orange tracking-tight leading-[1.1] uppercase">
                  A PAWS IN TIME
                </h1>
                <span className="text-xl sm:text-2xl md:text-3xl font-mono font-bold text-brand-cream/90 tracking-wider block mt-2">
                  (API & REACT)
                </span>
              </div>
            ) : (
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-mono font-bold text-white tracking-tight leading-[1.1] mb-6">
                {project.title}
              </h1>
            )}
            <p className="font-sans text-brand-cream/80 text-base sm:text-lg leading-relaxed max-w-3xl">
              {project.description}
            </p>
          </div>

          {/* 2. Hero Image Banner with Double Cyan Border */}
          <div className="w-full border-2 border-brand-cyan/80 bg-[#0A0E1A]/80 rounded-sm overflow-hidden mb-12 sm:mb-16 select-none shadow-[0_0_35px_rgba(23,208,208,0.1)]">
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* 3. Description & Metadata Narrative Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 xl:gap-24 mb-16 sm:mb-24">
            
            {/* Left Column: Tech Spec Panels */}
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-6 font-mono text-xs sm:text-sm">
              <RevealWrapper className="flex flex-col gap-6">
                
                {/* Meta details card */}
                <div className="border border-brand-cyan/30 bg-[#0A0E1A]/95 p-5 sm:p-6 rounded-sm flex flex-col gap-5 transition-all duration-300 hover:border-brand-cyan/50 hover:shadow-[0_0_20px_rgba(23,208,208,0.1)]">
                  {details?.client && (
                    <div>
                      <span className="text-brand-cyan font-bold tracking-[0.2em] text-[10px] uppercase block mb-1">
                        Project Type
                      </span>
                      <span className="text-brand-cream font-normal">{details.client}</span>
                    </div>
                  )}

                  {details?.role && (
                    <div>
                      <span className="text-brand-cyan font-bold tracking-[0.2em] text-[10px] uppercase block mb-1">
                        Role
                      </span>
                      <span className="text-brand-cream font-normal">{details.role}</span>
                    </div>
                  )}

                  {details?.deliverables && (
                    <div>
                      <span className="text-brand-cyan font-bold tracking-[0.2em] text-[10px] uppercase block mb-2">
                        Deliverables
                      </span>
                      <ul className="flex flex-col gap-2 text-brand-cream/85 font-sans font-normal text-xs sm:text-sm">
                        {details.deliverables.map((del, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-1.5 flex-shrink-0" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Tech Badges List */}
                <div className="border border-brand-cyan/30 bg-[#0A0E1A]/95 p-5 sm:p-6 rounded-sm transition-all duration-300 hover:border-brand-cyan/50 hover:shadow-[0_0_20px_rgba(23,208,208,0.1)]">
                  <span className="text-brand-cyan font-bold tracking-[0.2em] text-[10px] uppercase block mb-3">
                    Technologies Used
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1.5 border border-brand-cyan/20 text-brand-cyan bg-brand-cyan/5 rounded-sm text-[10px] sm:text-xs font-bold tracking-wider uppercase transition-all duration-200 hover:border-brand-orange/50 hover:text-brand-orange hover:bg-brand-orange/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action CTA Buttons */}
                {details?.githubUrl && (
                  <div className="pt-2">
                    <a
                      href={details.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center gap-2.5 text-xs tracking-[0.25em] font-bold uppercase text-brand-dark bg-brand-cyan border-2 border-brand-cyan hover:bg-transparent hover:text-brand-cyan px-5 py-3.5 rounded-sm transition-all duration-300 shadow-[0_0_20px_rgba(23,208,208,0.35)] hover:shadow-[0_0_30px_rgba(23,208,208,0.7)] hover:scale-[1.03] active:scale-[0.98] cursor-pointer w-full text-center animate-pulse"
                    >
                      VIEW REPOSITORY &rarr;
                    </a>
                  </div>
                )}
                {details?.githubUrls && details.githubUrls.map((repo, idx) => (
                  <div key={idx} className="pt-2">
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center gap-2.5 text-xs tracking-[0.25em] font-bold uppercase text-brand-dark bg-brand-cyan border-2 border-brand-cyan hover:bg-transparent hover:text-brand-cyan px-5 py-3.5 rounded-sm transition-all duration-300 shadow-[0_0_20px_rgba(23,208,208,0.35)] hover:shadow-[0_0_30px_rgba(23,208,208,0.7)] hover:scale-[1.03] active:scale-[0.98] cursor-pointer w-full text-center"
                    >
                      {repo.label} &rarr;
                    </a>
                  </div>
                ))}
                {details?.pdfUrl && (
                  <div className="pt-2">
                    <a
                      href={details.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center gap-2.5 text-xs tracking-[0.25em] font-bold uppercase text-brand-cream bg-brand-teal border-2 border-brand-teal hover:bg-transparent hover:text-brand-teal px-5 py-3.5 rounded-sm transition-all duration-300 shadow-[0_0_20px_rgba(14,143,143,0.35)] hover:shadow-[0_0_30px_rgba(14,143,143,0.7)] hover:scale-[1.03] active:scale-[0.98] cursor-pointer w-full text-center animate-pulse"
                    >
                      {details.pdfLabel || 'VIEW DOCUMENT'} &rarr;
                    </a>
                  </div>
                )}

              </RevealWrapper>
            </div>

            {/* Right Column: Case narratives */}
            <div className="col-span-12 lg:col-span-8 flex flex-col gap-8 text-brand-cream/80 text-sm sm:text-base leading-relaxed tracking-wide font-sans lg:pt-1">
              {details?.longDescription ? (
                details.longDescription.map((item, index) => {
                  if (item.startsWith('## ')) {
                    return (
                      <RevealWrapper key={index}>
                        <h3 className="font-mono text-base sm:text-lg font-bold text-brand-cyan tracking-widest uppercase mb-4 mt-6 border-b border-brand-cyan/20 pb-2 flex items-center gap-2 drop-shadow-[0_0_4px_rgba(23,208,208,0.25)] transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(23,208,208,0.55)]">
                          <span className="text-brand-orange animate-pulse">&rsaquo;</span>
                          {item.replace('## ', '')}
                        </h3>
                      </RevealWrapper>
                    );
                  }
                  return (
                    <RevealWrapper key={index}>
                      <p>{item}</p>
                    </RevealWrapper>
                  );
                })
              ) : (
                <p>No project description details available.</p>
              )}
            </div>

          </div>

          {/* 4. Full Showcase Screenshot Gallery */}
          {details?.gallery && details.gallery.length > 0 && (
            <div className="border-t border-white/5 pt-16 sm:pt-20 select-none">
              <RevealWrapper>
                <div className="flex items-center gap-3 font-mono text-xs sm:text-sm tracking-[0.2em] mb-10 sm:mb-12 drop-shadow-[0_0_4px_rgba(23,208,208,0.25)]">
                  <span className="text-brand-cyan font-bold uppercase">
                    SHOWCASE GALLERY &gt;
                  </span>
                  <span className="text-brand-cream/50">
                    System Captures
                  </span>
                </div>
              </RevealWrapper>

              <ShowcaseGallery images={details.gallery} />
            </div>
          )}

        </div>
      </main>

      {/* Footer */}
      <Footer variant="full-bleed" />
    </div>
  );
}
