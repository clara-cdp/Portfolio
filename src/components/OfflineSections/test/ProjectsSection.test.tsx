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
    
    // Check titles
    const titles = screen.getAllByRole('heading', { level: 4 });
    expect(titles).toHaveLength(offLineProjects.length);
    
    offLineProjects.forEach((proj, idx) => {
      expect(titles[idx]).toHaveTextContent(proj.title);
      expect(screen.getAllByText(proj.tagline)[idx]).toBeInTheDocument();
      expect(screen.getAllByText(proj.description)[idx]).toBeInTheDocument();
      
      // Check tags
      proj.tags.forEach(tag => {
        // Since tags are duplicated across projects, expect them to be found multiple times
        const matchingTags = screen.getAllByText(tag);
        expect(matchingTags.length).toBeGreaterThanOrEqual(offLineProjects.length);
      });
    });
  });

  it('applies style classes corresponding to layout variants', () => {
    render(<ProjectsSection />);

    // Get the content container for each project.
    // The details component has the description text, we can find its parent div.
    offLineProjects.forEach((proj, idx) => {
      const descText = screen.getAllByText(proj.description)[idx];
      const textContainer = descText.parentElement;
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
      const descText = screen.getAllByText(proj.description)[idx];
      // The parent of textContainer is the card root (flex wrapper)
      const cardRoot = descText.parentElement?.parentElement;
      expect(cardRoot).toBeInTheDocument();
      
      if (idx % 2 !== 0) {
        expect(cardRoot).toHaveClass('md:flex-row-reverse');
      } else {
        expect(cardRoot).not.toHaveClass('md:flex-row-reverse');
      }
    });
  });
});
