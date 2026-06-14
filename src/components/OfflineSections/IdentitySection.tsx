export default function IdentitySection() {
  return (
    <section
      id="identity"
      className="max-w-7xl mx-auto w-full px-8 md:px-16 lg:px-24 py-24 md:py-32 lg:py-40 flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-24 relative"
    >
      {/* Left Column: Eyebrow and Heading */}
      <div className="flex-1 flex flex-col items-start">
        <p className="text-brand-light text-xs font-mono tracking-[0.25em] uppercase mb-8 md:mb-12 font-sans">
          01 - DESIGN IDENTITY
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-serif font-normal tracking-tight leading-[1.05] select-none text-brand-dark">
          Design as <span className="block italic">communication</span>
        </h2>
      </div>

      {/* Right Column: Title and paragraphs */}
      <div className="flex-1 flex flex-col justify-start md:pt-[2px] max-w-xl">
        <h3 className="text-lg sm:text-lg font-bold tracking-tight text-brand-dark font-sans mt-10 mb-6">
          Design is not decoration.
        </h3>
        <div className="space-y-2 text-brand-light text-sm sm:text-base leading-relaxed tracking-wide font-sans">
          <p>
            Good design is not about making things look better.
            <br />
            It is about making ideas easier to understand.
          </p>
          <p>
            Whether creating a visual identity, a publication, a campaign, or a digital experience, the objective remains the same: communicate clearly, create meaning, and help people navigate information.
          </p>
          <p>
            Every project begins with a message before it becomes a visual solution.
          </p>
        </div>
      </div>
    </section>
  );
}
