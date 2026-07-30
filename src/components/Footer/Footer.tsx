import { useState, useEffect, useRef } from 'react';

interface ScrambleLinkProps {
  href: string;
  text: string;
  target?: string;
  rel?: string;
}

function ScrambleLink({ href, text, target, rel }: ScrambleLinkProps) {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef<number | null>(null);
  const chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefghijkmnopqrstwxyz23456789@./#%&*+-';

  const handleMouseEnter = () => {
    let iteration = 0;
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current);
    }

    intervalRef.current = window.setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      if (iteration >= text.length) {
        if (intervalRef.current !== null) {
          window.clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      }

      iteration += 1 / 3;
    }, 25);
  };

  const handleMouseLeave = () => {
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setDisplayText(text);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="flex items-center justify-center border border-brand-cyan/20 hover:border-brand-cyan bg-[#0A0E1A]/60 hover:bg-brand-cyan/5 text-brand-cyan py-4 px-6 rounded-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(23,208,208,0.15)] text-center cursor-pointer relative overflow-hidden group font-mono font-bold"
    >
      {/* Laser sweeping beam line overlay on hover */}
      <span className="absolute top-0 left-0 w-[20%] h-full bg-gradient-to-r from-transparent via-brand-cyan/20 to-transparent -translate-x-full group-hover:translate-x-[500%] transition-transform duration-1000 ease-out pointer-events-none" />

      <span className="relative z-10">{displayText}</span>
    </a>
  );
}

interface FooterProps {
  variant?: 'full-bleed' | 'nested' | 'online';
}

export default function Footer({ variant = 'full-bleed' }: FooterProps) {
  const content = (
    <div className="flex flex-col gap-2 text-[10px] tracking-[0.2em] font-mono text-brand-light uppercase select-none">
      <div>PORTFOLIO 2026</div>
      <div className="normal-case tracking-wider text-brand-light/80">
        <span className="uppercase tracking-[0.2em]">MADE WITH REACT + TAILWIND </span>
        by Clara Cerdà de Palou
      </div>
    </div>
  );

  if (variant === 'nested') {
    return (
      <div className="border-t border-brand-cream/10 pt-12 mt-auto w-full">
        {content}
      </div>
    );
  }

  if (variant === 'online') {
    return (
      <footer id="contact" className="w-full bg-brand-dark border-t border-white/5 pt-20 sm:pt-24 pb-12 select-none relative overflow-hidden">
        {/* Background Grid Accent */}
        <div className="absolute inset-0 bg-[radial-gradient(#17d0d0_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.02] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-16 lg:px-24 flex flex-col justify-between min-h-[50vh] relative z-10">
          <div className="max-w-4xl w-full flex flex-col justify-between min-h-[50vh] flex-grow">

            {/* Eyebrow & Headline block */}
            <div className="mb-12 sm:mb-16">
              <div className="flex items-center gap-3 font-mono text-xs sm:text-sm tracking-[0.2em] mb-8 sm:mb-12">
                <span className="text-brand-cyan font-bold uppercase flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan/70 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan" />
                  </span>
                  05 - CONTACT &rsaquo;
                </span>
                <span className="text-brand-cream/90 font-medium">
                  status live
                </span>
              </div>

              {/* Let's build together Title */}
              <h2 className="font-mono font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] tracking-tight leading-[1.05] text-white select-none mb-12">
                Let's <span className="text-brand-orange">build</span><br />together
              </h2>
            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-16 sm:mb-24 font-mono text-xs sm:text-sm">
              <ScrambleLink href="mailto:clarianne.cdp@gmail.com" text="clarianne.cdp@gmail.com" />
              <ScrambleLink href="https://linkedin.com/in/clara-cdp" text="linkedin.com/in/clara-cdp" target="_blank" rel="noopener noreferrer" />
              <ScrambleLink href="https://github.com/clara-cdp" text="github.com/clara-cdp" target="_blank" rel="noopener noreferrer" />
            </div>

            {/* Copyright Metadata */}
            <div className="border-t border-white/5 pt-8 flex flex-col gap-2.5 text-xs tracking-[0.2em] font-mono select-none">
              <div className="text-brand-cyan font-bold">PORTFOLIO 2026</div>
              <div className="text-brand-cream/80 uppercase tracking-[0.2em]">
                MADE WITH REACT + TAILWIND
              </div>
              <div className="text-brand-orange font-semibold normal-case tracking-wide">
                &rsaquo; by Clara Cerdà de Palou
              </div>
            </div>

          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="w-full bg-brand-dark border-t border-brand-cream/10 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
        {content}
      </div>
    </footer>
  );
}
