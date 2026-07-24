import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import OnlineJourneySection from '../OnlineJourneySection';

describe('OnlineJourneySection Component', () => {
  it('renders section header tag and commit history subtitle', () => {
    render(<OnlineJourneySection />);
    expect(screen.getByText('04 — JOURNEY ›')).toBeInTheDocument();
    expect(screen.getByText('Commit history')).toBeInTheDocument();
  });

  it('renders all 5 commit cards in the grid', () => {
    render(<OnlineJourneySection />);

    // Check card headers/labels
    expect(screen.getByText('COMMIT 01')).toBeInTheDocument();
    expect(screen.getByText('COMMIT 02')).toBeInTheDocument();
    expect(screen.getByText('COMMIT 03')).toBeInTheDocument();
    expect(screen.getByText('COMMIT 04')).toBeInTheDocument();
    expect(screen.getByText('HEAD')).toBeInTheDocument();

    // Check hashes
    expect(screen.getByText('[e7a1098]')).toBeInTheDocument();
    expect(screen.getByText('[f4b2319]')).toBeInTheDocument();
    expect(screen.getByText('[8c3b2d9]')).toBeInTheDocument();
    expect(screen.getByText('[0e58f72]')).toBeInTheDocument();
    expect(screen.getByText('[main]')).toBeInTheDocument();

    // Check subjects
    expect(screen.getByText('Strong Foundation')).toBeInTheDocument();
    expect(screen.getByText('Creative Shift')).toBeInTheDocument();
    expect(screen.getByText('Specialisation')).toBeInTheDocument();
    expect(screen.getByText('Engineering Expansion')).toBeInTheDocument();
    expect(screen.getByText('Digital Product Design')).toBeInTheDocument();

    // Check descriptions
    expect(
      screen.getByText('Built a strong foundation in communication, leadership and project coordination.')
    ).toBeInTheDocument();
  });
});
