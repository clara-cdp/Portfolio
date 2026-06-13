import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import App from '../App';

describe('App Router', () => {
  beforeEach(() => {
    window.location.hash = '';
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
});
