import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import OnlineProjectsSection from '../OnlineProjectsSection';

describe('OnlineProjectsSection Component', () => {
  beforeEach(() => {
    window.IntersectionObserver = vi.fn().mockImplementation(function () {
      return {
        observe: vi.fn(),
        unobserve: vi.fn(),
        disconnect: vi.fn(),
      };
    });
  });

  it('renders section header, active status, and online projects wrapper', () => {
    render(<OnlineProjectsSection />);

    expect(screen.getByText(/03 - PROJECTS >/i)).toBeInTheDocument();
    expect(screen.getByText(/status Active/i)).toBeInTheDocument();
  });

  it('renders a paws in time project details inside project card', () => {
    render(<OnlineProjectsSection />);

    // Check project title
    expect(screen.getByText('A PAWS IN TIME')).toBeInTheDocument();

    // Check project live badge details
    expect(screen.getByText('LIVE')).toBeInTheDocument();
    expect(screen.getByText('2026 Active')).toBeInTheDocument();

    // Check description text
    expect(
      screen.getByText(/Retro-style point-and-click adventure game built with Laravel/i)
    ).toBeInTheDocument();

    // Check tech tag badges
    expect(screen.getAllByText('PHP')[0]).toBeInTheDocument();
    expect(screen.getAllByText('LARAVEL')[0]).toBeInTheDocument();
    expect(screen.getAllByText('LIVEWIRE')[0]).toBeInTheDocument();
    expect(screen.getAllByText('JAVASCRIPT')[0]).toBeInTheDocument();
    expect(screen.getAllByText('SQLITE')[0]).toBeInTheDocument();

    // Check Github anchor button
    const githubLink = screen.getByRole('link', { name: 'GITHUB' });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/clara-cdp/A-Paws-In-Time');
    expect(githubLink).toHaveAttribute('target', '_blank');

    // Check showcase image
    const image = screen.getByRole('img', { name: 'A PAWS IN TIME' });
    expect(image).toBeInTheDocument();
  });

  it('ensures tech badges have correct transition and hover classes', () => {
    render(<OnlineProjectsSection />);

    const badge = screen.getAllByText('PHP')[0];
    expect(badge).toHaveClass(
      'transition-all',
      'duration-200',
      'hover:border-brand-orange/50',
      'hover:text-brand-orange',
      'hover:bg-brand-orange/10'
    );
  });
});
