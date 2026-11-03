import RevealWrapper from '../RevealWrapper/RevealWrapper';

const journeyEntries = [
  {
    year: "2008",
    title: "Leadership & Operations",
    subtitle: "How to work with people.",
    description: [
      "Before moving into creative work, I spent several years managing teams in an international, fast-paced environment.",
      "It taught me to communicate clearly, adapt quickly, and make decisions under pressure. Most importantly, I learned that understanding people is at the heart of good teamwork."
    ]
  },
  {
    year: "2016",
    title: "Set Design & Production",
    subtitle: "How to bring ideas to life.",
    description: [
      "Drawn to creative work, I moved into theatre production and live events in London.",
      "Working on sets, props, and installations taught me to balance creative ideas with practical constraints, collaborate across disciplines, and turn concepts into tangible experiences."
    ]
  },
  {
    year: "2021",
    title: "Graphic Design & Visual Communication",
    subtitle: "How to communicate visually.",
    description: [
      "Design became my professional focus through branding, visual identity, and editorial projects.",
      "Beyond creating visuals, I learned to understand objectives, develop coherent design systems, and manage projects from concept to production.",
      "Above all, design taught me to bring clarity to complexity."
    ]
  },
  {
    year: "TODAY",
    title: "Design & Development",
    subtitle: "How to build experiences.",
    description: [
      "My curiosity about what happens beyond the visual layer led me into programming.",
      "Development introduced interaction, logic, and functionality, expanding how I approach and solve problems.",
      "Today, I combine design thinking with frontend and full-stack development to create digital experiences that work as well as they look."

    ]
  }
];

function TimelineEntryRow({ entry }: { entry: typeof journeyEntries[number] }) {
  return (
    <RevealWrapper
      threshold={0.1}
      className="grid grid-cols-12 gap-6 md:gap-8 py-12 border-t border-brand-cream/10 first:border-t-0 w-full"
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
    </RevealWrapper>
  );
}

export default function JourneySection() {
  return (
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
  );
}
export { journeyEntries };
