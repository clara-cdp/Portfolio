import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export function OnlineButton({ children, onClick, type = 'button' }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="border border-brand-cyan text-brand-cyan px-6 py-2.5 rounded-sm font-sans tracking-[0.2em] text-xs uppercase cursor-pointer transition-all duration-300 hover:bg-brand-cyan/10 hover:shadow-[0_0_15px_#17D0D0] active:scale-95"
    >
      {children}
    </button>
  );
}

export function OfflineButton({ children, onClick, type = 'button' }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="text-brand-dark px-6 py-2.5 rounded-sm font-sans tracking-[0.2em] text-xs uppercase cursor-pointer transition-all duration-300 hover:text-brand-light hover:bg-brand-dark/5 active:scale-98"
    >
      {children}
    </button>
  );
}
