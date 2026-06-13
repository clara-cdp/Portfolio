import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import LandingPage from '../LandingPage';

describe('LandingPage Component', () => {
  it('renders the landing page sections and greetings', () => {
    render(<LandingPage />);

    // Check greeting
    expect(screen.getByText(/hi, i'm clara/i)).toBeInTheDocument();

    // Check taglines
    expect(screen.getByText(/building \| testing \| shipping/i)).toBeInTheDocument();
    expect(screen.getByText(/design \| thinking \| communication/i)).toBeInTheDocument();

    // Check headings
    expect(screen.getByRole('heading', { name: /online/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /offline/i })).toBeInTheDocument();

    // Check buttons
    const buttons = screen.getAllByRole('button', { name: /enter →/i });
    expect(buttons).toHaveLength(2);
  });
});
