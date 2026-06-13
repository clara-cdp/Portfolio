import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { OnlineButton, OfflineButton } from './Button';

describe('Button components', () => {
  it('renders OnlineButton and handles click events', () => {
    const handleClick = vi.fn();
    render(<OnlineButton onClick={handleClick}>Click Me</OnlineButton>);
    
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('border-brand-cyan');
    
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders OfflineButton and handles click events', () => {
    const handleClick = vi.fn();
    render(<OfflineButton onClick={handleClick}>Click Me</OfflineButton>);
    
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).not.toHaveClass('border-brand-cyan');
    
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
