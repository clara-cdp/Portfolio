import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import ContactSection from '../ContactSection';

describe('ContactSection Component', () => {
  beforeEach(() => {
    // Mock IntersectionObserver
    window.IntersectionObserver = vi.fn().mockImplementation(() => ({
      observe: vi.fn(),
      unobserve: vi.fn(),
      disconnect: vi.fn(),
    }));
  });

  it('renders eyebrow and main title', () => {
    render(<ContactSection />);
    
    expect(screen.getByText('04 - CONTACT')).toBeInTheDocument();
    expect(screen.getByText(/Let's work/i)).toBeInTheDocument();
    expect(screen.getByText(/together/i)).toBeInTheDocument();
  });

  it('renders functional mailto and social link anchors', () => {
    render(<ContactSection />);
    
    // Check mailto link
    const emailLink = screen.getByRole('link', { name: 'clarianne.cdp@gmail.com' });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute('href', 'mailto:clarianne.cdp@gmail.com');
    
    // Check LinkedIn link
    const linkedinLink = screen.getByRole('link', { name: 'linkedin.com/in/clara-cdp' });
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com/in/clara-cdp');
    expect(linkedinLink).toHaveAttribute('target', '_blank');
    expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');
    
    // Check GitHub link
    const githubLink = screen.getByRole('link', { name: 'github.com/clara-cdp' });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/clara-cdp');
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders the copyright and made by credits in the footer area', () => {
    render(<ContactSection />);
    
    expect(screen.getByText('PORTFOLIO 2026')).toBeInTheDocument();
    expect(screen.getByText(/MADE WITH REACT \+ TAILWIND/i)).toBeInTheDocument();
    expect(screen.getByText(/by Clara Cerdà de Palou/i)).toBeInTheDocument();
  });
});
