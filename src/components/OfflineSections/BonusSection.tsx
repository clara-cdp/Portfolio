import RevealWrapper from '../RevealWrapper/RevealWrapper';
import aw1 from '../../assets/editorial/AW_min1.jpg';
import frightFest from '../../assets/editorial/frightfest_mockup.png';
import met4 from '../../assets/editorial/Met_5c.jpg';

export default function BonusSection() {
  return (
    <section
      id="bonus"
      className="max-w-7xl mx-auto w-full px-8 md:px-16 lg:px-24 py-24 md:py-32 lg:py-40 border-t border-brand-dark/5"
    >
      <div className="w-full border border-brand-dark/15 rounded-sm p-8 md:p-12 lg:p-16 bg-[#EFECE6]/35 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        {/* Left Column: Eyebrow and Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start justify-center">
          <RevealWrapper className="flex flex-col items-start w-full">
            <p className="text-brand-light text-xs font-mono tracking-[0.25em] uppercase mb-6 font-sans">
              04 - BONUS TRACK
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-serif font-normal tracking-tight leading-[1.05] select-none text-brand-dark mb-6">
              Small editorial <span className="block italic">projects</span>
            </h2>
            <h3 className="text-base sm:text-lg font-bold tracking-tight text-brand-dark font-sans mb-4">
              Experiments in print and layout.
            </h3>
            <p className="text-brand-light text-sm leading-relaxed tracking-wide font-sans mb-8">
              A curated archive of smaller editorial work, publication designs, typographic experiments, and hands-on printing and binding projects.
            </p>
            
            <a
              href="#offline/editorial"
              className="group/link font-sans text-[10px] tracking-[0.25em] font-bold uppercase text-brand-dark/80 hover:text-brand-dark transition-colors duration-300 inline-flex items-center gap-1.5 cursor-pointer"
            >
              explore the gallery
              <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">
                &rarr;
              </span>
            </a>
          </RevealWrapper>
        </div>

        {/* Right Column: Interactive Visual Showcase */}
        <div className="w-full lg:w-1/2 flex items-center justify-center relative overflow-visible py-8">
          <RevealWrapper className="w-full flex justify-center">
            <a
              href="#offline/editorial"
              className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[4/3] flex items-center justify-center select-none group/stack cursor-pointer overflow-visible"
              aria-label="Explore editorial gallery"
            >
              {/* Ambient shadow glow */}
              <div className="absolute w-[80%] h-[80%] bg-brand-dark/5 blur-3xl rounded-full -z-10 group-hover/stack:bg-brand-dark/10 transition-colors duration-700" />

              {/* Card 1 (Back Left) - Alice in Wonderland Cover */}
              <div className="absolute w-[120px] sm:w-[140px] aspect-[3/4] p-1 bg-white border border-brand-dark/10 rounded-sm shadow-sm rotate-[-8deg] -translate-x-12 translate-y-3 group-hover/stack:rotate-[-12deg] group-hover/stack:-translate-x-16 group-hover/stack:translate-y-5 group-hover/stack:shadow-md transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) overflow-hidden">
                <img
                  src={aw1}
                  alt="Alice in Wonderland cover preview"
                  className="w-full h-full object-cover rounded-[1px]"
                />
              </div>

              {/* Card 2 (Middle Center) - Fright Fest Poster */}
              <div className="absolute w-[130px] sm:w-[150px] aspect-[3/4] p-1 bg-white border border-brand-dark/10 rounded-sm shadow-md rotate-[2deg] -translate-y-2 group-hover/stack:rotate-[-1deg] group-hover/stack:-translate-y-4 group-hover/stack:shadow-lg transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) overflow-hidden z-10">
                <img
                  src={frightFest}
                  alt="Fright Fest poster preview"
                  className="w-full h-full object-cover rounded-[1px]"
                />
              </div>

              {/* Card 3 (Front Right) - Met Leaflet Layout */}
              <div className="absolute w-[120px] sm:w-[140px] aspect-[3/4] p-1 bg-white border border-brand-dark/10 rounded-sm shadow-sm rotate-[8deg] translate-x-12 translate-y-4 group-hover/stack:rotate-[10deg] group-hover/stack:translate-x-16 group-hover/stack:translate-y-6 group-hover/stack:shadow-md transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) overflow-hidden z-20">
                <img
                  src={met4}
                  alt="Met leaflet design preview"
                  className="w-full h-full object-cover rounded-[1px]"
                />
              </div>
            </a>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}

