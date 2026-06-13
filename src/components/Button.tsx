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
      className="border border-brand-cyan text-brand-cyan px-6 py-2.5 rounded-sm font-sans tracking-[0.2em] text-xs uppercase cursor-pointer"
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
      className="text-brand-dark px-6 py-2.5 rounded-sm font-sans tracking-[0.2em] text-xs uppercase cursor-pointer"
    >
      {children}
    </button>
  );
}
