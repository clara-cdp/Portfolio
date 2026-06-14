import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import IdentitySection from '../IdentitySection';

describe('IdentitySection Component', () => {
  it('renders eyebrow, heading, and description texts', () => {
    render(<IdentitySection />);
    
    expect(screen.getByText('01 - DESIGN IDENTITY')).toBeInTheDocument();
    expect(screen.getByText(/Design as/i)).toBeInTheDocument();
    expect(screen.getByText(/communication/i)).toBeInTheDocument();
    expect(screen.getByText('Design is not decoration.')).toBeInTheDocument();
    expect(screen.getByText(/Good design is not about making things look better/i)).toBeInTheDocument();
    expect(screen.getByText(/It is about making ideas easier to understand/i)).toBeInTheDocument();
    expect(screen.getByText(/Whether creating a visual identity/i)).toBeInTheDocument();
    expect(screen.getByText(/Every project begins with a message/i)).toBeInTheDocument();
  });
});
