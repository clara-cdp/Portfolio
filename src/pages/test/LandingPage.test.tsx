import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import LandingPage from '../LandingPage';

describe('LandingPage Component', () => {
  it('renders the landing page greeting and graphic design focus', () => {
    render(<LandingPage />);

    // Check greeting bits
    expect(screen.getByText(/^hi$/i)).toBeInTheDocument();
    expect(screen.getByText(/^i'm$/i)).toBeInTheDocument();
    expect(screen.getByText(/clara cerdà de palou/i)).toBeInTheDocument();

    // Check tagline
    expect(screen.getByText(/design • thinking • communication/i)).toBeInTheDocument();

    // Check headings
    expect(screen.getByRole('heading', { name: /graphic designer/i })).toBeInTheDocument();

    // Check button
    const button = screen.getByRole('button', { name: /enter portfolio/i });
    expect(button).toBeInTheDocument();
  });
});
