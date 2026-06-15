import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import OfflineEditorialPage from '../components/OfflineSections/OfflineEditorialPage';

describe('OfflineEditorialPage Component', () => {
  beforeEach(() => {
    window.scrollTo = vi.fn();
    window.location.hash = '#offline/editorial';
    window.IntersectionObserver = vi.fn().mockImplementation(function () {
      return {
        observe: vi.fn(),
        unobserve: vi.fn(),
        disconnect: vi.fn(),
      };
    });
  });

  it('renders section headers and subsection headers', () => {
    render(<OfflineEditorialPage />);
    
    // Main Title
    expect(screen.getByRole('heading', { name: /small editorial/i })).toBeInTheDocument();
    
    // Subsection Header
    expect(screen.getByRole('heading', { name: /some art for/i })).toBeInTheDocument();
  });

  it('renders all small editorial projects', () => {
    render(<OfflineEditorialPage />);

    // MET Leaflets Design
    expect(screen.getByRole('heading', { name: /met leaflets design/i })).toBeInTheDocument();

    // Alice in Wonderland
    expect(screen.getByText(/02 \/ BOOK COVER SYSTEM: ALICE IN WONDERLAND/i)).toBeInTheDocument();

    // The Inventor
    expect(screen.getByRole('heading', { name: /the inventor/i })).toBeInTheDocument();

    // Company CD Insert
    expect(screen.getByRole('heading', { name: /^company$/i })).toBeInTheDocument();

    // Japan Book Layout
    expect(screen.getByRole('heading', { name: /japan book layout/i })).toBeInTheDocument();

    // Okinawa Spreads & Posters
    expect(screen.getByRole('heading', { name: /okinawa spreads & posters/i })).toBeInTheDocument();

    // Fright Fest Posters
    expect(screen.getByRole('heading', { name: /fright fest posters/i })).toBeInTheDocument();

    // CM
    expect(screen.getByRole('heading', { name: /^cm$/i })).toBeInTheDocument();

    // Dragon
    expect(screen.getByRole('heading', { name: /^dragon$/i })).toBeInTheDocument();
  });

  it('manages the traditional art slideshow correctly via controls', () => {
    render(<OfflineEditorialPage />);

    // Initial state: Ballet Shoes Study (first item in array now: artBalletShoes)
    expect(screen.getByRole('heading', { name: /ballet shoes study/i })).toBeInTheDocument();
    expect(screen.getByText(/01 \/ 09/i)).toBeInTheDocument();

    // Click next slide button
    const nextBtn = screen.getByLabelText(/next slide/i);
    fireEvent.click(nextBtn);

    // Second state: Melon Study (second item in array now: artMelon)
    expect(screen.getByRole('heading', { name: /melon study/i })).toBeInTheDocument();
    expect(screen.getByText(/02 \/ 09/i)).toBeInTheDocument();

    // Click previous slide button
    const prevBtn = screen.getByLabelText(/previous slide/i);
    fireEvent.click(prevBtn);

    // Wraps back to Ballet Shoes Study
    expect(screen.getByRole('heading', { name: /ballet shoes study/i })).toBeInTheDocument();
    expect(screen.getByText(/01 \/ 09/i)).toBeInTheDocument();

    // Click previous slide button again to wrap around to the end (9th slide: Sea Watercolor)
    fireEvent.click(prevBtn);
    expect(screen.getByRole('heading', { name: /sea watercolor/i })).toBeInTheDocument();
    expect(screen.getByText(/09 \/ 09/i)).toBeInTheDocument();
  });

  it('navigates the slideshow using keyboard arrow keys', () => {
    render(<OfflineEditorialPage />);

    // Initial state
    expect(screen.getByRole('heading', { name: /ballet shoes study/i })).toBeInTheDocument();

    // Press ArrowRight key
    fireEvent.keyDown(window, { key: 'ArrowRight' });
    expect(screen.getByRole('heading', { name: /melon study/i })).toBeInTheDocument();
    expect(screen.getByText(/02 \/ 09/i)).toBeInTheDocument();

    // Press ArrowLeft key
    fireEvent.keyDown(window, { key: 'ArrowLeft' });
    expect(screen.getByRole('heading', { name: /ballet shoes study/i })).toBeInTheDocument();
    expect(screen.getByText(/01 \/ 09/i)).toBeInTheDocument();
  });
});
