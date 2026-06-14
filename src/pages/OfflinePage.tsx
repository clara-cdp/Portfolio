import { useEffect, useRef, useState } from 'react';
import ProjectsSection from '../components/OfflineSections/ProjectsSection';
import ContactSection from '../components/OfflineSections/ContactSection';

const journeyEntries = [
  {
    year: "2008",
    title: "Leadership & Operations",
    subtitle: "how to work with people.",
    description: [
      "Before design became my profession, I spent several years leading teams in a fast-paced international environment.",
      "Working closely with people taught me how to communicate clearly, adapt quickly, and make decisions under pressure. It also taught me that most challenges are ultimately human ones.",
      "That understanding continues to shape the way I approach my work today."
    ]
  },
  {
    year: "2016",
    title: "Set Design & Production",
    subtitle: "how to bring ideas into reality",
    description: [
      "Drawn by creative work, I moved into theatre production and live events in London.",
      "Working on stage sets, props, logistics, and installations showed me how ideas become real experiences. Every project required balancing creative vision with practical constraints while collaborating across multiple disciplines.",
      "It taught me how to turn concepts into something tangible."
    ]
  },
  {
    year: "2021",
    title: "Graphic Design & Visual Communication",
    subtitle: "how to communicate",
    description: [
      "Design became my full-time focus through branding, visual identity, editorial design, and communication projects.",
      "My role extended beyond creating visuals. It involved understanding objectives, creating coherent systems, and guiding projects from concept through production and delivery.",
      "Design taught me how to create clarity from complexity."
    ]
  },
  {
    year: "TODAY",
    title: "Design & Development",
    subtitle: "how to build experiences",
    description: [
      "The more I worked with brands and communication systems, the more curious I became about what happens beyond the visual layer.",
      "Learning to program introduced a new dimension: interaction, behaviour, and systems. It expanded my ability to solve problems and allowed me to think not only about how something looks, but also how it works.",
      "Today, my work sits between design and technology, combining communication, structure, and digital experiences."
    ]
  }
];

function TimelineEntryRow({ entry }: { entry: typeof journeyEntries[number] }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    const currentRef = ref.current;

    const timer = setTimeout(() => {
      observer = new IntersectionObserver(
        ([item]) => {
          setIsVisible(item.isIntersecting);
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -100px 0px',
        }
      );

      if (currentRef) {
        observer.observe(currentRef);
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      if (observer && currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`grid grid-cols-12 gap-6 md:gap-8 py-12 border-t border-brand-cream/10 first:border-t-0 transition-all duration-[900ms] ease-out transform ${isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-16'
        }`}
    >
      {/* Year Column */}
      <div className="col-span-12 md:col-span-2 text-brand-cream/60 font-mono text-xs md:text-sm tracking-wider uppercase md:pt-[5px]">
        {entry.year}
      </div>

      {/* Content Column */}
      <div className="col-span-12 md:col-span-10 grid grid-cols-12 gap-6 md:gap-8">
        {/* Title & Subtitle */}
        <div className="col-span-12 md:col-span-5 flex flex-col gap-1">
          <h4 className="text-brand-gold text-lg md:text-xl font-serif font-normal">
            {entry.title}
          </h4>
          <p className="text-brand-cream text-xs md:text-sm font-sans tracking-wide">
            {entry.subtitle}
          </p>
        </div>

        {/* Description Paragraphs */}
        <div className="col-span-12 md:col-span-7 text-brand-light text-sm md:text-base leading-relaxed tracking-wide font-sans space-y-2">
          {entry.description.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function OfflinePage() {
  const navigateToLanding = () => {
    window.location.hash = '';
  };

  return (
    <div className="min-h-screen bg-brand-cream text-brand-dark font-sans relative overflow-x-hidden flex flex-col justify-between">
      {/* Navigation Header */}
      <header className="w-full flex justify-between items-center py-6 px-8 md:px-16 lg:px-24 fixed top-0 left-0 z-50">

        <div
          onClick={navigateToLanding}
          className="font-sans text-[10px] tracking-[0.25em] font-bold text-brand-dark/70 uppercase select-none cursor-pointer"
        >
          CLARA<span className="hidden md:inline"> CDP</span>
        </div>

        {/* Navigation Actions */}
        <div className="flex items-center gap-4 md:gap-8">
          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8 font-sans text-[10px] tracking-[0.25em] font-bold text-brand-dark/70">
            <a href="#identity" className="hover:text-brand-dark transition-colors duration-200 uppercase">Identity</a>
            <a href="#journey" className="hover:text-brand-dark transition-colors duration-200 uppercase">Journey</a>
            <a href="#projects" className="hover:text-brand-dark transition-colors duration-200 uppercase">Projects</a>
            <a href="#contact" className="hover:text-brand-dark transition-colors duration-200 uppercase">Contact</a>
          </nav>

          {/* Mobile nav button */}
          <button
            className="md:hidden text-brand-dark focus:outline-none cursor-pointer p-1"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Outlined Button */}
          <a
            href="#online"
            className="border border-brand-dark/25 hover:border-brand-dark px-4 py-1.5 rounded-sm font-sans text-[10px] tracking-[0.25em] font-bold uppercase transition-all duration-300 hover:bg-brand-dark hover:text-brand-cyan cursor-pointer"
          >
            &rarr; Online
          </a>


        </div>
      </header>

      {/* Main Hero Container */}
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

      {/* Section 01 -- DESIGN IDENTITY */}
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
          <div className="space-y-2 text-brand-light text-sm sm:text-base[16px] leading-relaxed tracking-wide font-sans">
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

      {/* Section 02 -- JOURNEY */}
      <section
        id="journey"
        className="w-full bg-brand-dark text-brand-cream py-24 md:py-32 lg:py-40"
      >
        <div className="max-w-7xl mx-auto w-full px-8 md:px-16 lg:px-24">
          {/* Section Header */}
          <div className="mb-16 md:mb-24 lg:mb-32">
            <p className="text-brand-light text-xs font-mono tracking-[0.25em] uppercase mb-8 md:mb-12 font-sans">
              02 - JOURNEY
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem] font-serif font-normal tracking-tight leading-[1.1] select-none text-brand-cream">
              Not a straight line.
              <br />
              A <span className="italic">better</span> path.
            </h2>
          </div>

          {/* Entries list */}
          <div className="flex flex-col">
            {journeyEntries.map((entry) => (
              <TimelineEntryRow key={entry.year} entry={entry} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 03 -- PROJECTS */}
      <ProjectsSection />

      {/* Section 04 -- CONTACT */}
      <ContactSection />
    </div>
  );
}
