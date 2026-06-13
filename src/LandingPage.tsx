import { OnlineButton, OfflineButton } from './components/Button'

function LandingPage() {
  return (
    <main className="flex flex-col md:flex-row h-screen w-screen overflow-hidden">
      {/* ON LINE Section */}
      <section className="flex-1 h-1/2 md:h-full bg-brand-dark text-white p-8 md:p-16 lg:p-24 flex flex-col justify-between border-b md:border-b-0 md:border-r border-brand-cyan/10 font-sans transition-all duration-700 ease-in-out hover:flex-[3]">
        <div>
          <p className="text-brand-orange text-xs md:text-sm font-semibold tracking-[0.25em] uppercase">
            Hi, I'm Clara
          </p>
        </div>

        <div className="flex flex-col justify-center my-auto">
          <p className="text-brand-light text-xs md:text-sm tracking-[0.2em] uppercase mb-4 md:mb-6 font-medium font-mono">
            Building | Testing | Shipping
          </p>
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-mono font-bold tracking-wide leading-none text-brand-cyan uppercase select-none">
            ON<br />LINE
          </h1>
        </div>

        <div className="mt-6">
          <OnlineButton>
            Enter &rarr;
          </OnlineButton>
        </div>
      </section>

      <section className="flex-1 h-1/2 md:h-full bg-brand-cream text-brand-dark p-8 md:p-16 lg:p-24 flex flex-col justify-between font-sans transition-all duration-700 ease-in-out hover:flex-[3]">
        <div className="invisible" aria-hidden="true">
          <p className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase">

          </p>
        </div>

        <div className="flex flex-col justify-center my-auto">
          <p className="text-brand-light text-xs md:text-sm tracking-[0.2em] uppercase mb-4 md:mb-6 font-medium font-mono">
            Design | Thinking | Communication
          </p>
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display-serif tracking-wide leading-none text-brand-dark uppercase select-none">
            OFF<br />LINE
          </h1>
        </div>

        <div className="mt-6">
          <OfflineButton>
            Enter &rarr;
          </OfflineButton>
        </div>
      </section>
    </main>
  )
}

export default LandingPage



