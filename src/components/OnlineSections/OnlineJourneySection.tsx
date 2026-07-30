import { useState, useEffect, useRef } from 'react';

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

// Hook to track container scroll progress
function useScrollProgress(ref: React.RefObject<HTMLDivElement | null>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start calculating progress when the top of the container reaches 75% of viewport height
      const startPoint = windowHeight * 0.75;
      const containerHeight = rect.height;
      const totalScrollableDistance = containerHeight;

      // Distance from the startPoint to the current top position of the container
      const scrolled = startPoint - rect.top;

      let currentProgress = scrolled / totalScrollableDistance;
      currentProgress = Math.max(0, Math.min(1, currentProgress));

      setProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [ref]);

  return progress;
}

// Typewriter text effect component
interface TypewriterTextProps {
  text: string;
  started: boolean;
  active: boolean;
  onComplete?: () => void;
  speed?: number;
  delay?: number;
  className?: string;
  as?: 'span' | 'p';
}

function TypewriterText({
  text,
  started,
  active,
  onComplete,
  speed = 10,
  delay = 0,
  className = '',
  as: Component = 'p',
}: TypewriterTextProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [complete, setComplete] = useState(false);

  // Reset state when typewriter is deactivated (e.g. scroll up)
  useEffect(() => {
    if (!started) {
      setCurrentIdx(0);
      setComplete(false);
    }
  }, [started]);

  useEffect(() => {
    if (!started || !active || complete) return;

    let timer: number;
    const startTimeout = setTimeout(() => {
      timer = window.setInterval(() => {
        setCurrentIdx((prev) => {
          if (prev < text.length) {
            return prev + 1;
          } else {
            setComplete(true);
            window.clearInterval(timer);
            if (onComplete) onComplete();
            return prev;
          }
        });
      }, speed);
    }, delay);

    return () => {
      clearTimeout(startTimeout);
      if (timer) window.clearInterval(timer);
    };
  }, [started, active, text, speed, delay, complete, onComplete]);

  const typed = started ? text.substring(0, currentIdx) : '';
  const untyped = started ? text.substring(currentIdx) : text;

  return (
    <Component className={className}>
      <span>{typed}</span>
      <span className="opacity-0 select-none pointer-events-none">{untyped}</span>
      {active && !complete && (
        <span className="inline-block w-1.5 h-[1.1em] bg-brand-cyan ml-1 animate-pulse align-middle select-none">
          &nbsp;
        </span>
      )}
    </Component>
  );
}

// Single timeline item component
interface TimelineItemProps {
  commit: CommitItem;
  isHead: boolean;
  activeLineHeight: number;
  isPrevDone: boolean;
  onPhaseChange: (phase: 'idle' | 'hash' | 'title' | 'desc' | 'done') => void;
  itemRef?: (el: HTMLDivElement | null) => void;
}

