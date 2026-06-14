import { useEffect, useRef, useState } from 'react';

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
      className={`grid grid-cols-12 gap-6 md:gap-8 py-12 border-t border-brand-cream/10 first:border-t-0 transition-all duration-[900ms] ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
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
