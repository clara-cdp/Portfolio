import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import HeroSection from '../HeroSection';

describe('HeroSection Component', () => {
  it('renders design portfolio title and scroll indicator', () => {
    render(<HeroSection />);
    
    expect(screen.getByText('Offline - Design Portfolio')).toBeInTheDocument();
    
    expect(screen.getByText('Making')).toBeInTheDocument();
    expect(screen.getByText('ideas')).toBeInTheDocument();
    expect(screen.getByText('visible')).toBeInTheDocument();

    expect(screen.getByText(/Branding, visual identity, editorial thinking/i)).toBeInTheDocument();
    expect(screen.getByText(/Scroll to explore/i)).toBeInTheDocument();
  });
});
