import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import Footer from '../Footer';

describe('Footer Component', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders default full-bleed variant with copyright content', () => {
    render(<Footer variant="full-bleed" />);
    expect(screen.getByText('PORTFOLIO 2026')).toBeInTheDocument();
    expect(screen.getByText(/MADE WITH REACT \+ TAILWIND/i)).toBeInTheDocument();
    expect(screen.getByText(/Clara Cerdà de Palou/i)).toBeInTheDocument();
  });

  it('renders nested variant', () => {
    const { container } = render(<Footer variant="nested" />);
    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass('border-t', 'border-brand-cream/10');
  });

  it('renders online variant with eyebrow, title, and contact links', () => {
    render(<Footer variant="online" />);
    expect(screen.getByText('05 - CONTACT ›')).toBeInTheDocument();
    expect(screen.getByText('status Active')).toBeInTheDocument();
    expect(screen.getByText(/Let's/i)).toBeInTheDocument();
    expect(screen.getByText(/build/i)).toBeInTheDocument();
    
    const emailLink = screen.getByRole('link', { name: /clarianne.cdp@gmail.com/i });
    const linkedinLink = screen.getByRole('link', { name: /linkedin.com\/in\/clara-cdp/i });
    const githubLink = screen.getByRole('link', { name: /github.com\/clara-cdp/i });

    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute('href', 'mailto:clarianne.cdp@gmail.com');
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com/in/clara-cdp');
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/clara-cdp');
  });

  it('triggers text scramble on hover and resolves text on leave', () => {
    render(<Footer variant="online" />);
    const emailLink = screen.getByRole('link', { name: /clarianne.cdp@gmail.com/i });

    // Hover
    act(() => {
      fireEvent.mouseEnter(emailLink);
    });
    
    // Advance timers to trigger the scramble interval
    act(() => {
      vi.advanceTimersByTime(50);
    });
    
    // The text should contain some scrambled characters (different from original)
    expect(emailLink.textContent).not.toBe('clarianne.cdp@gmail.com');

    // Advance timers completely to let the scramble resolve
    act(() => {
      vi.advanceTimersByTime(2000);
    });
    expect(emailLink.textContent).toBe('clarianne.cdp@gmail.com');

    // Hover again and leave immediately
    act(() => {
      fireEvent.mouseEnter(emailLink);
    });
    act(() => {
      vi.advanceTimersByTime(50);
    });
    expect(emailLink.textContent).not.toBe('clarianne.cdp@gmail.com');

    act(() => {
      fireEvent.mouseLeave(emailLink);
    });
    expect(emailLink.textContent).toBe('clarianne.cdp@gmail.com');
  });
});
