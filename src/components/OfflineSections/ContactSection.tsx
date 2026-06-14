import { useEffect, useRef, useState } from 'react';

export default function ContactSection() {
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
          rootMargin: '0px 0px -50px 0px',
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
    <section
      id="contact"
      ref={ref}
      className={`w-full bg-brand-dark text-brand-cream pt-24 md:pt-32 lg:pt-40 pb-12 transition-all duration-[900ms] ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
    >
      <div className="max-w-7xl mx-auto w-full px-8 md:px-16 lg:px-24 flex flex-col justify-between min-h-[50vh]">
        {/* Contact Content */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <p className="text-brand-light text-xs font-mono tracking-[0.25em] uppercase mb-8 md:mb-12">
            04 - CONTACT
          </p>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[6rem] font-serif font-normal tracking-tight leading-[1.1] select-none text-brand-cream mb-12 md:mb-16">
            Let's work
            <br />
            <span className="italic">together</span>
          </h2>

          {/* Links Grid */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 md:gap-16 font-sans text-sm sm:text-base tracking-wide">
            <a
              href="mailto:clarianne.cdp@gmail.com"
              className="text-brand-cream/85 hover:text-brand-cream transition-colors duration-350 border-b border-brand-cream/10 hover:border-brand-cream pb-1 self-start cursor-pointer"
            >
              clarianne.cdp@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/clara-cdp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-cream/85 hover:text-brand-cream transition-colors duration-350 border-b border-brand-cream/10 hover:border-brand-cream pb-1 self-start cursor-pointer"
            >
              linkedin.com/in/clara-cdp
            </a>
            <a
              href="https://github.com/clara-cdp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-cream/85 hover:text-brand-cream transition-colors duration-350 border-b border-brand-cream/10 hover:border-brand-cream pb-1 self-start cursor-pointer"
            >
              github.com/clara-cdp
            </a>
          </div>
        </div>

        {/* Footer Area */}
        <div className="border-t border-brand-cream/10 pt-12 mt-auto flex flex-col gap-2 text-[10px] tracking-[0.2em] font-mono text-brand-light uppercase select-none">
          <div>PORTFOLIO 2026</div>
          <div className="normal-case tracking-wider">
            <span className="uppercase tracking-[0.2em]">MADE WITH REACT + TAILWIND </span>
            by Clara Cerdà de Palou
          </div>
        </div>
      </div>
    </section>
  );
}
