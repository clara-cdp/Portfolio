import { useEffect, useState } from 'react';

export default function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const scrolled = window.scrollY;
        const currentProgress = (scrolled / totalHeight) * 100;
        setProgress(currentProgress);
        
        // Show progress bar only when scrolled down a bit
        setIsVisible(scrolled > 10);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount to set initial value
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-[3px] bg-brand-dark/40 z-[100] transition-opacity duration-300 pointer-events-none ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div
        className="h-full transition-all duration-75 ease-out"
        style={{ 
          width: `${progress}%`,
          backgroundColor: 'var(--online-scrollbar-color, #FFC556)',
          boxShadow: '0 0 10px var(--online-scrollbar-color, #FFC556), 0 0 5px var(--online-scrollbar-color, #FFC556)'
        }}
      />
    </div>
  );
}
