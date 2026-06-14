import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import OfflinePage from '../OfflinePage';

describe('OfflinePage Component', () => {
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
  });
});
