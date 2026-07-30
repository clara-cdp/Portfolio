import RevealWrapper from '../RevealWrapper/RevealWrapper';

export default function OnlineIdentitySection() {
  return (
    <section
      id="identity"
      className="max-w-7xl mx-auto w-full px-6 sm:px-8 md:px-16 lg:px-24 py-16 sm:py-24 relative select-none overflow-hidden"
    >
      <RevealWrapper>
        {/* Section Header */}
        <div className="flex items-center gap-3 font-mono text-xs sm:text-sm tracking-[0.2em] mb-8 sm:mb-12 md:mb-16">
          <span className="text-brand-cyan font-bold uppercase flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan/70 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan" />
            </span>
            02 - IDENTITY &gt;
          </span>
          <span className="text-brand-cream/90 font-medium">
            History check
          </span>
        </div>

        {/* Responsive Grid: Stacked on mobile/tablet, 2-column on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Left Column: Headline with unbroken word Advantage */}
          <div className="lg:col-span-6 flex flex-col">
            <h2 className="font-mono font-bold text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-white tracking-tight leading-[1.1] sm:leading-[1.05]">
              <span className="block">The</span>
              <span className="block text-brand-orange my-1">hybrid</span>
              <span className="block whitespace-nowrap">Advantage</span>
            </h2>
          </div>

          {/* Right Column: Paragraph Content */}
          <div className="lg:col-span-6 flex flex-col gap-4 sm:gap-6 text-brand-cyan text-sm sm:text-base leading-relaxed tracking-wide font-sans lg:pt-2">
            <p>
              My career began in visual communication, designing systems that help people understand information clearly.
            </p>

            <p>
              Learning software development gave me the ability to build those systems myself.
            </p>
            <p>
              Today I think beyond interfaces, considering architecture, behaviour, accessibility, and long-term maintainability from the start.
            </p>

            <div className="pt-2 space-y-1.5 text-brand-cyan font-medium">
              <p>Design gives products direction.</p>
              <p>Development gives them capability.</p>
            </div>
          </div>
        </div>
      </RevealWrapper>
    </section>
  );
}
