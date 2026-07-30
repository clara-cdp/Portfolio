import { render, screen, act } from '@testing-library/react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import OnlineJourneySection from '../OnlineJourneySection';

describe('OnlineJourneySection Component', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders section header tags and heading title', () => {
    render(<OnlineJourneySection />);

    expect(screen.getByText(/04 - JOURNEY/i)).toBeInTheDocument();
    expect(screen.getByText(/Version history/i)).toBeInTheDocument();
    
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent(/Evolution by/i);
    expect(heading).toHaveTextContent(/Design/i);
  });

  it('renders all commits and descriptions sequentially after time progresses', () => {
    render(<OnlineJourneySection />);

    // Fast-forward timers to allow cascading typewriter sequences to complete
    act(() => {
      vi.advanceTimersByTime(5000);
    });

    // Check commit hashes
    expect(screen.getByText('COMMIT [e7a1098]')).toBeInTheDocument();
    expect(screen.getByText('COMMIT [f4b2319]')).toBeInTheDocument();
    expect(screen.getByText('COMMIT [8c3b2d9]')).toBeInTheDocument();
    expect(screen.getByText('COMMIT [0e58f72]')).toBeInTheDocument();
    expect(screen.getByText('COMMIT [main]')).toBeInTheDocument();

    // Check subjects
    expect(screen.getByText('Professional Foundations')).toBeInTheDocument();
    expect(screen.getByText('Visual Design')).toBeInTheDocument();
    expect(screen.getByText('Design Systems')).toBeInTheDocument();
    expect(screen.getByText('Engineering')).toBeInTheDocument();
    expect(screen.getByText('Development')).toBeInTheDocument();

    // Check descriptions
    expect(
      screen.getByText('Built a strong foundation in communication, leadership and project coordination.')
    ).toBeInTheDocument();
    expect(
      screen.getByText('Moved into Graphic & Web Design, creating brands, publications and digital experiences.')
    ).toBeInTheDocument();
    expect(
      screen.getByText("Specialised in visual systems, earning a Master's in Graphic Design.")
    ).toBeInTheDocument();
    expect(
      screen.getByText('Expanded into Full Stack Development, building applications with React, TypeScript, PHP, Laravel and REST APIs.')
    ).toBeInTheDocument();
    expect(
      screen.getByText('Building digital products where design and engineering work together.')
    ).toBeInTheDocument();
  });

  it('renders a glowing teal dot before the section title number', () => {
    render(<OnlineJourneySection />);
    const titleElement = screen.getByText(/04 - JOURNEY/i);
    const dot = titleElement.querySelector('.relative.flex');
    expect(dot).toBeInTheDocument();
    expect(dot?.querySelector('.animate-ping')).toHaveClass('bg-brand-cyan/70');
    expect(dot?.querySelector('.relative.inline-flex')).toHaveClass('bg-brand-cyan');
  });
});
