import HeroSection from '../components/OfflineSections/HeroSection';
import IdentitySection from '../components/OfflineSections/IdentitySection';
import JourneySection from '../components/OfflineSections/JourneySection';
import ProjectsSection from '../components/OfflineSections/ProjectsSection';
import ContactSection from '../components/OfflineSections/ContactSection';

export default function OfflinePage() {
  const navigateToLanding = () => {
    window.location.hash = '';
  };

  return (
    <div className="min-h-screen bg-brand-cream text-brand-dark font-sans relative flex flex-col justify-between">
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

      {/* Hero Section */}
      <HeroSection />

      {/* Section 01 -- DESIGN IDENTITY */}
      <IdentitySection />

      {/* Section 02 -- JOURNEY */}
      <JourneySection />

      {/* Section 03 -- PROJECTS */}
      <ProjectsSection />

      {/* Section 04 -- CONTACT */}
      <ContactSection />
    </div>
  );
}
