import { render, screen, fireEvent } from '@testing-library/react';
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

    // Check project completed badge details
    expect(screen.getAllByText('COMPLETED')[0]).toBeInTheDocument();
    expect(screen.getAllByText('MVC')[0]).toBeInTheDocument();

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
    expect(screen.getByText('LIVE')).toBeInTheDocument();
    expect(screen.getByText('Decoupled Architecture')).toBeInTheDocument();

    // Check description text
    expect(
      screen.getByText(/Decoupled full-stack rebuild of the adventure game/i)
    ).toBeInTheDocument();

    // Check specific new tech tag badges
    expect(screen.getAllByText('TYPESCRIPT')[0]).toBeInTheDocument();
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

  it('renders reactivity project details inside project card', () => {
    render(<OnlineProjectsSection />);

    // Check project title
    expect(screen.getByText('REACTIVITY')).toBeInTheDocument();

    // Check project in progress badge details
    expect(screen.getByText('IN PROGRESS')).toBeInTheDocument();
    expect(screen.getByText('React & TypeScript')).toBeInTheDocument();

    // Check description text
    expect(
      screen.getByText(/A handmade habit tracker built with React, TypeScript, and Vite/i)
    ).toBeInTheDocument();

    // Check tech tag badges
    expect(screen.getAllByText('REACT')[1]).toBeInTheDocument();
    expect(screen.getAllByText('TYPESCRIPT')[1]).toBeInTheDocument();
    expect(screen.getAllByText('TAILWIND CSS')[0]).toBeInTheDocument();
    expect(screen.getByText('VITE')).toBeInTheDocument();

    // Check Github anchor button
    const githubLink = screen.getAllByRole('link', { name: 'GITHUB' })[1];
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/clara-cdp/Reactivity');
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
    expect(screen.getAllByText('MVC')[1]).toBeInTheDocument();
    expect(screen.getAllByText('TAILWIND CSS')[1]).toBeInTheDocument();
    expect(screen.getByText('MYSQL')).toBeInTheDocument();
    expect(screen.getByText('JSON')).toBeInTheDocument();

    // Check Github anchor button
    const githubLink = screen.getAllByRole('link', { name: 'GITHUB' })[2];
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

  it('renders match up project details inside project card with portrait styling bounds', () => {
    render(<OnlineProjectsSection />);

    // Check project title
    expect(screen.getByText('MATCH UP!')).toBeInTheDocument();

    // Check project completed badge details
    expect(screen.getAllByText('COMPLETED')[2]).toBeInTheDocument();
    expect(screen.getByText('Vanilla JS & CSS')).toBeInTheDocument();

    // Check description text
    expect(
      screen.getByText(/Classic card matching memory game with dynamic theme decks/i)
    ).toBeInTheDocument();

    // Check tech tag badges
    expect(screen.getByText('HTML5')).toBeInTheDocument();
    expect(screen.getAllByText('CSS')[0]).toBeInTheDocument();
    expect(screen.getAllByText('TAILWIND CSS')[2]).toBeInTheDocument();
    expect(screen.getAllByText('JAVASCRIPT')[2]).toBeInTheDocument();

    // Check GITHUB link
    const githubLink = screen.getAllByRole('link', { name: 'GITHUB' })[3];
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/clara-cdp/MATCH-UP-GAME');

    // Check portrait display height constraints
    const image = screen.getByRole('img', { name: 'MATCH UP!' });
    expect(image).toBeInTheDocument();
    expect(image).toHaveClass('lg:max-h-[260px]');
  });

  it('applies 3D tilt and spotlight glow style updates on mouse move and reset on leave', () => {
    render(<OnlineProjectsSection />);

    const projectTitle = screen.getByText('A PAWS IN TIME');
    const cardContainer = projectTitle.closest('.relative.w-full');
    expect(cardContainer).toBeInTheDocument();

    // Mock bounding client rect for JSDOM
    cardContainer!.getBoundingClientRect = vi.fn().mockReturnValue({
      width: 400,
      height: 300,
      left: 0,
      top: 0,
      right: 400,
      bottom: 300,
    });

    // Trigger mouseMove with coordinate changes (offset from center)
    fireEvent.mouseMove(cardContainer!, {
      clientX: 300,
      clientY: 200,
    });

    // Check dynamic tilt transform is generated
    expect(cardContainer).toHaveStyle({
      transform: 'perspective(1000px) rotateX(1deg) rotateY(-1.5deg)',
    });

    // Trigger mouseLeave
    fireEvent.mouseLeave(cardContainer!);

    // Check dynamic tilt transform resets
    expect(cardContainer).toHaveStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
    });
  });

  it('renders a glowing teal dot before the section title number', () => {
    render(<OnlineProjectsSection />);
    const titleElement = screen.getByText(/03 - PROJECTS/i);
    const dot = titleElement.querySelector('.relative.flex');
    expect(dot).toBeInTheDocument();
    expect(dot?.querySelector('.animate-ping')).toHaveClass('bg-brand-cyan/70');
    expect(dot?.querySelector('.relative.inline-flex')).toHaveClass('bg-brand-cyan');
  });
});
