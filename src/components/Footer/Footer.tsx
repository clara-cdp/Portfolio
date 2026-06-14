interface FooterProps {
  variant?: 'full-bleed' | 'nested';
}

export default function Footer({ variant = 'full-bleed' }: FooterProps) {
  const content = (
    <div className="flex flex-col gap-2 text-[10px] tracking-[0.2em] font-mono text-brand-light uppercase select-none">
      <div>PORTFOLIO 2026</div>
      <div className="normal-case tracking-wider text-brand-light/80">
        <span className="uppercase tracking-[0.2em]">MADE WITH REACT + TAILWIND </span>
        by Clara Cerdà de Palou
      </div>
    </div>
  );

  if (variant === 'nested') {
    return (
      <div className="border-t border-brand-cream/10 pt-12 mt-auto w-full">
        {content}
      </div>
    );
  }

  return (
    <footer className="w-full bg-brand-dark border-t border-brand-cream/10 py-12 px-8 md:px-16 lg:px-24 mt-auto">
      <div className="max-w-7xl mx-auto">
        {content}
      </div>
    </footer>
  );
}
