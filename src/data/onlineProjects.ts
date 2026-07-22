import apitHero from '../assets/APIT-MVC/Screenshot (882).png';
import apit1 from '../assets/APIT-MVC/Screenshot (881).png';
import apit2 from '../assets/APIT-MVC/Screenshot (883).png';
import apit3 from '../assets/APIT-MVC/Screenshot (884).png';
import apit4 from '../assets/APIT-MVC/Screenshot (885).png';
import apit5 from '../assets/APIT-MVC/Screenshot (880).png';
import apit6 from '../assets/APIT-MVC/Screenshot 2026-05-20 121808.png';

export interface OnlineProjectDetail {
  client?: string;
  role?: string;
  deliverables?: string[];
  longDescription?: string[];
  gallery?: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface OnlineProject {
  id: string;
  title: string;
  statusText: string; // e.g. "LIVE"
  statusDetail: string; // e.g. "2026 Active"
  description: string;
  heroImage: string;
  tags: string[];
  githubUrl: string;
  details?: OnlineProjectDetail;
}

export const onlineProjects: OnlineProject[] = [
  {
    id: "a-paws-in-time",
    title: "A PAWS IN TIME",
    statusText: "LIVE",
    statusDetail: "2026 Active",
    description: `Retro-style point-and-click adventure game built with Laravel (MVC), Livewire, Tailwind CSS, SQLite, and JSON. 
    Created and integrated interactive SVG assets using AI, Adobe Illustrator, and Photoshop`,
    heroImage: apitHero,
    tags: ["PHP", "LARAVEL", "LIVEWIRE", "JAVASCRIPT", "SQLITE"],
    githubUrl: "https://github.com/clara-cdp/A-Paws-In-Time",
    details: {
      client: "Personal Project",
      role: "Lead Full Stack Developer & Game Designer",
      deliverables: [
        "Time-travel gameplay state tracking (up to 5 saved games per user)",
        "User authentication interface and profile profiles via Laravel Breeze",
        "Clean and structured MVC architecture using Laravel",
        "Reactive interface built entirely in Livewire",
        "JSON-driven game scene schema populated into SQLite database",
        "Interactive SVG graphics generated with AI and optimized via Illustrator & Photoshop"
      ],
      longDescription: [
        "## Narrative & Storyline",
        "A Paws in Time begins in a world where reality has glitched beyond recognition. Birds hang motionless in the sky, everyday objects behave impossibly, and your cat has been kidnapped by the mysterious Mad Doctor to power his 'Perfect Moment' a machine capable of freezing time forever. Players must infiltrate the Doctor's mansion and shift between the Past and Present, solving interconnected puzzles, uncovering hidden clues and ultimately breaking the temporal loop to rescue their cat and restore the natural flow of time.",
        "## Architecture & Implementation",
        "The project is built with Laravel using the MVC architecture, while Livewire powers a fully reactive gameplay experience without page reloads. Scene layouts are defined through structured JSON data and stored in SQLite, allowing puzzles, inventory, player progression and timeline changes to persist throughout the adventure. Laravel Breeze provides authentication and multiple save slots, enabling players to continue their progress across sessions.",
        "## Visual Design",
        "Inspired by classic point-and-click adventures and 8-bit pixel art, the game combines handcrafted retro aesthetics with modern web technologies. Each environment is built as an interactive SVG scene where individual objects become puzzle elements. Artwork was initially generated with AI before being extensively refined in Adobe Illustrator and Photoshop, creating responsive environments that integrate seamlessly with Livewire's reactive game mechanics."
      ],
      gallery: [
        apitHero,
        apit1,
        apit2,
        apit3,
        apit4,
        apit5,
        apit6
      ],
      githubUrl: "https://github.com/clara-cdp/A-Paws-In-Time",
      liveUrl: "https://github.com/clara-cdp/A-Paws-In-Time"
    }
  }
];
