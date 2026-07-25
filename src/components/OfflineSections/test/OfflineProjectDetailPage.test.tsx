import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import OfflineProjectDetailPage from '../OfflineProjectDetailPage';
import { offLineProjects } from '../../../data/offLineProjects';

describe('OfflineProjectDetailPage Component', () => {

  it('renders project detail header, metadata, and description paragraphs for a valid project', () => {
    const project = offLineProjects[0]; // komo-1
    render(<OfflineProjectDetailPage projectId={project.id} />);

    // Check title and tagline
    expect(screen.getByText(project.tagline)).toBeInTheDocument();
    expect(screen.getByText(project.title)).toBeInTheDocument();

    // Check client & role
    expect(screen.getByText('Client')).toBeInTheDocument();
    expect(screen.getByText(project.details!.client!)).toBeInTheDocument();
    expect(screen.getByText('Role')).toBeInTheDocument();
    expect(screen.getByText(project.details!.role!)).toBeInTheDocument();

    // Check deliverables
    expect(screen.getByText('Deliverables')).toBeInTheDocument();
    project.details!.deliverables!.forEach((del) => {
      const elements = screen.getAllByText(del);
      expect(elements.length).toBeGreaterThanOrEqual(1);
    });

    // Check long description paragraphs
    project.details!.longDescription!.forEach((p) => {
      const cleanText = p.replace(/^## /, '').replace(/\*/g, '');
      const elements = screen.getAllByText(cleanText);
      expect(elements.length).toBeGreaterThanOrEqual(1);
    });

    // Check Back button
    const backBtn = screen.getByRole('link', { name: /back to portfolio/i });
    expect(backBtn).toBeInTheDocument();
    expect(backBtn).toHaveAttribute('href', '#offline/projects');
  });

  it('renders process book PDF link and video showcase dynamically if present', () => {
    const project = offLineProjects[0]; // komo-1 (has pdf and video)
    const { container } = render(<OfflineProjectDetailPage projectId={project.id} />);

    // Check PDF link
    const pdfLink = screen.getByRole('link', { name: /view full brand book/i });
    expect(pdfLink).toBeInTheDocument();
    expect(pdfLink).toHaveAttribute('href', project.details!.pdfUrl);

    // Check Video player tag
    const videoElement = container.querySelector('video');
    expect(videoElement).toBeInTheDocument();
    expect(videoElement).toHaveAttribute('src', project.details!.videoUrl);
  });

  it('does not render PDF link or video player if they are absent from project details', () => {
    const project = offLineProjects[1]; // komo-2 (no pdf or video)
    const { container } = render(<OfflineProjectDetailPage projectId={project.id} />);

    // Check PDF link is absent
    const pdfLink = screen.queryByRole('link', { name: /download process book/i });
    expect(pdfLink).not.toBeInTheDocument();

    // Check Video element is absent
    const videoElement = container.querySelector('video');
    expect(videoElement).not.toBeInTheDocument();
  });

  it('renders Figma link and construction note dynamically if present', () => {
    const project = offLineProjects[2]; // temari-no-ouchi (has figma)
    render(<OfflineProjectDetailPage projectId={project.id} />);

    const figmaLink = screen.getByRole('link', { name: /view figma design/i });
    expect(figmaLink).toBeInTheDocument();
    expect(figmaLink).toHaveAttribute('href', project.details!.figmaUrl);

    expect(screen.getByText(/\* web under construction/i)).toBeInTheDocument();
  });

  it('does not render Figma link or note if they are absent from project details', () => {
    const project = offLineProjects[0]; // komo-1 (no figma)
    render(<OfflineProjectDetailPage projectId={project.id} />);

    const figmaLink = screen.queryByRole('link', { name: /view figma design/i });
    expect(figmaLink).not.toBeInTheDocument();

    expect(screen.queryByText(/\* web under construction/i)).not.toBeInTheDocument();
  });

  it('renders custom details.hero as the hero image source when present, falling back to cardHero', () => {
    const project = offLineProjects[1]; // Spotlight
    const originalDetails = project.details;

    // Temporarily remove details.hero to test fallback
    project.details = {
      ...originalDetails,
      hero: undefined
    };

    const { rerender } = render(<OfflineProjectDetailPage projectId={project.id} />);
    const imgElements = screen.getAllByRole('img');
    const heroImgFallback = imgElements.find(img => img.getAttribute('alt') === project.title);
    expect(heroImgFallback).toHaveAttribute('src', project.cardHero);

    // Temporarily set a custom hero image
    project.details = {
      ...originalDetails,
      hero: 'mock-hero-image.jpg'
    };

    rerender(<OfflineProjectDetailPage projectId={project.id} />);
    const imgElementsUpdated = screen.getAllByRole('img');
    const heroImgCustom = imgElementsUpdated.find(img => img.getAttribute('alt') === project.title);
    expect(heroImgCustom).toHaveAttribute('src', 'mock-hero-image.jpg');

    // Restore original details
    project.details = originalDetails;
  });

  it('renders an error message and back navigation link if project ID is not found', () => {
    render(<OfflineProjectDetailPage projectId="invalid-id" />);
    
    expect(screen.getByText(/project not found/i)).toBeInTheDocument();
    
    const backBtn = screen.getByRole('link', { name: /back to portfolio/i });
    expect(backBtn).toBeInTheDocument();
    expect(backBtn).toHaveAttribute('href', '#offline');
  });

  it('applies the correct responsive grid layout and button styles', () => {
    const project = offLineProjects[0]; // komo-1 (has PDF link)
    const { container } = render(<OfflineProjectDetailPage projectId={project.id} />);

    // Check grid layout classes
    const leftColumn = container.querySelector('.col-span-12.lg\\:col-span-4');
    const rightColumn = container.querySelector('.col-span-12.lg\\:col-span-8');
    expect(leftColumn).toBeInTheDocument();
    expect(rightColumn).toBeInTheDocument();

    // Check button classes
    const pdfLink = screen.getByRole('link', { name: /view full brand book/i });
    expect(pdfLink).toHaveClass('w-full');
    expect(pdfLink).toHaveClass('sm:w-fit');
    expect(pdfLink).toHaveClass('lg:w-full');
    expect(pdfLink).toHaveClass('xl:w-fit');
    expect(pdfLink).toHaveClass('whitespace-normal');
  });

  it('applies the correct responsive classes to the Figma link if present', () => {
    const project = offLineProjects[2]; // temari-no-ouchi (has figma)
    render(<OfflineProjectDetailPage projectId={project.id} />);

    const figmaLink = screen.getByRole('link', { name: /view figma design/i });
    expect(figmaLink).toHaveClass('w-full');
    expect(figmaLink).toHaveClass('sm:w-fit');
    expect(figmaLink).toHaveClass('lg:w-full');
    expect(figmaLink).toHaveClass('xl:w-fit');
    expect(figmaLink).toHaveClass('whitespace-normal');
  });
});

