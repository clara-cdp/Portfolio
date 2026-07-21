import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import OnlineIdentitySection from '../OnlineIdentitySection';

describe('OnlineIdentitySection Component', () => {
  beforeEach(() => {
    window.IntersectionObserver = vi.fn().mockImplementation(function () {
      return {
        observe: vi.fn(),
        unobserve: vi.fn(),
        disconnect: vi.fn(),
      };
    });
  });

  it('renders section header tag and history check subtitle', () => {
    render(<OnlineIdentitySection />);

    expect(screen.getByText(/02 - IDENTITY >/i)).toBeInTheDocument();
    expect(screen.getByText(/History check/i)).toBeInTheDocument();
  });

  it('renders the hybrid Advantage headline with orange text highlight', () => {
    render(<OnlineIdentitySection />);

    const line1 = screen.getByText('The');
    const line2 = screen.getByText('hybrid');
    const line3 = screen.getByText('Advantage');

    expect(line1).toBeInTheDocument();
    expect(line2).toBeInTheDocument();
    expect(line3).toBeInTheDocument();

    // Verify hybrid has orange text highlight class
    expect(line2).toHaveClass('text-brand-orange');
    expect(line3).toHaveClass('whitespace-nowrap');
  });

  it('renders all updated career paragraphs and core philosophy statements', () => {
    render(<OnlineIdentitySection />);

    expect(
      screen.getByText(/My career began in visual communication, designing systems/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Learning software development gave me the ability to build those systems/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/This combination allows me to bridge design and development/i)
    ).toBeInTheDocument();

    expect(screen.getByText('Design gives products direction.')).toBeInTheDocument();
    expect(screen.getByText('Development gives them capability.')).toBeInTheDocument();
  });
});
