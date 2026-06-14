import coffeeMockup from '../assets/coffelogowithlogo.png';

// Import KOMO assets
import komoHero from '../assets/KOMO/hero.png';
import komoDisplay from '../assets/KOMO/display.png';
import komoFemmodel from '../assets/KOMO/femmodel.png';
import komoPalette from '../assets/KOMO/logopalete2.png';
import komoPdf from '../assets/KOMO/Komo_making_off.pdf';
import komoVideo from '../assets/KOMO/vid1_2.mp4';

export interface ProjectDetail {
  client?: string;
  role?: string;
  deliverables?: string[];
  longDescription?: string[];
  gallery?: string[];
  pdfUrl?: string;
  videoUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  variant: 'minimal' | 'background' | 'outlined';
  details?: ProjectDetail;
}

export const offLineProjects: Project[] = [
  {
    id: "komo-1",
    title: "KOMO",
    tagline: "COFFEE HUSK PACKAGING CONCEPT",
    description: "A speculative coffee brand exploring circular packaging systems made from coffee husk waste. Developed as an exercise in branding, packaging design, and AI-assisted creative direction.",
    image: komoHero,
    tags: ["Branding", "Packaging", "Creative Direction"],
    link: "#offline/projects/komo-1",
    variant: 'minimal',
    details: {
      client: "Independent Study",
      role: "Lead Brand Designer",
      deliverables: ["Visual Identity", "Packaging Design", "Creative Direction", "Promotional Film"],
      longDescription: [
        "## Challenge",
        "Coffee packaging is typically designed for disposal. KOMO explores an alternative approach: transforming coffee husk by-products into compostable packaging while maintaining the visual quality of a premium product.",
        "## Response",
        "By treating sustainability as a design constraint rather than a marketing message, the project investigates how material innovation, visual identity, and storytelling can work together within a single circular system.",
        "## Material & Identity",
        "Inspired by coffee husk, stone, clay, olive leaves, and unbleached paper, the visual language focuses on restraint, texture, and permanence.",
        "Rather than relying on familiar ecological clichés, KOMO uses editorial typography, muted colours, and tactile materials to create a calm and timeless presence.",
        "*Structural honesty. Material-driven aesthetics. Quiet luxury.*",
        "## Promotional Film",
        "To extend the brand beyond static imagery, a short concept film was developed exploring ritual, materiality, and sustainability through slow cinematic storytelling.",
        "## Documentation",
        "The complete project includes brand strategy, visual identity development, packaging design, art direction, asset creation, promotional video production, and reflections on AI-assisted creative workflows.",
        "## Reflection",
        "KOMO became more than a branding exercise. It evolved into an exploration of how AI can support creative work without replacing creative judgement.",
        "The technology accelerated ideation and production, but the real challenge remained the same: defining a clear vision, maintaining consistency, and making deliberate design decisions. AI generated possibilities. Direction remained human."
      ],
      pdfUrl: komoPdf,
      videoUrl: komoVideo,
      gallery: [komoDisplay, komoFemmodel, komoPalette]
    }
  },
  {
    id: "komo-2",
    title: "KOMO Brand System",
    tagline: "BRAND IDENTITY - 2026",
    description: "A complete visual identity for a sustainable architecture collective — logo system, typographic framework, material specifications, and brand guidelines across digital and print.",
    image: coffeeMockup,
    tags: ["Branding", "Identity", "Strategy"],
    link: "#offline/projects/komo-2",
    variant: 'background',
    details: {
      client: "KOMO Collective",
      role: "Visual Designer",
      deliverables: ["Branding", "Identity System", "Creative Direction"],
      longDescription: [
        "As a continuation of the brand identity, this study focuses on the packaging, spatial application, and interior signage concepts for the collective's Denmark office.",
        "The design uses high-texture paper stocks, low-ink typography sheets, and debossed logo guidelines to ensure that all touchpoints feel tactile, architectural, and minimal."
      ],
      gallery: [coffeeMockup]
    }
  },
  {
    id: "komo-3",
    title: "KOMO Brand System",
    tagline: "BRAND IDENTITY - 2026",
    description: "A complete visual identity for a sustainable architecture collective — logo system, typographic framework, material specifications, and brand guidelines across digital and print.",
    image: coffeeMockup,
    tags: ["Branding", "Identity", "Strategy"],
    link: "#offline/projects/komo-3",
    variant: 'outlined',
    details: {
      client: "KOMO Collective",
      role: "Design Lead",
      deliverables: ["Strategy", "Visual System", "Material Guidelines"],
      longDescription: [
        "This case study details the brand strategy, editorial guidelines, and corporate messaging frameworks developed to align KOMO's external communication style with their circular practices."
      ],
      gallery: [coffeeMockup]
    }
  }
];
