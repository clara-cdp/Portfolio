import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import OnlineHeroSection from '../OnlineHeroSection';

describe('OnlineHeroSection Component', () => {
  beforeEach(() => {
    window.IntersectionObserver = vi.fn().mockImplementation(function () {
      return {
        observe: vi.fn(),
        unobserve: vi.fn(),
        disconnect: vi.fn(),
      };
    });
  });

  it('renders eyebrow text and headline without underlines', () => {
    render(<OnlineHeroSection />);

    // Check eyebrow
    expect(screen.getByText(/ONLINE — DEVELOPEMENT PORTFOLIO/i)).toBeInTheDocument();

    // Check headline lines
    const line1 = screen.getByText('Building');
    const line2 = screen.getByText('digital products');
    const line3 = screen.getByText('from the inside out.');

    expect(line1).toBeInTheDocument();
    expect(line2).toBeInTheDocument();
    expect(line3).toBeInTheDocument();

    // Verify digital products has gold text class and no bottom borders
    expect(line2).toHaveClass('text-brand-orange');
    expect(line1).not.toHaveClass('border-b-2');
    expect(line2).not.toHaveClass('border-b-2');
    expect(line3).not.toHaveClass('border-b-2');
  });

  it('renders all description paragraphs in cyan text', () => {
    render(<OnlineHeroSection />);

    expect(screen.getByText('Software is more than screens and layouts.')).toBeInTheDocument();
    expect(
      screen.getByText(
        /I'm a Frontend and Full Stack Developer with a background in design, building applications that combine usability, functionality, and clear communication\./i
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Explore the projects, systems, and technical decisions behind the work\./i)
    ).toBeInTheDocument();
  });
});
