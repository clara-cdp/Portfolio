import { useEffect, useRef, useState } from 'react';

interface RevealWrapperProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
}

export default function RevealWrapper({
  children,
  className = '',
  threshold = 0.05,
  rootMargin = '0px 0px -100px 0px'
}: RevealWrapperProps) {
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
          threshold,
          rootMargin,
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
  }, [threshold, rootMargin]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-[900ms] ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      } ${className}`}
    >
      {children}
    </div>
  );
}
