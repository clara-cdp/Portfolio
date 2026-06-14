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
    expect(backBtn).toHaveAttribute('href', '#projects');
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

  it('renders an error message and back navigation link if project ID is not found', () => {
    render(<OfflineProjectDetailPage projectId="invalid-id" />);
    
    expect(screen.getByText(/project not found/i)).toBeInTheDocument();
    
    const backBtn = screen.getByRole('link', { name: /back to portfolio/i });
    expect(backBtn).toBeInTheDocument();
    expect(backBtn).toHaveAttribute('href', '#offline');
  });
});
