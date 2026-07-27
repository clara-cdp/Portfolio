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
    const githubLink = screen.getAllByRole('link', { name: 'GITHUB' })[0];
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/clara-cdp/A-Paws-In-Time');
    expect(githubLink).toHaveAttribute('target', '_blank');

    // Check showcase image
    const image = screen.getByRole('img', { name: 'A PAWS IN TIME' });
    expect(image).toBeInTheDocument();
  });

  it('renders decoupled api & react project details inside project card', () => {
    render(<OnlineProjectsSection />);

    // Check project title
    expect(screen.getByText('A PAWS IN TIME (API & REACT)')).toBeInTheDocument();

    // Check project status details
    expect(screen.getAllByText('COMPLETED')[0]).toBeInTheDocument();
    expect(screen.getByText('Decoupled Architecture')).toBeInTheDocument();

    // Check description text
    expect(
      screen.getByText(/Decoupled full-stack rebuild of the adventure game/i)
    ).toBeInTheDocument();

    // Check specific new tech tag badges
    expect(screen.getByText('TYPESCRIPT')).toBeInTheDocument();
    expect(screen.getByText('REST API')).toBeInTheDocument();
    expect(screen.getByText('OAUTH2')).toBeInTheDocument();
    expect(screen.getByText('SPATIE')).toBeInTheDocument();

    // Verify CASE STUDY button is rendered for this project card
    const caseStudyLink = screen.getAllByRole('link', { name: 'CASE STUDY' })[1];
    expect(caseStudyLink).toBeInTheDocument();
    expect(caseStudyLink).toHaveAttribute('href', '#online/projects/a-paws-in-time-api');

    // Check both GITHUB repos exist
    const apiLink = screen.getByRole('link', { name: 'GITHUB (API)' });
    expect(apiLink).toBeInTheDocument();
    expect(apiLink).toHaveAttribute('href', 'https://github.com/clara-cdp/A-Paws-In-Time-API');

    const feLink = screen.getByRole('link', { name: 'GITHUB (FE)' });
    expect(feLink).toBeInTheDocument();
    expect(feLink).toHaveAttribute('href', 'https://github.com/clara-cdp/A-Paws-In-Time-frontend');
  });

  it('renders taskomania project details inside project card', () => {
    render(<OnlineProjectsSection />);

    // Check project title
    expect(screen.getByText('TASKOMANIA')).toBeInTheDocument();

    // Check project completed badge details
    expect(screen.getAllByText('COMPLETED')[1]).toBeInTheDocument();
    expect(screen.getByText('Custom MVC Framework')).toBeInTheDocument();

    // Check description text
    expect(
      screen.getByText(/Task management application built using a custom PHP MVC Framework/i)
    ).toBeInTheDocument();

    // Check tech tag badges
    expect(screen.getAllByText('PHP')[2]).toBeInTheDocument();
    expect(screen.getByText('MVC')).toBeInTheDocument();
    expect(screen.getAllByText('TAILWIND CSS')[0]).toBeInTheDocument();
    expect(screen.getByText('MYSQL')).toBeInTheDocument();
    expect(screen.getByText('JSON')).toBeInTheDocument();

    // Check Github anchor button
    const githubLink = screen.getAllByRole('link', { name: 'GITHUB' })[1];
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/clara-cdp/Task-O-mania');
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
