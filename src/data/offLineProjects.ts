import coffeeMockup from '../assets/KOMO/cupwithlogo.png';

// Import KOMO assets
import komoHero from '../assets/KOMO/hero.png';
import komoDisplay from '../assets/KOMO/display.png';
import komoFemmodel from '../assets/KOMO/femmodel.png';
import komoPalette from '../assets/KOMO/logopalete2.png';
import komoPdf from '../assets/KOMO/Komo_making_off.pdf';
import komoVideo from '../assets/KOMO/vid1_2.mp4';
import komoCup from '../assets/KOMO/cupwithlogo.png';
import komoLogotype from '../assets/KOMO/logotype.png';
import komoLogprod from '../assets/KOMO/logprod.png';

// Import SPOTLIGHT assets
import spotlightHero from '../assets/SPOTLIGHT/spotlight.jpg';
import spotlightBag from '../assets/SPOTLIGHT/spotBag.jpg';
import spotlightTote from '../assets/SPOTLIGHT/toteBag.png';
import spotlightPosters from '../assets/SPOTLIGHT/dual-poster-mockup-8bit-freebie.jpg';
import spotlightBracelet from '../assets/SPOTLIGHT/two thin bracelet.jpg';

// Import TEMARI assets
import temariHero from '../assets/Temari/hero.jpg';
import temariLogo from '../assets/Temari/LOGO.png';
import temariStyles from '../assets/Temari/styles.jpg';
import temariStyles2 from '../assets/Temari/styles2.jpg';
import temariCatCard from '../assets/Temari/Cat card-2.png';
import temariMobileCatCard from '../assets/Temari/temari_Mobile cat card.png';
import temariPdf from '../assets/Temari/temariNoOuchi.pdf';

export interface ProjectDetail {
  client?: string;
  role?: string;
  deliverables?: string[];
  longDescription?: string[];
  gallery?: string[];
  pdfUrl?: string;
  videoUrl?: string;
  figmaUrl?: string;
  hero?: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  cardHero: string;
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
    cardHero: komoHero,
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
      gallery: [komoDisplay, komoFemmodel, komoPalette, komoCup, komoLogotype, komoLogprod]
    }
  },
  {
    id: "Spotlight",
    title: "SPOTLIGHT",
    tagline: "THEATRE TECHNOLOGY FESTIVAL IDENTITY",
    description: "Visual identity system for an international festival dedicated to theatre technology, scenography, and performing arts production. It shifts attention away from performers and towards the craftspeople backstage.",
    cardHero: spotlightHero,
    tags: ["Branding", "Identity", "Creative Direction"],
    link: "#offline/projects/Spotlight",
    variant: 'background',
    details: {
      client: "Independent Concept",
      role: "Visual & System Designer",
      deliverables: ["Visual Identity", "Design System", "Physical Applications", "Editorial Design"],
      longDescription: [
        "## Concept",
        "Spotlight is an international festival dedicated to theatre technology, scenography, and performing arts production.",
        "The project shifts attention away from performers and towards the technicians, designers, and craftspeople working behind the scenes. Inspired by the theatre spotlight, the identity explores the relationship between what is visible on stage and what remains hidden backstage.",
        "## Challenge",
        "Create a visual identity system capable of working across multiple applications while remaining recognisable without relying on the logo alone.",
        "The system needed to communicate both the technical and creative sides of the performing arts industry while remaining simple, flexible, and highly functional.",
        "## Design System",
        "The identity is built around three core elements:",
        "*Black & White — representing the contrast between stage and backstage, audience and technician, light and darkness.*",
        "*Typography — Cascadia Code provides a technical yet approachable voice throughout the project.*",
        "*The Zero (0) — replacing the letter 'O' in SP0TLIGHT, becoming a secondary mark and recurring visual element across the system.*",
        "The result is a minimalist identity where typography, hierarchy, and repetition become more important than the logo itself.",
        "## Applications",
        "The system was developed across a range of physical and editorial applications, including: Posters, Event programme booklet, Festival passes and tickets, Signage, and Merchandise.",
        "Each application follows the same visual principles, demonstrating the flexibility and consistency of the identity system."
      ],
      gallery: [spotlightPosters, spotlightTote, spotlightBracelet]
    }
  },
  {
    id: "temari-no-ouchi",
    title: "TEMARI NO OUCHI",
    tagline: "BRANDING & DIGITAL EXPERIENCE",
    description: "A branding and website design project for a cat café and adoption centre heavily inspired by Japanese kawaii culture, combining a playful themed atmosphere with a streamlined adoption process.",
    cardHero: temariHero,
    tags: ["Branding", "UI/UX", "Identity"],
    link: "#offline/projects/temari-no-ouchi",
    variant: 'outlined',
    details: {
      client: "Temari No Ouchi",
      role: "Lead UI/UX & Brand Designer",
      deliverables: ["Visual Identity", "Logo Design", "UI/UX Design", "Digital Strategy"],
      longDescription: [
        "## Concept",
        "Temari No Ouchi is a branding and website project for a cat café and adoption centre heavily inspired by Japanese kawaii culture.",
        "The project combines the playful, colourful atmosphere of a themed café with the practical goal of promoting cat adoption. The identity aims to create an inviting digital experience that encourages visitors to discover the cats, learn their stories, and ultimately find a new companion.",
        "## Challenge",
        "Create a visual identity and website that balances two objectives:",
        "*Communicate the warmth and personality of a kawaii cat café.*",
        "*Support the adoption process through clear information and user-friendly navigation.*",
        "The challenge was to create something playful and memorable without becoming visually overwhelming or losing focus on the animals themselves.",
        "## Design System",
        "The identity is built around softness, friendliness, and character.",
        "Key elements include a kawaii-inspired visual language using rounded shapes, playful illustrations, and expressive details, set in a soft pastel colour palette. Clean, friendly typography supports cat-centred storytelling, allowing each cat to become part of the brand experience through adoption features and profiles.",
        "The result is a warm and approachable system designed to make visitors smile while creating an emotional connection with the animals.",
        "## Applications",
        "The project includes both branding and digital design: Visual identity, Logo design, Colour palette and typography system, Website design, Cat adoption profiles, Menu and café information pages, Contact and booking experience, and Social media assets.",
        "Together, these elements create a cohesive brand experience that supports both the café and its adoption mission."
      ],
      pdfUrl: temariPdf,
      figmaUrl: "https://www.figma.com/design/ZJZjH1sPflhnioSijMncYL/Untitled?node-id=0-1&p=f&t=OPMcwCEb29J0HJKj-0",
      gallery: [temariLogo, temariStyles, temariStyles2, temariCatCard, temariMobileCatCard]
    }
  }
];
