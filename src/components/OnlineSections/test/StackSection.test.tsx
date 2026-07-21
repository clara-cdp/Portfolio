import { render, screen, act } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import StackSection from '../StackSection';

describe('StackSection Component', () => {
  beforeEach(() => {
    window.IntersectionObserver = vi.fn().mockImplementation(function (callback) {
      return {
        observe: vi.fn().mockImplementation(function (element) {
          // Immediately simulate entry for test environment rendering
          callback([{ isIntersecting: true, target: element }]);
        }),
        unobserve: vi.fn(),
        disconnect: vi.fn(),
      };
    });
  });

  it('renders section header tag and operational status indicator', () => {
    render(<StackSection />);

    expect(screen.getByText(/01 - STACK >/i)).toBeInTheDocument();
    expect(screen.getByText(/All Systems Operational/i)).toBeInTheDocument();
  });

  it('renders all terminal HUD filter buttons', () => {
    render(<StackSection />);

    expect(screen.getByRole('button', { name: /\[ ALL SYSTEMS \]/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /\[ CODE & DEV \]/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /\[ INFRA & DATA \]/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /\[ DESIGN & MEDIA \]/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /\[ AI & EXTRAS \]/i })).toBeInTheDocument();
  });

  it('renders key stack cards and technology items by default', () => {
    render(<StackSection />);

    // Check card titles
    expect(screen.getByText('FRONTEND')).toBeInTheDocument();
    expect(screen.getByText('BACKEND')).toBeInTheDocument();
    expect(screen.getByText('DATABASES')).toBeInTheDocument();
    expect(screen.getByText('TESTING')).toBeInTheDocument();
    expect(screen.getByText('DESIGN')).toBeInTheDocument();
    expect(screen.getByText('EXTRAS')).toBeInTheDocument();

    // Check technology items
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('PHP')).toBeInTheDocument();
    expect(screen.getByText('Laravel')).toBeInTheDocument();
    expect(screen.getByText('Vitest')).toBeInTheDocument();
    expect(screen.getByText('Figma')).toBeInTheDocument();
  });

  it('filters cards dynamically when a filter button is clicked', () => {
    render(<StackSection />);

    // Click CODE & DEV filter
    const codeDevBtn = screen.getByRole('button', { name: /\[ CODE & DEV \]/i });
    act(() => {
      codeDevBtn.click();
    });

    // Frontend and Backend cards should remain visible
    expect(screen.getByText('FRONTEND')).toBeInTheDocument();
    expect(screen.getByText('BACKEND')).toBeInTheDocument();

    // Design card should be hidden
    expect(screen.queryByText('DESIGN')).not.toBeInTheDocument();

    // Click DESIGN & MEDIA filter
    const designMediaBtn = screen.getByRole('button', { name: /\[ DESIGN & MEDIA \]/i });
    act(() => {
      designMediaBtn.click();
    });

    // Design card should be visible now, Frontend hidden
    expect(screen.getByText('DESIGN')).toBeInTheDocument();
    expect(screen.queryByText('FRONTEND')).not.toBeInTheDocument();

    // Click ALL SYSTEMS filter to restore all cards
    const allSystemsBtn = screen.getByRole('button', { name: /\[ ALL SYSTEMS \]/i });
    act(() => {
      allSystemsBtn.click();
    });

    expect(screen.getByText('FRONTEND')).toBeInTheDocument();
    expect(screen.getByText('DESIGN')).toBeInTheDocument();
  });
});
