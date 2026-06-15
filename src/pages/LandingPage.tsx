import { OfflineButton } from '../components/Button/Button'

function LandingPage() {
  return (
    <main className="flex justify-start items-center h-screen w-screen bg-brand-cream text-brand-dark font-sans relative overflow-hidden">
      {/* Decorative subtle top line */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-brand-gold/40" />

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full px-8 md:px-16 lg:px-24 xl:px-32 gap-12 md:gap-24">
        {/* Left column: Intro text */}
        <div className="flex flex-col items-start text-left max-w-2xl">
          {/* Greeting: Appears in three bits */}
          <div className="flex flex-row items-center gap-2">
            <span className="text-brand-light text-xs md:text-sm font-semibold tracking-[0.25em] uppercase animate-fade-in">
              hi
            </span>
            <span className="text-brand-light text-xs md:text-sm font-semibold tracking-[0.25em] uppercase animate-fade-in delay-300">
              I'm
            </span>
          </div>
          <span className="text-brand-light text-xs md:text-sm font-semibold tracking-[0.25em] uppercase animate-fade-in delay-600 mt-1">
            Clara Cerdà de Palou
          </span>


          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-normal tracking-tight leading-[1.05] text-brand-dark uppercase select-none mt-4 animate-slide-up-slow delay-2200">
            Graphic <span className="block italic lowercase font-light">designer</span>
          </h1>

          <p className="text-[10px] tracking-[0.2em] uppercase text-brand-light/70 font-mono mt-6 select-none animate-slide-up-slow delay-600">
            Design &bull; Thinking &bull; Communication
          </p>
        </div>

        {/* Right column: Entry Button - slides up slower */}
        <div className="animate-slide-up-slow delay-3000 shrink-0 self-start md:self-auto">
          <OfflineButton onClick={() => window.location.hash = '#offline'}>
            Enter Portfolio &rarr;
          </OfflineButton>
        </div>
      </div>
    </main>
  )
}

export default LandingPage



