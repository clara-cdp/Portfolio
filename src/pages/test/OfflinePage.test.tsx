import { render, screen, act } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import OfflinePage from '../OfflinePage';

describe('OfflinePage Component', () => {
  beforeEach(() => {
    // Mock IntersectionObserver to avoid ReferenceError in test environment
    window.IntersectionObserver = vi.fn().mockImplementation(function () {
      return {
        observe: vi.fn(),
        unobserve: vi.fn(),
        disconnect: vi.fn(),
      };
    });
  });

  it('renders the offline page and its hero content', () => {
    render(<OfflinePage />);

    // Check main title
    expect(screen.getByText('Making')).toBeInTheDocument();
    expect(screen.getByText('ideas')).toBeInTheDocument();
    expect(screen.getByText('visible')).toBeInTheDocument();

    // Check eyebrow
    expect(screen.getByText(/offline - design portfolio/i)).toBeInTheDocument();

    // Check details
    expect(screen.getByText(/branding, visual identity, editorial thinking/i)).toBeInTheDocument();
    expect(screen.getByText(/scroll to explore/i)).toBeInTheDocument();

    // Check Section 01 - Design Identity elements
    expect(screen.getByText('01 - DESIGN IDENTITY')).toBeInTheDocument();
    expect(screen.getByText('Design as')).toBeInTheDocument();
    expect(screen.getByText('communication')).toBeInTheDocument();
    expect(screen.getByText('Design is not decoration.')).toBeInTheDocument();
    expect(screen.getByText(/good design is not about making things look better/i)).toBeInTheDocument();
    expect(screen.getByText(/it is about making ideas easier to understand/i)).toBeInTheDocument();
    expect(screen.getByText(/whether creating a visual identity/i)).toBeInTheDocument();
    expect(screen.getByText(/every project begins with a message/i)).toBeInTheDocument();

    // Check Section 02 - Journey elements
    expect(screen.getByText('02 - JOURNEY')).toBeInTheDocument();
    expect(screen.getByText(/Not a straight line/i)).toBeInTheDocument();
    expect(screen.getByText('better')).toBeInTheDocument();

    // Check Journey Timeline entries
    expect(screen.getByText('2008')).toBeInTheDocument();
    expect(screen.getByText('Leadership & Operations')).toBeInTheDocument();
    expect(screen.getByText('how to work with people.')).toBeInTheDocument();
    expect(screen.getByText(/Before design became my profession/i)).toBeInTheDocument();

    expect(screen.getByText('2016')).toBeInTheDocument();
    expect(screen.getByText('Set Design & Production')).toBeInTheDocument();
    expect(screen.getByText('how to bring ideas into reality')).toBeInTheDocument();
    expect(screen.getByText(/Drawn by creative work/i)).toBeInTheDocument();

    expect(screen.getByText('2021')).toBeInTheDocument();
    expect(screen.getByText('Graphic Design & Visual Communication')).toBeInTheDocument();
    expect(screen.getByText('how to communicate')).toBeInTheDocument();
    expect(screen.getByText(/Design became my full-time focus/i)).toBeInTheDocument();

    expect(screen.getByText('TODAY')).toBeInTheDocument();
    expect(screen.getByText('Design & Development')).toBeInTheDocument();
    expect(screen.getByText('how to build experiences')).toBeInTheDocument();
    expect(screen.getByText(/The more I worked with brands/i)).toBeInTheDocument();
  });

  it('toggles visibility classes based on scroll intersection events', async () => {
    const callbacks: { callback: any; element: any }[] = [];

    window.IntersectionObserver = vi.fn().mockImplementation(function (callback) {
      return {
        observe: vi.fn().mockImplementation(function (element) {
          callbacks.push({ callback, element });
        }),
        unobserve: vi.fn(),
        disconnect: vi.fn(),
      };
    });

    render(<OfflinePage />);

    // Wait for the 100ms initialization timeout of the observer hooks
    await new Promise((resolve) => setTimeout(resolve, 150));

    // Locate the first entry container (2008)
    const entryContainer = screen.getByText('2008').closest('.grid-cols-12');
    expect(entryContainer).toHaveClass('opacity-0');
    expect(entryContainer).toHaveClass('translate-y-16');

    // Simulate elements entering the viewport (isIntersecting: true)
    act(() => {
      callbacks.forEach(({ callback, element }) => {
        callback([{ isIntersecting: true, target: element }]);
      });
    });

    // Verify it transitions to visible
    expect(entryContainer).toHaveClass('opacity-100');
    expect(entryContainer).toHaveClass('translate-y-0');

    // Simulate elements leaving the viewport (isIntersecting: false)
    act(() => {
      callbacks.forEach(({ callback, element }) => {
        callback([{ isIntersecting: false, target: element }]);
      });
    });

    // Verify it transitions back to hidden
    expect(entryContainer).toHaveClass('opacity-0');
    expect(entryContainer).toHaveClass('translate-y-16');
  });
});
