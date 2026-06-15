import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ProjectsSection from '../ProjectsSection';
import { offLineProjects } from '../../../data/offLineProjects';

describe('ProjectsSection Component', () => {
  it('renders section title and introduction text', () => {
    render(<ProjectsSection />);
    
    expect(screen.getByText('03 - PROJECTS')).toBeInTheDocument();
    expect(screen.getByText(/Work as/)).toBeInTheDocument();
    expect(screen.getByText(/Ideas are interesting/)).toBeInTheDocument();
  });

  it('renders all projects from offLineProjects data with correct properties', () => {
    render(<ProjectsSection />);
    
    offLineProjects.forEach((proj) => {
      // Find the correct image element by matching its sibling link
      const imgElements = screen.getAllByAltText(proj.title);
      const imgElement = imgElements.find(img => {
        const textContainer = img.parentElement?.nextElementSibling;
        return textContainer?.querySelector('a')?.getAttribute('href') === proj.link;
      });
      
      expect(imgElement).toBeDefined();
      expect(imgElement).toHaveAttribute('src', proj.cardHero);
      
      const cardRoot = imgElement!.parentElement!.parentElement;
      expect(cardRoot).toBeInTheDocument();
      
      // Query elements inside card root
      expect(cardRoot).toHaveTextContent(proj.title);
      expect(cardRoot).toHaveTextContent(proj.tagline);
      expect(cardRoot).toHaveTextContent(proj.description);
      
      // Check tags
      proj.tags.forEach(tag => {
        expect(cardRoot).toHaveTextContent(tag);
      });
      
      // Check link
      const link = cardRoot?.querySelector('a');
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', proj.link);
    });
  });

  it('applies style classes corresponding to layout variants', () => {
    render(<ProjectsSection />);

    offLineProjects.forEach((proj) => {
      const imgElements = screen.getAllByAltText(proj.title);
      const imgElement = imgElements.find(img => {
        const textContainer = img.parentElement?.nextElementSibling;
        return textContainer?.querySelector('a')?.getAttribute('href') === proj.link;
      });
      
      expect(imgElement).toBeDefined();
      const textContainer = imgElement!.parentElement!.nextElementSibling;
      expect(textContainer).toBeInTheDocument();

      if (proj.variant === 'background') {
        expect(textContainer).toHaveClass('bg-[#EFECE6]');
        expect(textContainer).toHaveClass('border-brand-dark/5');
      } else if (proj.variant === 'outlined') {
        expect(textContainer).toHaveClass('border-brand-dark/15');
        expect(textContainer).not.toHaveClass('bg-[#EFECE6]');
      } else if (proj.variant === 'minimal') {
        expect(textContainer).toHaveClass('px-2');
        expect(textContainer).not.toHaveClass('bg-[#EFECE6]');
        expect(textContainer).not.toHaveClass('border-brand-dark/15');
      }
    });
  });

  it('applies alternating row-reverse order for odd indices', () => {
    render(<ProjectsSection />);
    
    offLineProjects.forEach((proj, idx) => {
      const imgElements = screen.getAllByAltText(proj.title);
      const imgElement = imgElements.find(img => {
        const textContainer = img.parentElement?.nextElementSibling;
        return textContainer?.querySelector('a')?.getAttribute('href') === proj.link;
      });
      
      expect(imgElement).toBeDefined();
      const cardRoot = imgElement!.parentElement!.parentElement;
      expect(cardRoot).toBeInTheDocument();
      
      if (idx % 2 !== 0) {
        expect(cardRoot).toHaveClass('md:flex-row-reverse');
      } else {
        expect(cardRoot).not.toHaveClass('md:flex-row-reverse');
      }
    });
  });
});