function TimelineItem({
  commit,
  isHead,
  activeLineHeight,
  isPrevDone,
  onPhaseChange,
  itemRef,
}: TimelineItemProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [, setMounted] = useState(false);
  const [phase, setPhase] = useState<'idle' | 'hash' | 'title' | 'desc' | 'done'>('idle');

  // Trigger re-render after mount so offsetTop is correctly read
  useEffect(() => {
    setMounted(true);
  }, []);

  const dotOffset = typeof window !== 'undefined' && window.innerWidth >= 640 ? 14 : 11;
  const dotPos = (elementRef.current?.offsetTop || 0) + dotOffset - 8;
  const isCrossed = activeLineHeight > 0 && activeLineHeight >= dotPos;
  const canStart = isCrossed && isPrevDone;

  const isDotActive = phase !== 'idle' && phase !== 'hash';

  // Transition phases sequentially once the progress line crosses this item and the previous item is completed
  useEffect(() => {
    if (canStart) {
      if (phase === 'idle') {
        setPhase('hash');
      }
    } else {
      setPhase('idle');
    }
  }, [canStart, phase]);

  // Propagate phase change to parent
  useEffect(() => {
    onPhaseChange(phase);
  }, [phase, onPhaseChange]);

  return (
    <div
      ref={(el) => {
        (elementRef as any).current = el;
        if (itemRef) {
          itemRef(el);
        }
      }}
      className="relative pl-8 sm:pl-10 group"
    >
      {/* Timeline Dot */}
      {isHead ? (
        <div className="absolute left-0 top-[6px] w-[11px] h-[11px] sm:w-[15px] sm:h-[15px] flex items-center justify-center z-10">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan transition-opacity duration-500 ${isDotActive ? 'opacity-75' : 'opacity-0'}`} />
          <span className={`relative inline-flex rounded-full h-[7px] w-[7px] sm:h-[9px] sm:w-[9px] bg-brand-cyan shadow-[0_0_8px_#17d0d0] transition-transform duration-500 ${isDotActive ? 'scale-100' : 'scale-50'}`} />
        </div>
      ) : (
        <div className="absolute left-0 top-[6px] w-[11px] h-[11px] sm:w-[15px] sm:h-[15px] flex items-center justify-center z-10">
          <div
            className={`w-[7px] h-[7px] sm:w-[9px] sm:h-[9px] rounded-full transition-all duration-500 ${
              isDotActive
                ? 'bg-brand-cyan shadow-[0_0_8px_#17d0d0] scale-110'
                : 'bg-brand-cyan/20 border border-brand-cyan/10 scale-90'
            } group-hover:bg-brand-cyan group-hover:shadow-[0_0_8px_#17d0d0] group-hover:scale-125`}
          />
        </div>
      )}

      {/* Content */}
      <div className="select-text">
        <h3 className="font-mono text-sm sm:text-base font-bold tracking-tight mb-2">
          <TypewriterText
            text={`COMMIT [${commit.hash}]`}
            started={phase !== 'idle'}
            active={phase === 'hash'}
            onComplete={() => setPhase('title')}
            speed={10}
            className="inline text-brand-orange tracking-[0.2em]"
            as="span"
          />{' '}
          <span
            className={`text-brand-orange/80 tracking-[0.2em] select-none transition-opacity duration-300 ${
              phase !== 'idle' && phase !== 'hash' ? 'opacity-100' : 'opacity-0'
            }`}
          >
            &gt;
          </span>{' '}
          <TypewriterText
            text={commit.title}
            started={phase === 'title' || phase === 'desc' || phase === 'done'}
            active={phase === 'title'}
            onComplete={() => setPhase('desc')}
            speed={8}
            className="inline text-brand-cyan tracking-[0.1em]"
            as="span"
          />
        </h3>
        
        <TypewriterText
          text={commit.description}
          started={phase === 'desc' || phase === 'done'}
          active={phase === 'desc'}
          onComplete={() => setPhase('done')}
          speed={6}
          className="text-brand-white text-xs sm:text-base leading-relaxed max-w-2xl font-sans"
          as="p"
        />
      </div>
    </div>
  );
}

export default function OnlineJourneySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastItemRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollProgress = useScrollProgress(containerRef);
  const [maxLineHeight, setMaxLineHeight] = useState(0);
  const [itemPhases, setItemPhases] = useState<Record<string, 'idle' | 'hash' | 'title' | 'desc' | 'done'>>({});
  const [targetHeight, setTargetHeight] = useState(0);
  const [activeLineHeight, setActiveLineHeight] = useState(0);

  // Recalculate max boundary height
  useEffect(() => {
    const updateHeight = () => {
      if (lastItemRef.current) {
        const dotOffset = window.innerWidth >= 640 ? 14 : 11;
        setMaxLineHeight(lastItemRef.current.offsetTop + dotOffset);
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  // Compute active target progress line height based on scroll and rendering completion
  useEffect(() => {
    const userScrollDepth = scrollProgress * (maxLineHeight - 8);
    let newTargetHeight = 0;

    for (let i = 0; i < COMMITS.length; i++) {
      const dotOffset = window.innerWidth >= 640 ? 14 : 11;
      const itemEl = itemRefs.current[i];
      if (!itemEl) break;

      const dotPos = itemEl.offsetTop + dotOffset - 8;

      // The progress line can only advance to this item if the user has scrolled past its dot
      if (userScrollDepth >= dotPos) {
        const isPrevDone = i === 0 ? true : itemPhases[COMMITS[i - 1].id] === 'done';
        if (isPrevDone) {
          const isCurrentDone = itemPhases[COMMITS[i].id] === 'done';
          if (isCurrentDone && i < COMMITS.length - 1) {
            // Grow to the next item's dot position
            const nextItemEl = itemRefs.current[i + 1];
            if (nextItemEl) {
              newTargetHeight = nextItemEl.offsetTop + dotOffset - 8;
            }
          } else {
            // Stop at the current dot
            newTargetHeight = dotPos;
          }
        } else {
          break;
        }
      } else {
        break;
      }
    }

    setTargetHeight(newTargetHeight);
  }, [scrollProgress, maxLineHeight, itemPhases]);

  // Smoothly animate the line height to targetHeight using requestAnimationFrame easing
  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      setActiveLineHeight((prev) => {
        const diff = targetHeight - prev;
        if (Math.abs(diff) < 0.5) {
          return targetHeight;
        }
        // Easing interpolation step
        const step = diff * 0.12;
        animationFrameId = requestAnimationFrame(animate);
        return prev + step;
      });
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [targetHeight]);

  return (
    <section id="journey" className="w-full bg-[#080B14] text-brand-cream py-20 sm:py-24 border-t border-white/5 relative overflow-hidden select-none">
      {/* HUD Background Grid lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#17d0d0_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.015] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-16 lg:px-24">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 font-mono text-xs sm:text-sm tracking-[0.2em] mb-8 sm:mb-12">
          <span className="text-brand-cyan font-bold uppercase flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan/70 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan" />
            </span>
            04 - JOURNEY &rsaquo;
          </span>
          <span className="text-brand-cream/60 font-medium uppercase">Version history</span>
        </div>

        {/* Section Heading */}
        <h2 className="font-mono font-bold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.1] mb-12 sm:mb-16">
          Evolution by
          <br />
          <span className="text-brand-orange">Design</span>.
        </h2>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative max-w-3xl">
          {/* Vertical line running down through all items (Background Track) */}
          <div 
            className="absolute left-[5px] sm:left-[7px] top-2 w-[1px] bg-brand-cyan/10" 
            style={{ height: maxLineHeight > 0 ? `${maxLineHeight - 8}px` : '100%' }}
          />

          {/* Active progress line */}
          <div 
            className="absolute left-[5px] sm:left-[7px] top-2 w-[1px] bg-brand-cyan shadow-[0_0_8px_#17d0d0] transition-all duration-75 ease-out origin-top"
            style={{ height: `${activeLineHeight}px` }}
          />

          <div className="space-y-12">
            {COMMITS.map((commit, index) => {
              const isHead = commit.id === 'head';
              const isLast = index === COMMITS.length - 1;
              const prevId = index > 0 ? COMMITS[index - 1].id : null;
              const isPrevDone = prevId ? itemPhases[prevId] === 'done' : true;

              return (
                <TimelineItem 
                  key={commit.id} 
                  commit={commit} 
                  isHead={isHead} 
                  activeLineHeight={activeLineHeight}
                  isPrevDone={isPrevDone}
                  onPhaseChange={(phase) => setItemPhases((prev) => {
                    if (prev[commit.id] === phase) return prev;
                    return { ...prev, [commit.id]: phase };
                  })}
                  itemRef={(el) => {
                    itemRefs.current[index] = el;
                    if (isLast) {
                      lastItemRef.current = el;
                    }
                  }}
                />
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
