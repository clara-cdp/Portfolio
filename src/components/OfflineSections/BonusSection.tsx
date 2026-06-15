import RevealWrapper from '../RevealWrapper/RevealWrapper';

export default function BonusSection() {
  return (
    <section
      id="bonus"
      className="max-w-7xl mx-auto w-full px-8 md:px-16 lg:px-24 py-24 md:py-32 lg:py-40 flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-24 relative border-t border-brand-dark/5"
    >
      {/* Left Column: Eyebrow and Heading */}
      <div className="flex-1 flex flex-col items-start">
        <RevealWrapper className="flex flex-col items-start">
          <p className="text-brand-light text-xs font-mono tracking-[0.25em] uppercase mb-8 md:mb-12 font-sans">
            04 - BONUS TRACK
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-serif font-normal tracking-tight leading-[1.05] select-none text-brand-dark">
            Small editorial <span className="block italic">projects</span>
          </h2>
        </RevealWrapper>
      </div>

      {/* Right Column: Title and paragraphs */}
      <div className="flex-1 flex flex-col justify-start md:pt-[2px] max-w-xl">
        <RevealWrapper>
          <h3 className="text-lg sm:text-lg font-bold tracking-tight text-brand-dark font-sans mt-10 mb-6">
            Experiments in print and layout.
          </h3>
          <div className="space-y-6 text-brand-light text-sm sm:text-base leading-relaxed tracking-wide font-sans">
            <p>
              A curated archive of smaller editorial work, publication designs, typographic experiments, and hands-on printing and binding projects.
            </p>
            
            <div className="pt-6">
              <a
                href="#offline/editorial"
                className="group/link font-sans text-[10px] tracking-[0.25em] font-bold uppercase text-brand-dark/80 hover:text-brand-dark transition-colors duration-300 inline-flex items-center gap-1.5 cursor-pointer"
              >
                explore the gallery
                <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">
                  &rarr;
                </span>
              </a>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
