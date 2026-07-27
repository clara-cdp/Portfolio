import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import BonusSection from '../BonusSection';

describe('BonusSection Component', () => {
  beforeEach(() => {
    // Mock IntersectionObserver
    window.IntersectionObserver = vi.fn().mockImplementation(() => ({
      observe: vi.fn(),
      unobserve: vi.fn(),
      disconnect: vi.fn(),
    }));
  });

  it('renders section eyebrow and header texts', () => {
    render(<BonusSection />);
    
    expect(screen.getByText('04 - BONUS TRACK')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /small editorial projects/i })).toBeInTheDocument();
    expect(screen.getByText('Experiments in print and layout.')).toBeInTheDocument();
    expect(screen.getByText(/A curated archive of smaller editorial work/i)).toBeInTheDocument();
  });

  it('renders the gallery navigation links', () => {
    render(<BonusSection />);
    
    // Check explore the gallery text link
    const textLink = screen.getByRole('link', { name: /explore the gallery/i });
    expect(textLink).toBeInTheDocument();
    expect(textLink).toHaveAttribute('href', '#offline/editorial');

    // Check card stack link
    const stackLink = screen.getByRole('link', { name: /explore editorial gallery/i });
    expect(stackLink).toBeInTheDocument();
    expect(stackLink).toHaveAttribute('href', '#offline/editorial');
  });

  it('renders three layered project card preview images', () => {
    render(<BonusSection />);

    // Check for correct preview images
    const aliceImg = screen.getByAltText('Alice in Wonderland cover preview');
    const frightImg = screen.getByAltText('Fright Fest poster preview');
    const metImg = screen.getByAltText('Met leaflet design preview');

    expect(aliceImg).toBeInTheDocument();
    expect(frightImg).toBeInTheDocument();
    expect(metImg).toBeInTheDocument();
  });
});
