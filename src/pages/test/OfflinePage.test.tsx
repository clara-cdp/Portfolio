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
  });
});
