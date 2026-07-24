interface CommitItem {
  id: string;
  hash: string;
  label: string;
  title: string;
  summary: string;
  description: string;
}

const COMMITS: CommitItem[] = [
  {
    id: 'c1',
    hash: 'e7a1098',
    label: 'commit 01',
    title: 'Professional Foundations',
    summary: 'Communication & Leadership',
    description: 'Built a strong foundation in communication, leadership and project coordination.'
  },
  {
    id: 'c2',
    hash: 'f4b2319',
    label: 'commit 02',
    title: 'Visual Design',
    summary: 'Graphic & Web Design',
    description: 'Moved into Graphic & Web Design, creating brands, publications and digital experiences.'
  },
  {
    id: 'c3',
    hash: '8c3b2d9',
    label: 'commit 03',
    title: 'Design Systems',
    summary: "Master's in Graphic Design",
    description: "Specialised in visual systems, earning a Master's in Graphic Design."
  },
  {
    id: 'c4',
    hash: '0e58f72',
    label: 'commit 04',
    title: 'Engineering',
    summary: 'Full Stack Development',
    description: 'Expanded into Full Stack Development, building applications with React, TypeScript, PHP, Laravel and REST APIs.'
  },
  {
    id: 'head',
    hash: 'main',
    label: 'HEAD',
    title: 'Development',
    summary: 'Digital Product Design',
    description: 'Building digital products where design and engineering work together.'
  }
];

export default function OnlineJourneySection() {
  return (
    <section id="journey" className="w-full bg-[#080B14] text-brand-cream py-20 sm:py-24 border-t border-white/5 relative overflow-hidden select-none">
      {/* HUD Background Grid lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#17d0d0_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.015] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-16 lg:px-24">

        {/* Section Header */}
        <div className="flex items-center gap-3 font-mono text-xs sm:text-sm tracking-[0.2em] mb-8 sm:mb-12">
          <span className="text-brand-cyan font-bold uppercase">04 - JOURNEY &rsaquo;</span>
          <span className="text-brand-cream/60 font-medium uppercase">Version history</span>
        </div>

        {/* Section Heading */}
        <h2 className="font-mono font-bold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.1] mb-12 sm:mb-16">
          Evolution by
          <br />
          <span className="text-brand-orange">Design</span>.
        </h2>

        {/* Timeline Container */}
        <div className="relative max-w-3xl">
          {/* Vertical line running down through all items */}
          <div className="absolute left-[5px] sm:left-[7px] top-2 bottom-2 w-[1px] bg-brand-cyan/30" />

          <div className="space-y-12">
            {COMMITS.map((commit) => {
              const isHead = commit.id === 'head';

              return (
                <div key={commit.id} className="relative pl-8 sm:pl-10 group">
                  {/* Timeline Dot */}
                  {isHead ? (
                    <div className="absolute left-0 top-[6px] w-[11px] h-[11px] sm:w-[15px] sm:h-[15px] flex items-center justify-center z-10">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75" />
                      <span className="relative inline-flex rounded-full h-[7px] w-[7px] sm:h-[9px] sm:w-[9px] bg-brand-cyan shadow-[0_0_8px_#17d0d0]" />
                    </div>
                  ) : (
                    <div className="absolute left-0 top-[6px] w-[11px] h-[11px] sm:w-[15px] sm:h-[15px] flex items-center justify-center z-10">
                      <div className="w-[7px] h-[7px] sm:w-[9px] sm:h-[9px] rounded-full bg-brand-cyan/40 border border-brand-cyan/20 group-hover:bg-brand-cyan group-hover:shadow-[0_0_8px_#17d0d0] transition-all duration-300" />
                    </div>
                  )}

                  {/* Content */}
                  <div>
                    <h3 className="font-mono text-sm sm:text-base font-bold tracking-tight mb-2 select-text">
                      <span className="text-brand-orange tracking-[0.2em]">COMMIT [{commit.hash}]</span>{' '}
                      <span className="text-brand-orange/80 tracking-[0.2em]">&gt;</span>{' '}
                      <span className="text-brand-cyan tracking-[0.1em]">{commit.title}</span>
                    </h3>
                    <p className="text-brand-white text-xs sm:text-base leading-relaxed max-w-2xl font-sans select-text">
                      {commit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
