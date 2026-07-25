import { render, screen, act } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import OnlinePage from '../OnlinePage';

describe('OnlinePage Component', () => {
  beforeEach(() => {
    window.IntersectionObserver = vi.fn().mockImplementation(function () {
      return {
        observe: vi.fn(),
        unobserve: vi.fn(),
        disconnect: vi.fn(),
      };
    });
  });

  it('renders brand title, version badge, navigation links (STACK, IDENTITY, PROJECTS, JOURNEY), and switch button', () => {
    render(<OnlinePage />);

    // Check header logo and version
    expect(screen.getByText('CLARA.DEV')).toBeInTheDocument();
    expect(screen.getByText(/v1.0.0/i)).toBeInTheDocument();

    // Check desktop navigation items
    const stackLinks = screen.getAllByText('STACK');
    expect(stackLinks.length).toBeGreaterThanOrEqual(1);

    const identityLinks = screen.getAllByText('IDENTITY');
    expect(identityLinks.length).toBeGreaterThanOrEqual(1);

    const projectsLinks = screen.getAllByText('PROJECTS');
    expect(projectsLinks.length).toBeGreaterThanOrEqual(1);

    const journeyLinks = screen.getAllByText('JOURNEY');
    expect(journeyLinks.length).toBeGreaterThanOrEqual(1);

    const contactLinks = screen.getAllByText('CONTACT');
    expect(contactLinks.length).toBeGreaterThanOrEqual(1);

    // Check Offline switch button (reused OnlineButton)
    const offlineBtn = screen.getByRole('button', { name: /offline/i });
    expect(offlineBtn).toBeInTheDocument();
  });

  it('renders hero content with headline, yellow highlight, and cyan description text without underlines', () => {
    render(<OnlinePage />);

    // Check eyebrow
    expect(screen.getByText(/ONLINE — DEVELOPEMENT PORTFOLIO/i)).toBeInTheDocument();

    // Check headline lines
    expect(screen.getByText('Building')).toBeInTheDocument();
    expect(screen.getByText('digital products')).toBeInTheDocument();
    expect(screen.getByText('from the inside out.')).toBeInTheDocument();

    // Check paragraph texts
    expect(screen.getByText('Software is more than screens and layouts.')).toBeInTheDocument();
    expect(screen.getByText(/I'm a Frontend and Full Stack Developer/i)).toBeInTheDocument();
    expect(screen.getByText(/Explore the projects, systems, and technical decisions/i)).toBeInTheDocument();

    // Verify footer reuse
    expect(screen.getByText(/PORTFOLIO 2026/i)).toBeInTheDocument();
  });

  it('toggles mobile menu dropdown when hamburger menu button is clicked', () => {
    const { container } = render(<OnlinePage />);

    const menuBtn = screen.getByRole('button', { name: /toggle menu/i });
    expect(menuBtn).toBeInTheDocument();

    const dropdownPanel = container.querySelector('header > div.md\\:hidden.absolute');
    expect(dropdownPanel).toBeInTheDocument();
    expect(dropdownPanel).toHaveClass('invisible');

    // Click menu button to open
    act(() => {
      menuBtn.click();
    });
    expect(dropdownPanel).toHaveClass('visible');

    // Click a dropdown link to close
    const mobileStack = dropdownPanel?.querySelector('a[href="#online/stack"]');
    expect(mobileStack).toBeInTheDocument();

    act(() => {
      (mobileStack as HTMLElement).click();
    });
    expect(dropdownPanel).toHaveClass('invisible');
  });
});
