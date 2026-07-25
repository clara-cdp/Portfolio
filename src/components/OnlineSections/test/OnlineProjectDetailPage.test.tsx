import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import OnlineProjectDetailPage from '../OnlineProjectDetailPage';

describe('OnlineProjectDetailPage Component', () => {
  beforeEach(() => {
    window.IntersectionObserver = vi.fn().mockImplementation(function () {
      return {
        observe: vi.fn(),
        unobserve: vi.fn(),
        disconnect: vi.fn(),
      };
    });
    // Mock window.scrollTo
    window.scrollTo = vi.fn();
  });

  it('renders standard case study headers, title, and descriptions for valid online project', () => {
    render(<OnlineProjectDetailPage projectId="a-paws-in-time" />);

    expect(screen.getByText(/03 - CASE STUDY >/i)).toBeInTheDocument();
    expect(screen.getAllByAltText('A PAWS IN TIME').length).toBeGreaterThan(0);
    expect(
      screen.getByText(/Retro-style point-and-click adventure game built with Laravel/i)
    ).toBeInTheDocument();
  });

  it('renders technical meta panel including project type, role, and deliverables', () => {
    render(<OnlineProjectDetailPage projectId="a-paws-in-time" />);

    expect(screen.getByText('Project Type')).toBeInTheDocument();
    expect(screen.getByText('Personal Project')).toBeInTheDocument();

    expect(screen.getByText('Role')).toBeInTheDocument();
    expect(screen.getByText('Lead Full Stack Developer & Game Designer')).toBeInTheDocument();

    expect(screen.getByText('Deliverables')).toBeInTheDocument();
    expect(
      screen.getByText('Time-travel gameplay state tracking (up to 5 saved games per user)')
    ).toBeInTheDocument();
  });

  it('renders case study narrative paragraphs', () => {
    render(<OnlineProjectDetailPage projectId="a-paws-in-time" />);

    expect(
      screen.getByText(/A Paws in Time begins in a world where reality has glitched/i)
    ).toBeInTheDocument();
  });

  it('renders showcase gallery capture images and heading', () => {
    render(<OnlineProjectDetailPage projectId="a-paws-in-time" />);

    expect(screen.getByText(/SHOWCASE GALLERY >/i)).toBeInTheDocument();
    // Check that gallery image is rendered
    const galleryImages = screen.getAllByRole('img');
    // Gallery images plus the main hero image
    expect(galleryImages.length).toBeGreaterThan(1);
  });

  it('renders case study headers, title, and descriptions for decoupled API & React project', () => {
    render(<OnlineProjectDetailPage projectId="a-paws-in-time-api" />);

    expect(screen.getByText(/03 - CASE STUDY >/i)).toBeInTheDocument();
    expect(screen.getByText('A PAWS IN TIME (API & REACT)')).toBeInTheDocument();
    expect(
      screen.getByText(/Decoupled full-stack rebuild of the adventure game/i)
    ).toBeInTheDocument();
  });

  it('renders technical specs for decoupled API & React project including multiple GITHUB links', () => {
    render(<OnlineProjectDetailPage projectId="a-paws-in-time-api" />);

    expect(screen.getByText('Project Type')).toBeInTheDocument();
    expect(screen.getByText('Personal Full-Stack Project')).toBeInTheDocument();

    expect(screen.getByText('Role')).toBeInTheDocument();
    expect(screen.getByText('Full-Stack Developer & Game/Interface Designer')).toBeInTheDocument();

    expect(screen.getByText('Deliverables')).toBeInTheDocument();
    expect(
      screen.getByText('React frontend with Laravel REST API architecture')
    ).toBeInTheDocument();

    // Check multiple GitHub links
    const apiLink = screen.getByRole('link', { name: /GITHUB \(API\) →/i });
    expect(apiLink).toBeInTheDocument();
    expect(apiLink).toHaveAttribute('href', 'https://github.com/clara-cdp/A-Paws-In-Time-API');

    const feLink = screen.getByRole('link', { name: /GITHUB \(FE\) →/i });
    expect(feLink).toBeInTheDocument();
    expect(feLink).toHaveAttribute('href', 'https://github.com/clara-cdp/A-Paws-In-Time-frontend');
  });

  it('renders narrative and gallery for decoupled API & React project', () => {
    render(<OnlineProjectDetailPage projectId="a-paws-in-time-api" />);

    // Check narrative
    expect(
      screen.getByText(/The project was rebuilt as two independent applications/i)
    ).toBeInTheDocument();

    // Check gallery
    expect(screen.getByText(/SHOWCASE GALLERY >/i)).toBeInTheDocument();
  });

  it('handles invalid project ID gracefully by showing fallback view', () => {
    render(<OnlineProjectDetailPage projectId="non-existent-id" />);

    expect(screen.getByText(/\[ PROJECT NOT FOUND \]/i)).toBeInTheDocument();
    const backBtn = screen.getByRole('link', { name: /Back to portfolio/i });
    expect(backBtn).toBeInTheDocument();
    expect(backBtn).toHaveAttribute('href', '#online');
  });
});
