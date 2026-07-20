import RevealWrapper from '../RevealWrapper/RevealWrapper';

export default function OnlineHeroSection() {
  return (
    <section id="hero" className="max-w-7xl mx-auto w-full min-h-screen px-6 sm:px-8 md:px-16 lg:px-24 pt-28 sm:pt-32 pb-16 flex flex-col justify-between relative">
      <RevealWrapper>
        <div className="flex flex-col items-start max-w-5xl mt-4 sm:mt-8 md:mt-12">
          {/* Eyebrow */}
          <p className="text-brand-cream/60 font-mono text-xs sm:text-sm font-medium tracking-[0.25em] uppercase mb-8 sm:mb-12 md:mb-14">
            ONLINE — DEVELOPEMENT PORTFOLIO
          </p>

          {/* Headline (No underlines) */}
          <h1 className="font-mono font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.15] md:leading-[1.1] mb-10 sm:mb-14 text-white select-none">
            <span className="block">Building</span>
            <span className="block text-brand-orange my-1 sm:my-2">digital products</span>
            <span className="block">from the inside out.</span>
          </h1>

          {/* Description Paragraphs in Cyan Text */}
          <div className="max-w-xl space-y-4 sm:space-y-5 font-sans text-brand-cyan text-sm sm:text-base leading-relaxed tracking-wide">
            <p className="font-medium">
              Software is more than screens and layouts.
            </p>
            <p>
              I'm a Frontend and Full Stack Developer with a background in
              design, building applications that combine usability, functionality, and clear communication.
            </p>
            <p>
              Explore the projects, systems, and technical decisions behind the work.
            </p>
          </div>
        </div>
      </RevealWrapper>
    </section>
  );
}
