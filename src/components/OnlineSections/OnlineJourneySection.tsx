interface CommitItem {
  id: string;
  hash: string;
  label: string;
  date: string;
  title: string;
  summary: string;
  description: string;
}

const COMMITS: CommitItem[] = [
  {
    id: 'c1',
    hash: 'e7a1098',
    label: 'commit 01',
    date: '2008 - 2015',
    title: 'Strong Foundation',
    summary: 'Communication & Leadership',
    description: 'Built a strong foundation in communication, leadership and project coordination.'
  },
  {
    id: 'c2',
    hash: 'f4b2319',
    label: 'commit 02',
    date: '2016 - 2020',
    title: 'Creative Shift',
    summary: 'Graphic & Web Design',
    description: 'Moved into Graphic & Web Design, creating brands, publications and digital experiences.'
  },
  {
    id: 'c3',
    hash: '8c3b2d9',
    label: 'commit 03',
    date: '2021 - 2023',
    title: 'Specialisation',
    summary: "Master's in Graphic Design",
    description: "Specialised in visual systems, earning a Master's in Graphic Design."
  },
  {
    id: 'c4',
    hash: '0e58f72',
    label: 'commit 04',
    date: '2024 - 2025',
    title: 'Engineering Expansion',
    summary: 'Full Stack Development',
    description: 'Expanded into Full Stack Development, building applications with React, TypeScript, PHP, Laravel and REST APIs.'
  },
  {
    id: 'head',
    hash: 'main',
    label: 'HEAD',
    date: '2026 - PRESENT',
    title: 'Digital Product Design',
    summary: 'Design & Engineering Unity',
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
        <div className="flex items-center gap-3 font-mono text-xs sm:text-sm tracking-[0.2em] mb-12 sm:mb-16">
          <span className="text-brand-cyan font-bold uppercase animate-pulse">04 — JOURNEY &rsaquo;</span>
          <span className="text-brand-cream/80 font-medium">Commit history</span>
        </div>

        {/* Journey Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {COMMITS.map((commit) => {
            const isHead = commit.label === 'HEAD';

            return (
              <div
                key={commit.id}
                className={`group border rounded-sm p-5 bg-[#0A0E1A]/60 flex flex-col justify-between min-h-[260px] transition-all duration-300 ${
                  isHead
                    ? 'border-brand-cyan/40 hover:border-brand-cyan hover:shadow-[0_0_22px_rgba(23,208,208,0.2)]'
                    : 'border-white/10 hover:border-brand-cyan/60 hover:shadow-[0_0_18px_rgba(23,208,208,0.12)]'
                }`}
              >
                <div>
                  {/* Card Header */}
                  <div className="flex justify-between items-center pb-1">
                    <h3 className={`font-mono text-xs sm:text-sm font-bold tracking-wider transition-colors duration-300 ${
                      isHead ? 'text-brand-cyan' : 'text-brand-cream/60 group-hover:text-brand-cyan'
                    }`}>
                      {commit.label.toUpperCase()}
                    </h3>

                    {/* Status Dot */}
                    <div className="flex items-center justify-center w-5 h-5">
                      {isHead ? (
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan shadow-[0_0_8px_#17d0d0]" />
                        </span>
                      ) : (
                        <span className="relative block w-2 h-2 rounded-full bg-brand-cyan/40 shadow-[0_0_6px_rgba(23,208,208,0.2)] group-hover:bg-brand-cyan group-hover:shadow-[0_0_8px_#17d0d0] transition-all duration-300" />
                      )}
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-[1px] bg-white/10 my-3 group-hover:bg-brand-cyan/30 transition-all duration-300" />

                  {/* Hash and Date info metadata */}
                  <div className="flex items-center justify-between font-mono text-[10px] tracking-wide mb-3">
                    <span className="text-brand-orange font-semibold">
                      [{commit.hash}]
                    </span>
                    <span className="text-brand-light/50">
                      {commit.date.split(' ')[0]}
                    </span>
                  </div>

                  {/* Subject Headline */}
                  <h4 className="text-sm font-bold text-brand-cream/90 group-hover:text-white transition-colors duration-200 mb-2">
                    {commit.title}
                  </h4>

                  {/* Description text */}
                  <p className="text-xs text-brand-light/80 leading-relaxed font-sans">
                    {commit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
