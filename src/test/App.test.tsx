import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import App from '../App';

describe('App Router', () => {
  beforeEach(() => {
    window.location.hash = '';
    window.IntersectionObserver = vi.fn().mockImplementation(function () {
      return {
        observe: vi.fn(),
        unobserve: vi.fn(),
        disconnect: vi.fn(),
      };
    });
  });

  afterEach(() => {
    window.location.hash = '';
  });

  it('renders the LandingPage by default', () => {
    render(<App />);
    expect(screen.getByText(/hi, i'm clara/i)).toBeInTheDocument();
  });

  it('renders the OfflinePage when hash is #offline', () => {
    window.location.hash = '#offline';
    render(<App />);
    expect(screen.getByText(/offline - design portfolio/i)).toBeInTheDocument();
  });

  it('renders the OfflinePage when hash is a sub-section of offline (e.g., #identity)', () => {
    window.location.hash = '#identity';
    render(<App />);
    expect(screen.getByText(/offline - design portfolio/i)).toBeInTheDocument();
  });

  it('renders the OfflineEditorialPage when hash is #offline/editorial', () => {
    window.location.hash = '#offline/editorial';
    render(<App />);
    expect(screen.getByRole('heading', { name: /small editorial/i })).toBeInTheDocument();
  });

  it('renders the OnlinePage when hash is #online', () => {
    window.location.hash = '#online';
    render(<App />);
    expect(screen.getByText(/online — developement portfolio/i)).toBeInTheDocument();
  });

  it('toggles online-mode class on document.documentElement and updates scroll property based on scroll events', () => {
    // Mock scroll metrics
    Object.defineProperty(document.documentElement, 'scrollHeight', {
      value: 1000,
      writable: true,
      configurable: true,
    });
    Object.defineProperty(window, 'innerHeight', {
      value: 500,
      writable: true,
      configurable: true,
    });
    Object.defineProperty(window, 'scrollY', {
      value: 0,
      writable: true,
      configurable: true,
    });

    // Mount App while hash is empty
    const { unmount } = render(<App />);
    expect(document.documentElement.classList.contains('online-mode')).toBe(false);
    expect(document.documentElement.style.getPropertyValue('--online-scrollbar-color')).toBe('');

    unmount();

    // Set hash to online and mount again
    window.location.hash = '#online';
    render(<App />);
    expect(document.documentElement.classList.contains('online-mode')).toBe(true);
    expect(document.documentElement.style.getPropertyValue('--online-scrollbar-color')).not.toBe('');

    // Simulate scrolling and verify dynamic color variable changes
    Object.defineProperty(window, 'scrollY', { value: 500, configurable: true });
    fireEvent.scroll(window);
    
    const colorMid = document.documentElement.style.getPropertyValue('--online-scrollbar-color');
    expect(colorMid).toBeDefined();
    expect(colorMid).toContain('rgb');
  });
});

