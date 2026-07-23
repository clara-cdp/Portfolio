import { useState, useEffect, useRef } from 'react';
import type { TouchEvent } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X, ZoomIn, ZoomOut, RefreshCw } from 'lucide-react';

interface ShowcaseGalleryProps {
  images: string[];
}

export default function ShowcaseGallery({ images }: ShowcaseGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [zoomScale, setZoomScale] = useState(1);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  
  // Touch/Swipe tracking for the main carousel
  const touchStart = useRef<number | null>(null);
  const touchEnd = useRef<number | null>(null);

  const total = images.length;

  // Handle slide change with wrapping
  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  // Keyboard navigation for carousel and lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isLightboxOpen) {
        if (e.key === 'Escape') {
          closeLightbox();
        } else if (e.key === 'ArrowLeft') {
          navigateLightbox(-1);
        } else if (e.key === 'ArrowRight') {
          navigateLightbox(1);
        }
      } else {
        if (e.key === 'ArrowLeft') {
          handlePrev();
        } else if (e.key === 'ArrowRight') {
          handleNext();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, activeIndex, total]);

  // Touch Swipe handlers
  const handleTouchStart = (e: TouchEvent) => {
    touchStart.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;
    const distance = touchStart.current - touchEnd.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }

    touchStart.current = null;
    touchEnd.current = null;
  };

  // 3D slide styling logic
  const getSlideStyles = (index: number) => {
    let diff = index - activeIndex;

    // Wrap around for infinite loop
    if (diff > total / 2) {
      diff -= total;
    } else if (diff < -total / 2) {
      diff += total;
    }



    // Active Center Slide
    if (diff === 0) {
      return {
        transform: 'translateX(0) scale(1) translateZ(50px) rotateY(0deg)',
        zIndex: 20,
        opacity: 1,
        cursor: 'zoom-in',
      };
    }

    // Right Side Slides
    if (diff === 1) {
      return {
        transform: 'translateX(32%) scale(0.82) translateZ(-100px) rotateY(-30deg)',
        zIndex: 10,
        opacity: 0.8,
        cursor: 'pointer',
      };
    }
    if (diff === 2) {
      return {
        transform: 'translateX(58%) scale(0.68) translateZ(-200px) rotateY(-40deg)',
        zIndex: 5,
        opacity: 0.4,
        cursor: 'pointer',
      };
    }

    // Left Side Slides
    if (diff === -1) {
      return {
        transform: 'translateX(-32%) scale(0.82) translateZ(-100px) rotateY(30deg)',
        zIndex: 10,
        opacity: 0.8,
        cursor: 'pointer',
      };
    }
    if (diff === -2) {
      return {
        transform: 'translateX(-58%) scale(0.68) translateZ(-200px) rotateY(40deg)',
        zIndex: 5,
        opacity: 0.4,
        cursor: 'pointer',
      };
    }

    // Hide slides outside the immediate range for a clean 3D look
    return {
      transform: diff > 0 
        ? 'translateX(90%) scale(0.5) translateZ(-300px) rotateY(-45deg)'
        : 'translateX(-90%) scale(0.5) translateZ(-300px) rotateY(45deg)',
      zIndex: 1,
      opacity: 0,
      pointerEvents: 'none' as const,
    };
  };

  // Lightbox zoom & pan logic
  const openLightbox = () => {
    setZoomScale(1);
    setPanOffset({ x: 0, y: 0 });
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    document.body.style.overflow = 'unset';
  };

  const navigateLightbox = (direction: number) => {
    setActiveIndex((prev) => (prev + direction + total) % total);
    setZoomScale(1);
    setPanOffset({ x: 0, y: 0 });
  };

  const handleZoomIn = () => {
    setZoomScale((prev) => Math.min(prev + 0.5, 4));
  };

  const handleZoomOut = () => {
    setZoomScale((prev) => {
      const nextScale = Math.max(prev - 0.5, 1);
      if (nextScale === 1) {
        setPanOffset({ x: 0, y: 0 });
      }
      return nextScale;
    });
  };

  const handleResetZoom = () => {
    setZoomScale(1);
    setPanOffset({ x: 0, y: 0 });
  };

  // Lightbox dragging/panning when zoomed in
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomScale <= 1) return;
    setIsDragging(true);
    dragStart.current = { x: e.clientX - panOffset.x, y: e.clientY - panOffset.y };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || zoomScale <= 1) return;
    const x = e.clientX - dragStart.current.x;
    const y = e.clientY - dragStart.current.y;
    
    // Simple bound constraint based on zoom
    const bound = (zoomScale - 1) * 200;
    setPanOffset({
      x: Math.max(-bound, Math.min(bound, x)),
      y: Math.max(-bound, Math.min(bound, y)),
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="w-full relative select-none">
      {/* Mobile View: Static list of full-width auto-height screenshots */}
      <div className="flex flex-col gap-6 md:hidden">
        {images.map((image, idx) => (
          <div
            key={idx}
            onClick={() => {
              setActiveIndex(idx);
              openLightbox();
            }}
            className="w-full overflow-hidden rounded-md border border-brand-cyan/15 bg-brand-dark cursor-pointer transition-all duration-300 hover:border-brand-cyan/40 hover:shadow-[0_0_15px_rgba(23,208,208,0.1)]"
          >
            <img
              src={image}
              alt={`Showcase frame ${idx + 1}`}
              className="w-full h-auto block select-none pointer-events-none"
            />
          </div>
        ))}
      </div>

      {/* Tablet & Desktop View: 3D Coverflow Carousel */}
      <div className="hidden md:block">
        {/* 3D Coverflow Container */}
        <div 
          className="relative h-[480px] lg:h-[620px] xl:h-[700px] w-full flex items-center justify-center overflow-hidden"
          style={{ perspective: '1200px' }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="relative w-full h-full flex items-center justify-center"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {images.map((image, idx) => {
              const isCenter = idx === activeIndex;
              const style = getSlideStyles(idx);
              
              return (
                <div
                  key={idx}
                  onClick={() => {
                    if (isCenter) {
                      openLightbox();
                    } else {
                      setActiveIndex(idx);
                    }
                  }}
                  className="absolute w-[80%] md:w-[70%] lg:w-[75%] max-w-[1100px] h-[85%] md:h-[90%] rounded-lg border-2 border-brand-cyan/20 bg-brand-dark/90 flex items-center justify-center p-2.5 sm:p-4 transition-all duration-500 ease-out shadow-2xl overflow-hidden group"
                  style={{
                    ...style,
                    boxShadow: isCenter ? '0 0 35px rgba(23, 208, 208, 0.25)' : 'none',
                    borderColor: isCenter ? 'var(--color-brand-cyan)' : 'rgba(23, 208, 208, 0.15)',
                  }}
                >
                  {/* Visual grid accent inside slide background */}
                  <div className="absolute inset-0 bg-[radial-gradient(#17d0d0_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.02] pointer-events-none" />
                  
                  <img
                    src={image}
                    alt={`Showcase frame ${idx + 1}`}
                    className="max-w-full max-h-full object-contain rounded-md select-none transition-transform duration-500 pointer-events-none"
                  />

                  {/* Cyberpunk Glitchy Maximize Button Overlay on Active Card */}
                  {isCenter && (
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-30">
                      <div className="bg-brand-dark/80 backdrop-blur-md border border-brand-cyan p-2 rounded-sm text-brand-cyan shadow-[0_0_10px_rgba(23,208,208,0.2)]">
                        <Maximize2 className="w-4 h-4 animate-pulse" />
                      </div>
                    </div>
                  )}
                  
                  {/* Overlay layer to dim non-center images */}
                  {!isCenter && (
                    <div className="absolute inset-0 bg-brand-dark/35 transition-opacity duration-300 hover:bg-brand-dark/10" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Controller Buttons & Indicator */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-6 sm:mt-10 px-4 sm:px-12 font-mono text-xs text-brand-cream/80">
          
          {/* Navigation Arrow Controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrev}
              className="w-10 h-10 flex items-center justify-center border border-brand-cyan/20 hover:border-brand-cyan text-brand-cream hover:text-brand-cyan bg-brand-cyan/5 rounded-sm transition-all duration-300 active:scale-95 cursor-pointer shadow-[0_0_10px_rgba(23,208,208,0.05)] hover:shadow-[0_0_15px_rgba(23,208,208,0.2)]"
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <span className="tracking-[0.25em] text-brand-cyan font-bold select-none">
              {String(activeIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>

            <button
              onClick={handleNext}
              className="w-10 h-10 flex items-center justify-center border border-brand-cyan/20 hover:border-brand-cyan text-brand-cream hover:text-brand-cyan bg-brand-cyan/5 rounded-sm transition-all duration-300 active:scale-95 cursor-pointer shadow-[0_0_10px_rgba(23,208,208,0.05)] hover:shadow-[0_0_15px_rgba(23,208,208,0.2)]"
              aria-label="Next screenshot"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Minimal Progress Bar */}
          <div className="hidden md:block flex-grow max-w-md mx-8 relative h-[2px] bg-white/5 rounded-full overflow-hidden">
            <div 
              className="absolute top-0 left-0 h-full bg-brand-cyan shadow-[0_0_8px_var(--color-brand-cyan)] transition-all duration-300"
              style={{ width: `${((activeIndex + 1) / total) * 100}%` }}
            />
          </div>

          {/* Action Help Tag */}
          <div className="text-brand-cream/40 text-[10px] tracking-wider uppercase select-none">
            Use &larr; &rarr; Keys or Swipe to Navigate
          </div>
        </div>
      </div>

      {/* Immersive Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col justify-between bg-brand-dark/95 backdrop-blur-md select-none animate-fadeIn">
          
          {/* Lightbox Header Controls */}
          <div className="w-full flex items-center justify-between p-4 sm:p-6 border-b border-white/5 font-mono">
            <div className="flex items-center gap-4 text-xs sm:text-sm text-brand-cream">
              <span className="text-brand-cyan font-bold tracking-[0.2em] uppercase">SYSTEM CAPTURE</span>
              <span className="text-brand-cream/60">({activeIndex + 1} of {total})</span>
            </div>

            {/* Toolbar Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleZoomOut}
                disabled={zoomScale <= 1}
                className="p-2 border border-white/10 hover:border-brand-cyan/50 text-brand-cream/80 hover:text-brand-cyan disabled:opacity-30 disabled:pointer-events-none rounded-sm transition-colors cursor-pointer"
                title="Zoom Out"
              >
                <ZoomOut className="w-4.5 h-4.5" />
              </button>

              <span className="text-xs text-brand-cream/60 min-w-[40px] text-center">
                {Math.round(zoomScale * 100)}%
              </span>

              <button
                onClick={handleZoomIn}
                disabled={zoomScale >= 4}
                className="p-2 border border-white/10 hover:border-brand-cyan/50 text-brand-cream/80 hover:text-brand-cyan disabled:opacity-30 disabled:pointer-events-none rounded-sm transition-colors cursor-pointer"
                title="Zoom In"
              >
                <ZoomIn className="w-4.5 h-4.5" />
              </button>

              {zoomScale > 1 && (
                <button
                  onClick={handleResetZoom}
                  className="p-2 border border-white/10 hover:border-brand-cyan/50 text-brand-cream/80 hover:text-brand-cyan rounded-sm transition-colors cursor-pointer"
                  title="Reset Zoom"
                >
                  <RefreshCw className="w-4.5 h-4.5" />
                </button>
              )}

              <div className="h-6 w-[1px] bg-white/10 mx-2" />

              <button
                onClick={closeLightbox}
                className="p-2 border border-brand-cyan/20 hover:border-brand-cyan bg-brand-cyan/5 text-brand-cyan hover:bg-brand-cyan hover:text-brand-dark rounded-sm transition-all duration-300 cursor-pointer shadow-[0_0_10px_rgba(23,208,208,0.15)]"
                title="Close Lightbox (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main Img Wrapper */}
          <div className="relative flex-grow flex items-center justify-center p-4 sm:p-8 overflow-hidden">
            
            {/* Sidebar Left Navigation */}
            <button
              onClick={() => navigateLightbox(-1)}
              className="absolute left-4 sm:left-8 z-30 p-3 sm:p-4 border border-white/5 hover:border-brand-cyan bg-brand-dark/80 hover:bg-brand-cyan/10 text-brand-cream hover:text-brand-cyan rounded-sm transition-all duration-300 cursor-pointer active:scale-95"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Lightbox Image Stage */}
            <div
              className={`relative max-w-full max-h-[70vh] sm:max-h-[75vh] flex items-center justify-center transition-all ${
                zoomScale > 1 ? 'cursor-grab active:cursor-grabbing' : ''
              }`}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              <img
                src={images[activeIndex]}
                alt={`Expanded screenshot ${activeIndex + 1}`}
                className="max-w-full max-h-[70vh] sm:max-h-[75vh] object-contain transition-transform duration-200 select-none pointer-events-none rounded-md border border-white/10"
                style={{
                  transform: `scale(${zoomScale}) translate(${panOffset.x / zoomScale}px, ${panOffset.y / zoomScale}px)`,
                }}
              />
            </div>

            {/* Sidebar Right Navigation */}
            <button
              onClick={() => navigateLightbox(1)}
              className="absolute right-4 sm:right-8 z-30 p-3 sm:p-4 border border-white/5 hover:border-brand-cyan bg-brand-dark/80 hover:bg-brand-cyan/10 text-brand-cream hover:text-brand-cyan rounded-sm transition-all duration-300 cursor-pointer active:scale-95"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Footer Thumbnail Navigation Strip */}
          <div className="w-full border-t border-white/5 p-4 bg-brand-dark/50 backdrop-blur-sm">
            <div className="max-w-4xl mx-auto flex items-center justify-center gap-2 overflow-x-auto py-2 px-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              {images.map((image, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveIndex(idx);
                    setZoomScale(1);
                    setPanOffset({ x: 0, y: 0 });
                  }}
                  className={`w-14 h-10 sm:w-20 sm:h-14 rounded-sm border overflow-hidden flex-shrink-0 transition-all duration-200 cursor-pointer ${
                    idx === activeIndex
                      ? 'border-brand-cyan scale-105 shadow-[0_0_12px_rgba(23,208,208,0.4)]'
                      : 'border-white/10 opacity-40 hover:opacity-80'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail index ${idx + 1}`}
                    className="w-full h-full object-cover select-none pointer-events-none"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
