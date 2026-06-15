import { render, screen } from '@testing-library/react';
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
});
