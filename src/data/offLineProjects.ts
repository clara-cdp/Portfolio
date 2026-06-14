import coffeeMockup from '../assets/coffelogowithlogo.png';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  variant: 'minimal' | 'background' | 'outlined';
}

export const offLineProjects: Project[] = [
  {
    id: "komo-1",
    title: "KOMO Brand System",
    tagline: "BRAND IDENTITY - 2026",
    description: "A complete visual identity for a sustainable architecture collective — logo system, typographic framework, material specifications, and brand guidelines across digital and print.",
    image: coffeeMockup,
    tags: ["Branding", "Identity", "Strategy"],
    link: "#projects",
    variant: 'minimal'
  },
  {
    id: "komo-2",
    title: "KOMO Brand System",
    tagline: "BRAND IDENTITY - 2026",
    description: "A complete visual identity for a sustainable architecture collective — logo system, typographic framework, material specifications, and brand guidelines across digital and print.",
    image: coffeeMockup,
    tags: ["Branding", "Identity", "Strategy"],
    link: "#projects",
    variant: 'background'
  },
  {
    id: "komo-3",
    title: "KOMO Brand System",
    tagline: "BRAND IDENTITY - 2026",
    description: "A complete visual identity for a sustainable architecture collective — logo system, typographic framework, material specifications, and brand guidelines across digital and print.",
    image: coffeeMockup,
    tags: ["Branding", "Identity", "Strategy"],
    link: "#projects",
    variant: 'outlined'
  }
];
