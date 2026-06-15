import { useEffect, useState } from 'react';
import RevealWrapper from '../RevealWrapper/RevealWrapper';
import Footer from '../Footer/Footer';

// Import editorial assets
import dragonArt from '../../assets/editorial/dragon.png';
import okinawa1 from '../../assets/editorial/2_okinawa_magazine1.png';
import okinawa2 from '../../assets/editorial/2_okinawa-magazine-spread.png';
import okinawa3 from '../../assets/editorial/2_okinawa_posters.jpg';
import aw1 from '../../assets/editorial/AW_min1.jpg';
import aw2 from '../../assets/editorial/AW_min2.jpg';
import aw3 from '../../assets/editorial/AW_min3.jpg';
import aw4 from '../../assets/editorial/AW_min4.jpg';
import met1 from '../../assets/editorial/MET_1.jpg';
import met2 from '../../assets/editorial/Met_12.jpg';
import met3 from '../../assets/editorial/MET_4.jpg';
import met4 from '../../assets/editorial/Met_5c.jpg';
import frightFest from '../../assets/editorial/frightfest_mockup.png';
import japanBook1 from '../../assets/editorial/JB_.png';
import japanBook2 from '../../assets/editorial/JB_covers.png';
import comic1 from '../../assets/editorial/CMMockup2.png';
import comic2 from '../../assets/editorial/CM2.png';
import inventorPoster1 from '../../assets/editorial/invento-deco-bus-stop.jpg';
import inventorPoster2 from '../../assets/editorial/inventor-modern-2colored-posters.jpg';
import inventorRecord1 from '../../assets/editorial/inventorDecoRecordMockUp.png';
import inventorRecord2 from '../../assets/editorial/InventorRecordModMockUp.png';
import inventorRecord3 from '../../assets/editorial/z_CDinsert.png';

// Import traditional art assets
import artMelon from '../../assets/ART/melon.png';
import artBackpack from '../../assets/ART/motxilla_2.jpg';
import artPillows from '../../assets/ART/pillows.jpg';
import artBalletShoes from '../../assets/ART/puntes_ballet.jpg';
import artShoe from '../../assets/ART/shoe_1.png';
import artSkull1 from '../../assets/ART/skull_1.jpg';
import artSkull2 from '../../assets/ART/skull_4.jpg';
import artTapShoes from '../../assets/ART/tap_shoe.jpg';
import artSea from '../../assets/ART/watercolor_Sea.jpg';

