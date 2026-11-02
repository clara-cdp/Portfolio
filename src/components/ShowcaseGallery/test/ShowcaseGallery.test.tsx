import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ShowcaseGallery from '../ShowcaseGallery';

const mockImages = [
  'image1.png',
  'image2.png',
  'image3.png',
  'image4.png',
];

describe('ShowcaseGallery Component', () => {
  it('renders all gallery images in both mobile grid and desktop carousel modes', () => {
    render(<ShowcaseGallery images={mockImages} />);

    const images = screen.getAllByRole('img', { name: /Showcase frame/i });
    expect(images.length).toBe(8);
  });

  it('renders correct initial index state and controls', () => {
    render(<ShowcaseGallery images={mockImages} />);

    // Renders the index indicator starting at 01/04
    expect(screen.getByText('01 / 04')).toBeInTheDocument();

    // Renders next and previous arrow buttons
    const prevButton = screen.getByLabelText(/Previous screenshot/i);
    const nextButton = screen.getByLabelText(/Next screenshot/i);

    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });

  it('advances active slide when clicking next button', () => {
    render(<ShowcaseGallery images={mockImages} />);

    const nextButton = screen.getByLabelText(/Next screenshot/i);

    // Initial is 01 / 04
    expect(screen.getByText('01 / 04')).toBeInTheDocument();

    // Click next
    fireEvent.click(nextButton);
    expect(screen.getByText('02 / 04')).toBeInTheDocument();

    // Click next again
    fireEvent.click(nextButton);
    expect(screen.getByText('03 / 04')).toBeInTheDocument();
  });

  it('wraps around to first slide when clicking next from last slide', () => {
    render(<ShowcaseGallery images={mockImages} />);

    const nextButton = screen.getByLabelText(/Next screenshot/i);

    // Initial is 01 / 04
    expect(screen.getByText('01 / 04')).toBeInTheDocument();

    // Click next 3 times to get to last
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    expect(screen.getByText('04 / 04')).toBeInTheDocument();

    // Click next once more to wrap
    fireEvent.click(nextButton);
    expect(screen.getByText('01 / 04')).toBeInTheDocument();
  });

  it('retreats slide when clicking prev button with wrapping', () => {
    render(<ShowcaseGallery images={mockImages} />);

    const prevButton = screen.getByLabelText(/Previous screenshot/i);

    // Initial is 01 / 04
    expect(screen.getByText('01 / 04')).toBeInTheDocument();

    // Click prev - should wrap to 04 / 04
    fireEvent.click(prevButton);
    expect(screen.getByText('04 / 04')).toBeInTheDocument();

    // Click prev again
    fireEvent.click(prevButton);
    expect(screen.getByText('03 / 04')).toBeInTheDocument();
  });

  it('opens fullscreen lightbox when clicking the active image card', () => {
    render(<ShowcaseGallery images={mockImages} />);

    // Find center slide (initially at index 0)
    // The active card is clickable and triggers lightbox
    const desktopImages = screen.getAllByRole('img', { name: /Showcase frame/i });

    // The first desktop image is at index 0
    // Click the active image card container to trigger openLightbox
    // The image itself is pointer-events-none, so click its wrapper parent
    const firstImageWrapper = desktopImages[4].parentElement;
    expect(firstImageWrapper).toBeInTheDocument();

    if (firstImageWrapper) {
      fireEvent.click(firstImageWrapper);
    }

    // Verify lightbox is open: system capture header is visible
    expect(screen.getByText(/SYSTEM CAPTURE/i)).toBeInTheDocument();
    expect(screen.getByText('(1 of 4)')).toBeInTheDocument();

    // Verify lightbox buttons are present
    expect(screen.getByTitle(/Zoom In/i)).toBeInTheDocument();
    expect(screen.getByTitle(/Zoom Out/i)).toBeInTheDocument();
    expect(screen.getByTitle(/Close Lightbox/i)).toBeInTheDocument();
  });

  it('closes lightbox when clicking the close button', () => {
    render(<ShowcaseGallery images={mockImages} />);

    // Open lightbox
    const desktopImages = screen.getAllByRole('img', { name: /Showcase frame/i });
    const firstImageWrapper = desktopImages[4].parentElement;
    if (firstImageWrapper) {
      fireEvent.click(firstImageWrapper);
    }

    // Verify lightbox open
    expect(screen.getByText(/SYSTEM CAPTURE/i)).toBeInTheDocument();

    // Click close
    const closeBtn = screen.getByTitle(/Close Lightbox/i);
    fireEvent.click(closeBtn);

    // Verify lightbox closed
    expect(screen.queryByText(/SYSTEM CAPTURE/i)).not.toBeInTheDocument();
  });

  it('renders narrow image with scrollable frame and SCROLL DOWN indicator when active', () => {
    render(<ShowcaseGallery images={mockImages} />);

    const desktopImages = screen.getAllByRole('img', { name: /Showcase frame/i });
    const activeDesktopImg = desktopImages[4];

    Object.defineProperty(activeDesktopImg, 'naturalWidth', { value: 300, configurable: true });
    Object.defineProperty(activeDesktopImg, 'naturalHeight', { value: 2000, configurable: true });
    fireEvent.load(activeDesktopImg);

    expect(screen.getByText(/SCROLL DOWN/i)).toBeInTheDocument();
    expect(screen.queryByText(/CLICK TO ZOOM/i)).not.toBeInTheDocument();

    const scrollContainer = screen.getByText(/SCROLL DOWN/i).closest('.relative')?.querySelector('.overflow-y-auto');
    expect(scrollContainer).toBeInTheDocument();
    expect(scrollContainer).toHaveClass('overflow-y-auto');
    expect(scrollContainer).toHaveClass('w-[55%]');
  });

  it('does not trigger lightbox on click for narrow active image to allow scrolling', () => {
    render(<ShowcaseGallery images={mockImages} />);

    const desktopImages = screen.getAllByRole('img', { name: /Showcase frame/i });
    const activeDesktopImg = desktopImages[4];

    Object.defineProperty(activeDesktopImg, 'naturalWidth', { value: 300, configurable: true });
    Object.defineProperty(activeDesktopImg, 'naturalHeight', { value: 2000, configurable: true });
    fireEvent.load(activeDesktopImg);

    const scrollContainer = screen.getByText(/SCROLL DOWN/i).closest('.relative')?.querySelector('.overflow-y-auto');
    if (scrollContainer) {
      fireEvent.click(scrollContainer);
    }

    expect(screen.queryByText(/SYSTEM CAPTURE/i)).not.toBeInTheDocument();
  });

  it('provides fit/scroll view toggle and omits zoom controls in lightbox for narrow images', () => {
    render(<ShowcaseGallery images={mockImages} />);

    const desktopImages = screen.getAllByRole('img', { name: /Showcase frame/i });
    Object.defineProperty(desktopImages[4], 'naturalWidth', { value: 300, configurable: true });
    Object.defineProperty(desktopImages[4], 'naturalHeight', { value: 2000, configurable: true });
    fireEvent.load(desktopImages[4]);

    const mobileImages = screen.getAllByRole('img', { name: /Showcase frame/i });
    const mobileWrapper = mobileImages[0].parentElement;
    if (mobileWrapper) {
      fireEvent.click(mobileWrapper);
    }

    expect(screen.getByText(/SYSTEM CAPTURE/i)).toBeInTheDocument();
    expect(screen.getByTitle(/Fit to Screen/i)).toBeInTheDocument();
    expect(screen.queryByTitle(/Zoom In/i)).not.toBeInTheDocument();
    expect(screen.queryByTitle(/Zoom Out/i)).not.toBeInTheDocument();

    const toggleButton = screen.getByTitle(/Fit to Screen/i);
    fireEvent.click(toggleButton);
    expect(screen.getByTitle(/Scroll View/i)).toBeInTheDocument();
  });
});
