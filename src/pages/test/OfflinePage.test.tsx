import { render, screen, act } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import OfflinePage from '../OfflinePage';

describe('OfflinePage Component', () => {
  beforeEach(() => {
    // Mock IntersectionObserver to avoid ReferenceError in test environment
    window.IntersectionObserver = vi.fn().mockImplementation(function () {
      return {
        observe: vi.fn(),
        unobserve: vi.fn(),
        disconnect: vi.fn(),
      };
    });
  });

  it('renders the offline page and its hero content', () => {
    render(<OfflinePage />);

    // Check main title
    expect(screen.getByText('Making')).toBeInTheDocument();
    expect(screen.getByText('ideas')).toBeInTheDocument();
    expect(screen.getByText('visible')).toBeInTheDocument();

    // Check eyebrow
    expect(screen.getByText(/offline - design portfolio/i)).toBeInTheDocument();

    // Check details
    expect(screen.getByText(/branding, visual identity, editorial thinking/i)).toBeInTheDocument();
    expect(screen.getByText(/scroll to explore/i)).toBeInTheDocument();

    // Check Section 01 - Design Identity elements
    expect(screen.getByText('01 - DESIGN IDENTITY')).toBeInTheDocument();
    expect(screen.getByText('Design as')).toBeInTheDocument();
    expect(screen.getByText('communication')).toBeInTheDocument();
    expect(screen.getByText('Design is not decoration.')).toBeInTheDocument();
    expect(screen.getByText(/good design is not about making things look better/i)).toBeInTheDocument();
    expect(screen.getByText(/it is about making ideas easier to understand/i)).toBeInTheDocument();
    expect(screen.getByText(/whether creating a visual identity/i)).toBeInTheDocument();
    expect(screen.getByText(/every project begins with a message/i)).toBeInTheDocument();

    // Check Section 02 - Journey elements
    expect(screen.getByText('02 - JOURNEY')).toBeInTheDocument();
    expect(screen.getByText(/Not a straight line/i)).toBeInTheDocument();
    expect(screen.getByText('better')).toBeInTheDocument();

    // Check Journey Timeline entries
    expect(screen.getByText('2008')).toBeInTheDocument();
    expect(screen.getByText('Leadership & Operations')).toBeInTheDocument();
    expect(screen.getByText('how to work with people.')).toBeInTheDocument();
    expect(screen.getByText(/Before design became my profession/i)).toBeInTheDocument();

    expect(screen.getByText('2016')).toBeInTheDocument();
    expect(screen.getByText('Set Design & Production')).toBeInTheDocument();
    expect(screen.getByText('how to bring ideas into reality')).toBeInTheDocument();
    expect(screen.getByText(/Drawn by creative work/i)).toBeInTheDocument();

    expect(screen.getByText('2021')).toBeInTheDocument();
    expect(screen.getByText('Graphic Design & Visual Communication')).toBeInTheDocument();
    expect(screen.getByText('how to communicate')).toBeInTheDocument();
    expect(screen.getByText(/Design became my full-time focus/i)).toBeInTheDocument();

    expect(screen.getByText('TODAY')).toBeInTheDocument();
    expect(screen.getByText('Design & Development')).toBeInTheDocument();
    expect(screen.getByText('how to build experiences')).toBeInTheDocument();
    expect(screen.getByText(/The more I worked with brands/i)).toBeInTheDocument();

    // Check Section 03 - Projects elements
    expect(screen.getByText('03 - PROJECTS')).toBeInTheDocument();
    expect(screen.getByText(/Work as/i)).toBeInTheDocument();
    expect(screen.getByText(/evidence/i)).toBeInTheDocument();
    expect(screen.getByText(/Ideas are interesting/i)).toBeInTheDocument();
    expect(screen.getByText(/Finished work is more convincing/i)).toBeInTheDocument();

    // Check project cards rendering (1 card of KOMO, 2 cards of KOMO Brand System)
    expect(screen.getByText('KOMO')).toBeInTheDocument();
    expect(screen.getAllByText('KOMO Brand System')).toHaveLength(2);

    expect(screen.getByText('COFFEE HUSK PACKAGING CONCEPT')).toBeInTheDocument();
    expect(screen.getAllByText('BRAND IDENTITY - 2026')).toHaveLength(2);

    const detailLinks = screen.getAllByText(/see details/i);
    expect(detailLinks).toHaveLength(3);

    // Check Section 04 - Contact elements
    expect(screen.getByText('04 - CONTACT')).toBeInTheDocument();
    expect(screen.getByText(/Let's work/i)).toBeInTheDocument();
    expect(screen.getByText(/together/i)).toBeInTheDocument();

    // Check links
    const emailLink = screen.getByRole('link', { name: 'clarianne.cdp@gmail.com' });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute('href', 'mailto:clarianne.cdp@gmail.com');

    const linkedinLink = screen.getByRole('link', { name: 'linkedin.com/in/clara-cdp' });
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com/in/clara-cdp');
    expect(linkedinLink).toHaveAttribute('target', '_blank');

    const githubLink = screen.getByRole('link', { name: 'github.com/clara-cdp' });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/clara-cdp');
    expect(githubLink).toHaveAttribute('target', '_blank');

    // Check Footer details
    expect(screen.getByText('PORTFOLIO 2026')).toBeInTheDocument();
    expect(screen.getByText(/MADE WITH REACT \+ TAILWIND/i)).toBeInTheDocument();
    expect(screen.getByText(/by Clara Cerdà de Palou/i)).toBeInTheDocument();
  });

  it('toggles visibility classes based on scroll intersection events', async () => {
    const callbacks: { callback: any; element: any }[] = [];

    window.IntersectionObserver = vi.fn().mockImplementation(function (callback) {
      return {
        observe: vi.fn().mockImplementation(function (element) {
          callbacks.push({ callback, element });
        }),
        unobserve: vi.fn(),
        disconnect: vi.fn(),
      };
    });

    render(<OfflinePage />);

    // Wait for the 100ms initialization timeout of the observer hooks
    await new Promise((resolve) => setTimeout(resolve, 150));

    // Locate the first entry container (2008)
    const entryContainer = screen.getByText('2008').closest('.grid-cols-12');
    expect(entryContainer).toHaveClass('opacity-0');
    expect(entryContainer).toHaveClass('translate-y-16');

    // Simulate elements entering the viewport (isIntersecting: true)
    act(() => {
      callbacks.forEach(({ callback, element }) => {
        callback([{ isIntersecting: true, target: element }]);
      });
    });

    // Verify it transitions to visible
    expect(entryContainer).toHaveClass('opacity-100');
    expect(entryContainer).toHaveClass('translate-y-0');

    // Simulate elements leaving the viewport (isIntersecting: false)
    act(() => {
      callbacks.forEach(({ callback, element }) => {
        callback([{ isIntersecting: false, target: element }]);
      });
    });

    // Verify it transitions back to hidden
    expect(entryContainer).toHaveClass('opacity-0');
    expect(entryContainer).toHaveClass('translate-y-16');
  });

  it('toggles mobile menu dropdown when hamburger menu button is clicked and closes on link click', () => {
    const { container } = render(<OfflinePage />);
    
    const menuBtn = screen.getByRole('button', { name: /toggle menu/i });
    expect(menuBtn).toBeInTheDocument();
    
    const dropdownPanel = container.querySelector('.absolute');
    expect(dropdownPanel).toBeInTheDocument();
    expect(dropdownPanel).toHaveClass('invisible');
    expect(dropdownPanel).not.toHaveClass('visible');
    
    // Toggle to open
    act(() => {
      menuBtn.click();
    });
    expect(dropdownPanel).toHaveClass('visible');
    expect(dropdownPanel).not.toHaveClass('invisible');
    
    // Click dropdown link to close
    const dropdownLinks = dropdownPanel?.querySelectorAll('a');
    expect(dropdownLinks).toHaveLength(4);
    expect(dropdownLinks?.[0]).toHaveTextContent('Identity');
    
    act(() => {
      dropdownLinks?.[0].click();
    });
    expect(dropdownPanel).toHaveClass('invisible');
    expect(dropdownPanel).not.toHaveClass('visible');
  });

  it('toggles header text color between dark and light based on active section background', async () => {
    const callbacks: { callback: any; element: any }[] = [];

    window.IntersectionObserver = vi.fn().mockImplementation(function (callback) {
      return {
        observe: vi.fn().mockImplementation(function (element) {
          callbacks.push({ callback, element });
        }),
        unobserve: vi.fn(),
        disconnect: vi.fn(),
      };
    });

    render(<OfflinePage />);

    // Wait for observers initialization
    await new Promise((resolve) => setTimeout(resolve, 150));

    // Initially, header has dark text
    const headerTitle = screen.getByText('CLARA');
    expect(headerTitle).toHaveClass('text-brand-dark/70');
    expect(headerTitle).not.toHaveClass('text-brand-cream/80');

    // Find the observer corresponding to journey (dark section)
    const journeyObserver = callbacks.find(obs => obs.element.id === 'journey');
    expect(journeyObserver).toBeDefined();

    // Trigger intersection on journey (dark section)
    act(() => {
      journeyObserver?.callback([{ isIntersecting: true, target: journeyObserver.element }]);
    });

    // Header title should transition to light text
    expect(headerTitle).toHaveClass('text-brand-cream/80');
    expect(headerTitle).not.toHaveClass('text-brand-dark/70');

    // Trigger intersection on projects (light section)
    const projectsObserver = callbacks.find(obs => obs.element.id === 'projects');
    expect(projectsObserver).toBeDefined();
    
    act(() => {
      projectsObserver?.callback([{ isIntersecting: true, target: projectsObserver.element }]);
    });

    // Header title should transition back to dark text
    expect(headerTitle).toHaveClass('text-brand-dark/70');
    expect(headerTitle).not.toHaveClass('text-brand-cream/80');
  });

  it('does not apply overflow-x-hidden to the page container to prevent double scrollbars', () => {
    const { container } = render(<OfflinePage />);
    const pageWrapper = container.firstChild;
    expect(pageWrapper).toBeInTheDocument();
    expect(pageWrapper).not.toHaveClass('overflow-x-hidden');
    expect(pageWrapper).not.toHaveClass('overflow-y-auto');
    expect(pageWrapper).not.toHaveClass('overflow-y-scroll');
  });
});
