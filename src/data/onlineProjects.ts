import apitHero from '../assets/APIT-MVC/Screenshot (882).png';

export interface OnlineProject {
  id: string;
  title: string;
  statusText: string; // e.g. "LIVE"
  statusDetail: string; // e.g. "2026 Active"
  description: string;
  heroImage: string;
  tags: string[];
  githubUrl: string;
}

export const onlineProjects: OnlineProject[] = [
  {
    id: "a-paws-in-time",
    title: "A PAWS IN TIME",
    statusText: "LIVE",
    statusDetail: "2026 Active",
    description: "Retro-style point-and-click adventure game built with Laravel (MVC), Livewire, Tailwind CSS, SQLite, and JSON. Created and integrated interactive SVG assets using AI, Adobe Illustrator, and Photoshop.",
    heroImage: apitHero,
    tags: ["PHP", "LARAVEL", "LIVEWIRE", "JAVASCRIPT", "SQLITE"],
    githubUrl: "https://github.com/clara-cdp/A-Paws-In-Time"
  }
];
