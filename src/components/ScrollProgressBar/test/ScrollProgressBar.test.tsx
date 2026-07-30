import { render, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import ScrollProgressBar from '../ScrollProgressBar';

describe('ScrollProgressBar Component', () => {
  beforeEach(() => {
    // Mock document.documentElement elements
    Object.defineProperty(document.documentElement, 'scrollHeight', {
      value: 1000,
      writable: true,
      configurable: true,
    });
    
    Object.defineProperty(window, 'innerHeight', {
      value: 500,
      writable: true,
      configurable: true,
    });

    Object.defineProperty(window, 'scrollY', {
      value: 0,
      writable: true,
      configurable: true,
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders progress bar markup', () => {
    const { container } = render(<ScrollProgressBar />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('is initially hidden (opacity-0) when scroll is at 0', () => {
    const { container } = render(<ScrollProgressBar />);
    expect(container.firstChild).toHaveClass('opacity-0');
  });

  it('becomes visible (opacity-100) and calculates correct progress when scrolled down', () => {
    const { container } = render(<ScrollProgressBar />);
    
    // Simulate scrolling down 250px out of 500px scrollable height (1000 scrollHeight - 500 innerHeight)
    Object.defineProperty(window, 'scrollY', { value: 250, configurable: true });
    fireEvent.scroll(window);
    
    expect(container.firstChild).toHaveClass('opacity-100');
    
    // The progress bar div is the nested child
    const innerBar = container.firstChild?.firstChild as HTMLElement;
    expect(innerBar).toBeInTheDocument();
    expect(innerBar.style.height).toBe('50%');
  });
});
