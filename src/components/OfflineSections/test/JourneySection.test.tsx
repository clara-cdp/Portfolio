import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import JourneySection, { journeyEntries } from '../JourneySection';

describe('JourneySection Component', () => {
  beforeEach(() => {
    // Mock IntersectionObserver
    window.IntersectionObserver = vi.fn().mockImplementation(() => ({
      observe: vi.fn(),
      unobserve: vi.fn(),
      disconnect: vi.fn(),
    }));
  });

  it('renders section eyebrow and header texts', () => {
    render(<JourneySection />);
    
    expect(screen.getByText('02 - JOURNEY')).toBeInTheDocument();
    expect(screen.getByText(/Not a straight line/i)).toBeInTheDocument();
    expect(screen.getByText(/better/i)).toBeInTheDocument();
  });

  it('renders all journey entries with correct years, titles, and descriptions', () => {
    render(<JourneySection />);
    
    journeyEntries.forEach((entry) => {
      expect(screen.getByText(entry.year)).toBeInTheDocument();
      expect(screen.getByText(entry.title)).toBeInTheDocument();
      expect(screen.getByText(entry.subtitle)).toBeInTheDocument();
      
      entry.description.forEach((desc) => {
        expect(screen.getByText(desc)).toBeInTheDocument();
      });
    });
  });
});