export default function OfflineEditorialPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isDarkBg, setIsDarkBg] = useState(false);

  // Traditional Art Slides Data
  const traditionalArtSlides = [
    { img: artBalletShoes, title: "Ballet Shoes Study", medium: "Graphite pencil on paper" },
    { img: artMelon, title: "Melon Study", medium: "Charcoal on paper" },
    { img: artBackpack, title: "Backpack Study", medium: "Graphite on paper" },
    { img: artPillows, title: "Pillows Layout", medium: "Charcoal on paper" },
    { img: artShoe, title: "Shoe Sketch", medium: "Charcoal and white pastel on paper" },
    { img: artSkull1, title: "Skull Study I", medium: "Charcoal and white pastel on paper" },
    { img: artSkull2, title: "Skull Study II", medium: "Charcoal and white pastel on paper" },
    { img: artTapShoes, title: "Tap Shoes Sketch", medium: "Charcoal and white pastel on paper" },
    { img: artSea, title: "Sea Watercolor", medium: "Watercolor and ink on paper" },
  ];

  useEffect(() => {
    // Scroll to top when page is mounted
    window.scrollTo({ top: 0 });

    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Keyboard navigation for traditional art slideshow
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (window.location.hash !== '#offline/editorial') return;
      if (e.key === 'ArrowLeft') {
        setActiveSlide(prev => (prev === 0 ? traditionalArtSlides.length - 1 : prev - 1));
      } else if (e.key === 'ArrowRight') {
        setActiveSlide(prev => (prev === traditionalArtSlides.length - 1 ? 0 : prev + 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [traditionalArtSlides.length]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'intro',
        'met',
        'alice',
        'company',
        'japan-book',
        'okinawa',
        'fright-fest',
        'inventor',
        'cm',
        'dragon',
        'slideshow'
      ];
      const darkSections = ['alice', 'japan-book', 'fright-fest', 'dragon'];
      let currentDark = false;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom >= 0) {
            if (darkSections.includes(id)) {
              currentDark = true;
            }
          }
        }
      }
      setIsDarkBg(currentDark);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMounted]);

  const useLightText = isDarkBg;

  const nextSlide = () => {
    setActiveSlide(prev => (prev === traditionalArtSlides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide(prev => (prev === 0 ? traditionalArtSlides.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen bg-brand-cream text-brand-dark font-sans relative overflow-x-hidden flex flex-col justify-between">
      {/* Navigation Header */}
      <header className="w-full flex justify-between items-center py-6 px-8 md:px-16 lg:px-24 fixed top-0 left-0 z-50 bg-transparent transition-all duration-300">
        <a
          href="#"
          className={`font-sans text-[10px] tracking-[0.25em] font-bold uppercase select-none cursor-pointer transition-colors duration-300 ${
            useLightText ? 'text-brand-cream/80 hover:text-brand-cream' : 'text-brand-dark/70 hover:text-brand-dark'
          }`}
        >
          <span className="md:hidden">CLAR CDP</span>
          <span className="hidden md:inline">CLARA CERDÀ DE PALOU</span>
        </a>

        {/* Back Link */}
        <a
          href="#projects"
          className={`font-sans text-[10px] tracking-[0.25em] font-bold uppercase transition-colors duration-300 cursor-pointer inline-flex items-center gap-1.5 ${
            useLightText ? 'text-brand-cream/80 hover:text-brand-cream' : 'text-brand-dark/70 hover:text-brand-dark'
          }`}
        >
          &larr; Back to portfolio
        </a>
      </header>

      {/* Main Content Area */}
      <main
        className={`w-full flex flex-col transition-all duration-[800ms] ease-out transform ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
      >
        {/* ========================================================================= */}
        {/* SUB SECTION ONE: SMALL EDITORIAL PROJECTS                                 */}
        {/* ========================================================================= */}

        {/* Title & Intro Block (Light background) */}
        <section id="intro" className="w-full bg-brand-cream text-brand-dark pt-32 pb-12">
          <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
            <div className="max-w-3xl mt-12 mb-8">
              <span className="text-brand-light text-xs font-mono font-semibold tracking-[0.25em] uppercase mb-4 block animate-pulse">
                BONUS TRACK
              </span>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-normal tracking-tight leading-[1.05] text-brand-dark mb-6">
                Small Editorial <span className="block italic">Projects</span>
              </h1>
              <p className="text-brand-light text-sm sm:text-base leading-relaxed tracking-wide font-sans max-w-xl">
                A collection of smaller design experiments, quick design challenges, book cover explorations, and print layout mockups.
              </p>
            </div>
          </div>
        </section>

        {/* 1. Met (Light background) */}
        <section id="met" className="w-full bg-brand-cream text-brand-dark py-16 md:py-24 border-b border-brand-dark/5">
          <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
            <div className="grid grid-cols-12 gap-8 lg:gap-16 items-center">
              <div className="col-span-12 lg:col-span-7 grid grid-cols-2 gap-4">
                {[met1, met2, met3, met4].map((img, idx) => (
                  <div key={idx} className="overflow-hidden bg-brand-dark/5 rounded-sm shadow-sm group">
                    <img
                      src={img}
                      alt={`MET Leaflet design layout mockup ${idx + 1}`}
                      className="w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.015]"
                    />
                  </div>
                ))}
              </div>
              <div className="col-span-12 lg:col-span-5 flex flex-col gap-4">
                <RevealWrapper>
                  <span className="text-brand-light text-[10px] tracking-[0.25em] font-mono font-semibold uppercase">
                    01 / RAPID COMPETITION ENTRY
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif text-brand-dark mt-1 mb-2">
                    MET Leaflets Design
                  </h2>
                  <p className="text-brand-light text-sm leading-relaxed tracking-wide font-sans mb-6">
                    A fast design competition entry for the Metropolitan Museum of Art promotion system at NCC. Showcases speed layout decisions, clean color pairing. Each leaflet was created under 30 minutes constraint.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[9px] tracking-wider uppercase font-semibold text-brand-dark/60 border border-brand-dark/20 px-2.5 py-1 rounded-sm">Leaflet</span>
                    <span className="text-[9px] tracking-wider uppercase font-semibold text-brand-dark/60 border border-brand-dark/20 px-2.5 py-1 rounded-sm">Print Layout</span>
                    <span className="text-[9px] tracking-wider uppercase font-semibold text-brand-dark/60 border border-brand-dark/20 px-2.5 py-1 rounded-sm">NCC Competition</span>
                  </div>
                </RevealWrapper>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Alice in Wonderland (Dark background) */}
        <section id="alice" className="w-full bg-brand-dark text-brand-cream py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
            <div className="flex flex-col gap-8">
              <RevealWrapper>
                <span className="text-brand-light text-[10px] tracking-[0.25em] font-mono font-semibold uppercase block text-center lg:text-left border-b border-brand-cream/10 pb-4">
                  02 / BOOK COVER SYSTEM: ALICE IN WONDERLAND
                </span>
              </RevealWrapper>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { img: aw1, num: 'Collection' },
                  { img: aw2, num: 'Alice in Wonderland' },
                  { img: aw3, num: 'Through the Looking Glass' },
                  { img: aw4, num: '  The Hunting of the Snark' }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col gap-3 group">
                    <div className="overflow-hidden bg-brand-cream/5 rounded-sm shadow-sm">
                      <img
                        src={item.img}
                        alt={`Alice in wonderland book cover mockup ${item.num}`}
                        className="w-full h-auto object-cover transition-transform duration-[600ms] hover:scale-[1.02]"
                      />
                    </div>
                    <span className="text-[10px] tracking-[0.2em] font-mono text-brand-gold uppercase text-center">
                      {item.num}
                    </span>
                  </div>
                ))}
              </div>
              <RevealWrapper className="max-w-2xl mx-auto text-center mt-4">
                <p className="text-brand-light text-sm leading-relaxed tracking-wide font-sans mb-6">
                  A series of minimalistic book cover proposals exploring layout density, cutomed made illustrations, typography and playful ideas inspired by Lewis Carroll books.
                </p>
              </RevealWrapper>
            </div>
          </div>
        </section>

        {/* 4. Company (Light background) */}
        <section id="company" className="w-full bg-brand-cream text-brand-dark py-20 md:py-28 border-b border-brand-dark/5">
          <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
            <div className="grid grid-cols-12 gap-8 lg:gap-16 items-center">
              <div className="col-span-12 lg:col-span-5 flex flex-col gap-4">
                <RevealWrapper>
                  <span className="text-brand-light text-[10px] tracking-[0.25em] font-mono font-semibold uppercase">
                    04 / CD INSERT LAYOUT FOR MUSICAL SOUNDTRACK
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif text-brand-dark mt-1 mb-2">
                    Company
                  </h2>
                  <p className="text-brand-light text-sm leading-relaxed tracking-wide font-sans mb-6">
                    A custom-designed CD booklet insert layout for the musical soundtrack of Stephen Sondheim's *Company*. Focuses on elegant typographic grids, clean whitespace, and editorial flow.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[9px] tracking-wider uppercase font-semibold text-brand-dark/60 border border-brand-dark/20 px-2.5 py-1 rounded-sm">CD Insert</span>
                    <span className="text-[9px] tracking-wider uppercase font-semibold text-brand-dark/60 border border-brand-dark/20 px-2.5 py-1 rounded-sm">Typography</span>
                    <span className="text-[9px] tracking-wider uppercase font-semibold text-brand-dark/60 border border-brand-dark/20 px-2.5 py-1 rounded-sm">Editorial Layout</span>
                  </div>
                </RevealWrapper>
              </div>
              <div className="col-span-12 lg:col-span-7">
                <div className="overflow-hidden bg-brand-dark/5 rounded-sm shadow-sm w-full">
                  <img
                    src={inventorRecord3}
                    alt="Company CD insert layout for Sondheim musical soundtrack"
                    className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.01]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Japan Book (Dark background) */}
        <section id="japan-book" className="w-full bg-brand-dark text-brand-cream py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
            <div className="grid grid-cols-12 gap-8 lg:gap-16 items-center">
              {/* Left Column: Large picture (Layout details) */}
              <div className="col-span-12 lg:col-span-7">
                <div className="overflow-hidden bg-brand-cream/5 rounded-sm shadow-sm w-full">
                  <img
                    src={japanBook1}
                    alt="Japan Book design layout details"
                    className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.01]"
                  />
                </div>
              </div>

              {/* Right Column: Smaller top covers picture and cream text card */}
              <div className="col-span-12 lg:col-span-5 flex flex-col gap-6 justify-center">
                <div className="overflow-hidden bg-brand-cream/5 rounded-sm shadow-sm max-w-[260px] mx-auto lg:mx-0">
                  <img
                    src={japanBook2}
                    alt="Japan Book hand-bound covers"
                    className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.02]"
                  />
                </div>

                <RevealWrapper>
                  <span className="text-brand-gold text-[10px] tracking-[0.25em] font-mono font-semibold uppercase block mb-1">
                    05 / CRAFT & PRINT EDITORIAL
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif text-brand-gold mb-3">
                    Japan Book Layout
                  </h2>
                  <p className="text-brand-light text-xs sm:text-sm leading-relaxed tracking-wide font-sans mb-6">
                    A fully handcrafted photobook: concept, design, photo editing, printing, sewing, and binding. It brings together carefully curated photographs alongside scans of tickets,
                    stamps, and memorabilia, creating a rich visual narrative of the journey.
                    Meticulous color matching across images to achieve a cohesive and harmonious flow.
                    Printed on Shiro Eco 170 gsm paper, every detail was considered to enhance the tactile and visual experience.
                    (two limited-edition 40 × 50 cm prints, 346 pages).
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[9px] tracking-wider uppercase font-semibold text-brand-cream/60 border border-brand-cream/20 px-2.5 py-1 rounded-sm">Hand binding</span>
                    <span className="text-[9px] tracking-wider uppercase font-semibold text-brand-cream/60 border border-brand-cream/20 px-2.5 py-1 rounded-sm">Print Craft</span>
                    <span className="text-[9px] tracking-wider uppercase font-semibold text-brand-cream/60 border border-brand-cream/20 px-2.5 py-1 rounded-sm">Book Layout</span>
                  </div>
                </RevealWrapper>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Okinawa (Light background) */}
        <section id="okinawa" className="w-full bg-brand-cream text-brand-dark py-20 md:py-28 border-b border-brand-dark/5">
          <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
            <div className="grid grid-cols-12 gap-8 lg:gap-16">
              <div className="col-span-12 lg:col-span-5 flex flex-col justify-center gap-4 order-last lg:order-first">
                <RevealWrapper>
                  <span className="text-brand-light text-[10px] tracking-[0.25em] font-mono font-semibold uppercase">
                    06 / PHOTO EDITING & POSTER DESIGN
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif text-brand-dark mt-1 mb-2">
                    Okinawa Spreads & Posters
                  </h2>
                  <p className="text-brand-light text-sm leading-relaxed tracking-wide font-sans mb-6">
                    A visual research and editorial design study centered on Okinawa. Features, scanned collages and photographic editing combined with clean layouts, dual-color posters, and travel magazine layouts.</p>
                  <p className="text-brand-light text-sm leading-relaxed tracking-wide font-sans mb-6"> The work explores the contrast between Okinawa’s wartime history and its contemporary culture of tranquility and slow living.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[9px] tracking-wider uppercase font-semibold text-brand-dark/60 border border-brand-dark/20 px-2.5 py-1 rounded-sm">Photo Editing</span>
                    <span className="text-[9px] tracking-wider uppercase font-semibold text-brand-dark/60 border border-brand-dark/20 px-2.5 py-1 rounded-sm">Magazine</span>
                    <span className="text-[9px] tracking-wider uppercase font-semibold text-brand-dark/60 border border-brand-dark/20 px-2.5 py-1 rounded-sm">Poster</span>
                  </div>
                </RevealWrapper>
              </div>
              <div className="col-span-12 lg:col-span-7 flex flex-col gap-6">
                <div className="grid grid-cols-12 gap-4 items-start">
                  <div className="col-span-5 overflow-hidden bg-brand-dark/5 rounded-sm shadow-sm">
                    <img
                      src={okinawa1}
                      alt="Okinawa magazine cover mockup"
                      className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.02]"
                    />
                  </div>
                  <div className="col-span-7 overflow-hidden bg-brand-dark/5 rounded-sm shadow-sm">
                    <img
                      src={okinawa2}
                      alt="Okinawa magazine spread layout"
                      className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.02]"
                    />
                  </div>
                </div>
                <div className="w-full overflow-hidden bg-brand-dark/5 rounded-sm shadow-sm">
                  <img
                    src={okinawa3}
                    alt="Okinawa poster collection"
                    className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.005]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Fright Fest (Dark background) */}
        <section id="fright-fest" className="w-full bg-brand-dark text-brand-cream py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
            <div className="grid grid-cols-12 gap-8 lg:gap-16 items-center">
              <div className="col-span-12 lg:col-span-5 flex flex-col gap-4">
                <RevealWrapper>
                  <span className="text-brand-gold text-[10px] tracking-[0.25em] font-mono font-semibold uppercase">
                    07 / IDENTITY & POSTER
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif text-brand-gold mt-1 mb-2">
                    Fright Fest Posters
                  </h2>
                  <p className="text-brand-light text-sm leading-relaxed tracking-wide font-sans mb-6">
                    An impactful poster and identity proposal for Fright Fest. Showcases bold graphic design layouts utilizing custom contrast filters, typography, and clean text layout systems.Inspired by cult classic films.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[9px] tracking-wider uppercase font-semibold text-brand-cream/60 border border-brand-cream/20 px-2.5 py-1 rounded-sm">Poster</span>
                    <span className="text-[9px] tracking-wider uppercase font-semibold text-brand-cream/60 border border-brand-cream/20 px-2.5 py-1 rounded-sm">Identity</span>
                    <span className="text-[9px] tracking-wider uppercase font-semibold text-brand-cream/60 border border-brand-cream/20 px-2.5 py-1 rounded-sm">Festival</span>
                  </div>
                </RevealWrapper>
              </div>
              <div className="col-span-12 lg:col-span-7 overflow-hidden bg-brand-cream/5 rounded-sm shadow-sm group">
                <img
                  src={frightFest}
                  alt="Fright Fest posters mockup"
                  className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.01]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 3. The Inventor (Light background) */}
        <section id="inventor" className="w-full bg-brand-cream text-brand-dark py-20 md:py-28 border-b border-brand-dark/5">
          <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
            <div className="flex flex-col gap-8">
              <RevealWrapper>
                <span className="text-brand-light text-[10px] tracking-[0.25em] font-mono font-semibold uppercase block text-center lg:text-left border-b border-brand-dark/10 pb-4">
                  03 / DIGITAL ILLUSTRATION: MOVIE POSTERS & VINYL COVER SLEEVES.
                </span>
              </RevealWrapper>
              <div className="grid grid-cols-12 gap-6 items-stretch">
                <div className="col-span-12 lg:col-span-5 flex flex-col gap-4 justify-between">
                  <RevealWrapper>
                    <h3 className="text-2xl sm:text-3xl font-serif text-brand-dark mb-2">
                      The Inventor
                    </h3>
                    <p className="text-brand-light text-sm leading-relaxed tracking-wide font-sans mb-6">
                      A complete movie poster and soundtrack vinyl design project exploring two contrasting visual directions: a bold contemporary dual-tone style and an Art Deco-inspired interpretation. Combining digital illustration in Adobe Illustrator with photographic editing and compositing in Photoshop, the work extends across poster series, outdoor advertising applications, vinyl packaging, custom record graphics, and booklet inserts.                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-[9px] tracking-wider uppercase font-semibold text-brand-dark/60 border border-brand-dark/20 px-2.5 py-1 rounded-sm">Art Direction</span>
                      <span className="text-[9px] tracking-wider uppercase font-semibold text-brand-dark/60 border border-brand-dark/20 px-2.5 py-1 rounded-sm">Vinyl Sleeve</span>
                      <span className="text-[9px] tracking-wider uppercase font-semibold text-brand-dark/60 border border-brand-dark/20 px-2.5 py-1 rounded-sm">Soundtrack</span>
                    </div>
                  </RevealWrapper>

                  <div className="overflow-hidden bg-brand-dark/5 rounded-sm shadow-sm w-full">
                    <img
                      src={inventorPoster2}
                      alt="The Inventor duo colored posters layout"
                      className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.025]"
                    />
                  </div>
                </div>

                <div className="col-span-12 lg:col-span-7 flex flex-col gap-6">
                  <div className="overflow-hidden bg-brand-dark/5 rounded-sm shadow-sm w-full">
                    <img
                      src={inventorPoster1}
                      alt="The Inventor bus stop movie poster mockup"
                      className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.01]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="overflow-hidden bg-brand-dark/5 rounded-sm shadow-sm">
                      <img
                        src={inventorRecord2}
                        alt="The Inventor disc record mockup type A"
                        className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.02]"
                      />
                    </div>
                    <div className="overflow-hidden bg-brand-dark/5 rounded-sm shadow-sm">
                      <img
                        src={inventorRecord1}
                        alt="The Inventor disc record mockup type B"
                        className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.02]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. CM (Light background) */}
        <section id="cm" className="w-full bg-brand-cream text-brand-dark py-12 md:py-16 border-b border-brand-dark/5">
          <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
            <div className="grid grid-cols-12 gap-8 lg:gap-16 items-center">
              <div className="col-span-12 lg:col-span-7 flex flex-col gap-4 justify-center">
                <RevealWrapper>
                  <span className="text-brand-light text-[10px] tracking-[0.25em] font-mono font-semibold uppercase">
                    08 / ILLUSTRATIVE EDITORIAL
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif text-brand-dark mt-1 mb-2">
                    CM
                  </h2>
                  <p className="text-brand-light text-sm leading-relaxed tracking-wide font-sans mb-6">
                    CM is a comic book cover inspired by vintage comics. Features me as a Scenic Art student in NY.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[9px] tracking-wider uppercase font-semibold text-brand-dark/60 border border-brand-dark/20 px-2.5 py-1 rounded-sm">Comic Cover</span>
                    <span className="text-[9px] tracking-wider uppercase font-semibold text-brand-dark/60 border border-brand-dark/20 px-2.5 py-1 rounded-sm">Illustration</span>
                    <span className="text-[9px] tracking-wider uppercase font-semibold text-brand-dark/60 border border-brand-dark/20 px-2.5 py-1 rounded-sm">Scenic Art</span>
                  </div>
                </RevealWrapper>
              </div>

              <div className="col-span-12 lg:col-span-5 flex justify-center lg:justify-end">
                <div className="overflow-hidden bg-brand-dark/5 rounded-sm shadow-sm w-full max-w-[440px]">
                  <img
                    src={comic2}
                    alt="CM comic book print details"
                    className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.01]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Dragon (Dark background) */}
        <section id="dragon" className="w-full bg-brand-dark text-brand-cream py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
            <div className="grid grid-cols-12 gap-8 lg:gap-16 items-center">
              <div className="col-span-12 lg:col-span-5 flex justify-center lg:justify-start">
                <div className="overflow-hidden bg-brand-cream/5 rounded-sm shadow-sm w-full max-w-[440px]">
                  <img
                    src={dragonArt}
                    alt="Dragon digital illustration mockup"
                    className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.02]"
                  />
                </div>
              </div>

              <div className="col-span-12 lg:col-span-7 flex flex-col gap-4 justify-center">
                <RevealWrapper>
                  <span className="text-brand-gold text-[10px] tracking-[0.25em] font-mono font-semibold uppercase">
                    09 / DIGITAL ART
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif text-brand-gold mt-1 mb-2">
                    Dragon
                  </h2>
                  <p className="text-brand-light text-sm leading-relaxed tracking-wide font-sans mb-6">
                    Dragon is an exploration of digital and traditional drawing.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[9px] tracking-wider uppercase font-semibold text-brand-cream/60 border border-brand-cream/20 px-2.5 py-1 rounded-sm">Digital Drawing</span>
                    <span className="text-[9px] tracking-wider uppercase font-semibold text-brand-cream/60 border border-brand-cream/20 px-2.5 py-1 rounded-sm">Traditional Art</span>
                    <span className="text-[9px] tracking-wider uppercase font-semibold text-brand-cream/60 border border-brand-cream/20 px-2.5 py-1 rounded-sm">Concept</span>
                  </div>
                </RevealWrapper>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SUB SECTION TWO: SOME ART FOR THE ROAD                                    */}
        {/* ========================================================================= */}

        {/* Slideshow and Intro Block (Light background) */}
        <section id="slideshow" className="w-full bg-brand-cream text-brand-dark py-20 md:py-28 border-b border-brand-dark/5">
          <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">

            {/* Subsection Header */}
            <div className="max-w-3xl mb-12">
              <RevealWrapper>
                <span className="text-brand-light text-xs font-mono font-semibold tracking-[0.25em] uppercase mb-4 block">
                  02 / SUBSECTION
                </span>
                <h2 className="text-4xl sm:text-5xl font-serif font-normal tracking-tight text-brand-dark mb-4">
                  Some Art for <span className="italic">the Road</span>
                </h2>
                <p className="text-brand-light text-sm sm:text-base leading-relaxed tracking-wide font-sans max-w-xl">
                  A traditional gallery zone featuring pencil, charcoal, and watercolor sketches. Use the controls or arrow keys to browse through the selected works.
                </p>
              </RevealWrapper>
            </div>

            {/* Slideshow Display Container */}
            <div className="relative w-full aspect-[4/3] md:aspect-[16/10] max-h-[600px] bg-brand-dark/5 rounded-sm overflow-hidden flex items-center justify-center border border-brand-dark/5 shadow-inner">
              {traditionalArtSlides.map((slide, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 p-6 md:p-12 flex items-center justify-center transition-opacity duration-700 ease-in-out ${idx === activeSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                    }`}
                >
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className="max-w-full max-h-full object-contain select-none shadow-md bg-[#FAF9F6] p-4 border border-brand-dark/5 rounded-sm transition-transform duration-700"
                  />
                </div>
              ))}

              {/* Prev Button */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-brand-cream/80 hover:bg-brand-cream text-brand-dark p-3 rounded-full hover:scale-105 active:scale-95 transition-all duration-200 shadow-md border border-brand-dark/10 focus:outline-none cursor-pointer"
                aria-label="Previous Slide"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-brand-cream/80 hover:bg-brand-cream text-brand-dark p-3 rounded-full hover:scale-105 active:scale-95 transition-all duration-200 shadow-md border border-brand-dark/10 focus:outline-none cursor-pointer"
                aria-label="Next Slide"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Slide Metadata & Indicators */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-6 gap-4 font-sans border-t border-brand-dark/5 pt-4">
              <div>
                <h3 className="text-lg font-serif font-normal text-brand-dark leading-tight">
                  {traditionalArtSlides[activeSlide].title}
                </h3>
                <p className="text-brand-light text-xs mt-1">
                  {traditionalArtSlides[activeSlide].medium}
                </p>
              </div>

              <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end">
                {/* Index Counter */}
                <span className="font-mono text-xs tracking-wider text-brand-light">
                  {String(activeSlide + 1).padStart(2, '0')} / {String(traditionalArtSlides.length).padStart(2, '0')}
                </span>

                {/* Dash Indicators */}
                <div className="flex gap-1.5">
                  {traditionalArtSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveSlide(idx)}
                      className={`h-1 transition-all duration-300 rounded-full cursor-pointer ${idx === activeSlide ? 'w-6 bg-brand-dark' : 'w-1.5 bg-brand-dark/20 hover:bg-brand-dark/40'
                        }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* Footer Area (Dark Mode) */}
      <Footer variant="full-bleed" />
    </div>
  );
}
