import { useState, useEffect } from 'react';
import OnlineHeroSection from '../components/OnlineSections/OnlineHeroSection';
import StackSection from '../components/OnlineSections/StackSection';
import OnlineIdentitySection from '../components/OnlineSections/OnlineIdentitySection';
import OnlineProjectsSection from '../components/OnlineSections/OnlineProjectsSection';
import OnlineJourneySection from '../components/OnlineSections/OnlineJourneySection';
import { OnlineButton } from '../components/Button/Button';
import Footer from '../components/Footer/Footer';
import ScrollProgressBar from '../components/ScrollProgressBar/ScrollProgressBar';

export default function OnlinePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScrollToHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#online/')) {
        const sectionId = hash.replace('#online/', '');
        const element = document.getElementById(sectionId);
        if (element && typeof element.scrollIntoView === 'function') {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else if (hash === '#online' || hash === '') {
        if (typeof window !== 'undefined' && typeof window.scrollTo === 'function') {
          window.scrollTo(0, 0);
        }
      }
    };

    handleScrollToHash();

    window.addEventListener('hashchange', handleScrollToHash);
    return () => window.removeEventListener('hashchange', handleScrollToHash);
  }, []);

  const navigateToLanding = () => {
    window.location.hash = '';
  };

  const navigateToOffline = () => {
    window.location.hash = '#offline';
  };

  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans relative flex flex-col justify-between selection:bg-brand-cyan selection:text-brand-dark">
      <ScrollProgressBar />
      {/* Navigation Header */}
      <header
        className={`w-full flex justify-between items-center py-6 px-6 sm:px-8 md:px-16 lg:px-24 fixed top-0 left-0 z-50 transition-all duration-300 ${
          isMenuOpen
            ? 'bg-brand-dark/95 backdrop-blur-md border-b border-brand-cyan/10'
            : 'bg-brand-dark/80 backdrop-blur-sm'
        }`}
      >
        {/* Brand & Version */}
        <div className="flex items-center gap-3 sm:gap-6 select-none">
          <span
            onClick={navigateToLanding}
            className="font-mono text-xs sm:text-sm tracking-[0.2em] font-bold text-brand-cyan uppercase cursor-pointer hover:opacity-80 transition-opacity"
          >
            CLARA.DEV
          </span>
          <span className="font-mono text-xs tracking-wider text-brand-cream/60">
            v1.0.0 &mdash; 2024
          </span>
        </div>

        {/* Navigation Actions */}
        <div className="flex items-center gap-4 md:gap-8">
          {/* Desktop Nav Links: STACK, IDENTITY, PROJECTS, JOURNEY */}
          <nav className="hidden md:flex items-center gap-8 font-mono text-[11px] lg:text-xs tracking-[0.2em] font-semibold">
            <a
              href="#online/stack"
              className="text-brand-cream/70 hover:text-brand-cyan transition-colors duration-200 uppercase"
            >
              STACK
            </a>
            <a
              href="#online/identity"
              className="text-brand-cream/70 hover:text-brand-cyan transition-colors duration-200 uppercase"
            >
              IDENTITY
            </a>
            <a
              href="#online/projects"
              className="text-brand-cream/70 hover:text-brand-cyan transition-colors duration-200 uppercase"
            >
              PROJECTS
            </a>
            <a
              href="#online/journey"
              className="text-brand-cream/70 hover:text-brand-cyan transition-colors duration-200 uppercase"
            >
              JOURNEY
            </a>
            <a
              href="#online/contact"
              className="text-brand-cream/70 hover:text-brand-cyan transition-colors duration-200 uppercase"
            >
              CONTACT
            </a>
          </nav>

          {/* Reused OnlineButton Component */}
          <OnlineButton
            onClick={navigateToOffline}
            className="!px-3 sm:!px-4 !py-1 sm:!py-1.5 !text-[10px] sm:!text-[11px] !font-mono !font-bold"
          >
            &rarr; OFFLINE
          </OnlineButton>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden focus:outline-none cursor-pointer p-1 text-brand-cyan"
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
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-brand-dark/95 backdrop-blur-md border-b border-brand-cyan/10 transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
          }`}
        >
          <nav className="flex flex-col py-6 px-8 gap-4 font-mono text-xs tracking-[0.2em] font-semibold text-brand-cream/70">
            <a
              href="#online/stack"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-brand-cyan transition-colors duration-200 uppercase py-2 border-b border-brand-cyan/10 last:border-b-0"
            >
              STACK
            </a>
            <a
              href="#online/identity"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-brand-cyan transition-colors duration-200 uppercase py-2 border-b border-brand-cyan/10 last:border-b-0"
            >
              IDENTITY
            </a>
            <a
              href="#online/projects"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-brand-cyan transition-colors duration-200 uppercase py-2 border-b border-brand-cyan/10 last:border-b-0"
            >
              PROJECTS
            </a>
            <a
              href="#online/journey"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-brand-cyan transition-colors duration-200 uppercase py-2 border-b border-brand-cyan/10"
            >
              JOURNEY
            </a>
            <a
              href="#online/contact"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-brand-cyan transition-colors duration-200 uppercase py-2 border-b border-brand-cyan/10 last:border-b-0"
            >
              CONTACT
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content Sections */}
      <main className="flex-grow">
        <OnlineHeroSection />
        <StackSection />
        <OnlineIdentitySection />
        <OnlineProjectsSection />
        <OnlineJourneySection />
      </main>

      {/* Custom Online Footer Component */}
      <Footer variant="online" />
    </div>
  );
}


