import { useState, useEffect } from 'react';
import HeroSection from '../components/OfflineSections/HeroSection';
import IdentitySection from '../components/OfflineSections/IdentitySection';
import JourneySection from '../components/OfflineSections/JourneySection';
import ProjectsSection from '../components/OfflineSections/ProjectsSection';
import ContactSection from '../components/OfflineSections/ContactSection';
import BonusSection from '../components/OfflineSections/BonusSection';

export default function OfflinePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkBg, setIsDarkBg] = useState(false);

  useEffect(() => {
    const sections = ['hero', 'identity', 'journey', 'projects', 'bonus', 'contact'];
    
    const observers = sections.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            const isDark = id === 'journey' || id === 'contact';
            setIsDarkBg(isDark);
          }
        },
        {
          rootMargin: '-80px 0px -80% 0px',
        }
      );
      
      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach(obs => {
        if (obs) {
          obs.observer.unobserve(obs.el);
        }
      });
    };
  }, []);

  const useLightText = isDarkBg && !isMenuOpen;

  const navigateToLanding = () => {
    window.location.hash = '';
  };

  return (
    <div className="min-h-screen bg-brand-cream text-brand-dark font-sans relative flex flex-col justify-between">
      {/* Navigation Header */}
      <header className={`w-full flex justify-between items-center py-6 px-8 md:px-16 lg:px-24 fixed top-0 left-0 z-50 transition-all duration-300 ${
        isMenuOpen ? 'bg-brand-cream/95 backdrop-blur-md border-b border-brand-dark/5' : 'bg-transparent'
      }`}>
        <div
          onClick={navigateToLanding}
          className={`font-sans text-[10px] tracking-[0.25em] font-bold uppercase select-none cursor-pointer transition-colors duration-300 ${
            useLightText ? 'text-brand-cream/80' : 'text-brand-dark/70'
          }`}
        >
          <span className="md:hidden">CLAR CDP</span>
          <span className="hidden md:inline">CLARA CERDÀ DE PALOU</span>
        </div>

        {/* Navigation Actions */}
        <div className="flex items-center gap-4 md:gap-8">
          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8 font-sans text-[10px] tracking-[0.25em] font-bold">
            <a href="#identity" className={`transition-colors duration-300 uppercase ${useLightText ? 'text-brand-cream/70 hover:text-brand-cream' : 'text-brand-dark/70 hover:text-brand-dark'}`}>Identity</a>
            <a href="#journey" className={`transition-colors duration-300 uppercase ${useLightText ? 'text-brand-cream/70 hover:text-brand-cream' : 'text-brand-dark/70 hover:text-brand-dark'}`}>Journey</a>
            <a href="#projects" className={`transition-colors duration-300 uppercase ${useLightText ? 'text-brand-cream/70 hover:text-brand-cream' : 'text-brand-dark/70 hover:text-brand-dark'}`}>Projects</a>
            <a href="#bonus" className={`transition-colors duration-300 uppercase ${useLightText ? 'text-brand-cream/70 hover:text-brand-cream' : 'text-brand-dark/70 hover:text-brand-dark'}`}>Bonus Track</a>
            <a href="#contact" className={`transition-colors duration-300 uppercase ${useLightText ? 'text-brand-cream/70 hover:text-brand-cream' : 'text-brand-dark/70 hover:text-brand-dark'}`}>Contact</a>
          </nav>

          {/* Mobile nav button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden focus:outline-none cursor-pointer p-1 transition-colors duration-300 ${
              useLightText ? 'text-brand-cream' : 'text-brand-dark'
            }`}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Outlined Button */}
          <a
            href="#online"
            className={`border px-4 py-1.5 rounded-sm font-sans text-[10px] tracking-[0.25em] font-bold uppercase transition-all duration-300 cursor-pointer ${
              useLightText 
                ? 'border-brand-cream/30 hover:border-brand-cream text-brand-cream hover:bg-brand-cream hover:text-brand-dark' 
                : 'border-brand-dark/25 hover:border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-brand-cyan'
            }`}
          >
            &rarr; Online
          </a>
        </div>

        {/* Mobile Dropdown Menu Panel */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-brand-cream/95 backdrop-blur-md border-b border-brand-dark/5 transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
        }`}>
          <nav className="flex flex-col py-6 px-8 gap-4 font-sans text-xs tracking-[0.25em] font-bold text-brand-dark/70">
            <a href="#identity" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-dark transition-colors duration-200 uppercase py-2 border-b border-brand-dark/5 last:border-b-0">Identity</a>
            <a href="#journey" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-dark transition-colors duration-200 uppercase py-2 border-b border-brand-dark/5 last:border-b-0">Journey</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-dark transition-colors duration-200 uppercase py-2 border-b border-brand-dark/5 last:border-b-0">Projects</a>
            <a href="#bonus" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-dark transition-colors duration-200 uppercase py-2 border-b border-brand-dark/5 last:border-b-0">Bonus Track</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-dark transition-colors duration-200 uppercase py-2 border-b border-brand-dark/5 last:border-b-0">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <HeroSection />

      {/* Section 01 -- DESIGN IDENTITY */}
      <IdentitySection />

      {/* Section 02 -- JOURNEY */}
      <JourneySection />

      {/* Section 03 -- PROJECTS */}
      <ProjectsSection />

      {/* Section 04 -- BONUS TRACK */}
      <BonusSection />

      {/* Section 05 -- CONTACT */}
      <ContactSection />
    </div>
  );
}
