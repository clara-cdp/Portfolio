export default function HeroSection() {
  return (
    <main className="max-w-7xl mx-auto w-full min-h-screen px-8 md:px-16 lg:px-24 pt-32 pb-16 flex flex-col justify-between relative">
      <div className="hidden md:block h-12" />

      {/* Content Block */}
      <div className="flex flex-col items-start max-w-4xl mt-12 md:mt-0">
        {/* Eyebrow */}
        <p className="text-brand-light text-xs font-bold tracking-[0.25em] uppercase mb-20 md:mb-24 font-sans">
          Offline - Design Portfolio
        </p>

        {/* Heading */}
        <h1 className="text-[3.5rem] sm:text-7xl md:text-8xl lg:text-9xl xl:text-[9.5rem] font-serif font-normal tracking-tight leading-[0.95] md:leading-[0.88] select-none text-brand-dark">
          <span className="block">Making</span>
          <span className="block italic my-1">ideas</span>
          <span className="block">visible</span>
        </h1>

        {/* Paragraph */}
        <p className="max-w-md text-brand-light text-xs md:text-sm tracking-wide leading-relaxed font-sans mt-8 md:mt-10">
          Branding, visual identity, editorial thinking, and visual systems created to make ideas clearer, stronger, and more memorable.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="self-end md:absolute md:right-16 lg:right-24 md:bottom-24 flex flex-col items-center gap-4 mt-16 md:mt-0">
        <div className="w-px h-16 bg-brand-dark/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-brand-dark animate-pulse" />
        </div>
        <span className="text-[10px] tracking-[0.25em] font-bold text-brand-light uppercase select-none">
          Scroll to explore
        </span>
      </div>
    </main>
  );
}
