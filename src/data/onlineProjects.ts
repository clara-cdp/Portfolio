import cardHero from '../assets/APIT-MVC/Card_hero.png';
import destopLanding from '../assets/APIT-MVC/destop_landing.png';
import selectGame from '../assets/APIT-MVC/select_game.png';
import login1 from '../assets/APIT-MVC/login1.png';
import login2 from '../assets/APIT-MVC/login2.png';
import garden2 from '../assets/APIT-MVC/garden2.png';
import oldLibrary from '../assets/APIT-MVC/oldLibrary.png';
import initSplasscreenMbl from '../assets/APIT-MVC/init_splasscreen_mbl.png';
import apitMbl2 from '../assets/APIT-MVC/apit_mbl2.png';
import notfound404 from '../assets/APIT-MVC/404_notfound.png';
import backendHero from '../assets/APIT-API/APIT-backend-code-HERO.png';
import backendScribe from '../assets/APIT-API/APIT-backend-scribe.png';
import backendScribe2 from '../assets/APIT-API/APIT-backend-scribe2.png';
import frontendError from '../assets/APIT-API/APIT-frontend-error.png';
import frontendLogin from '../assets/APIT-API/APIT-frontend-loging.png';
import frontend from '../assets/APIT-API/APIT-frontend.png';
import frontend2 from '../assets/APIT-API/APIT-frontend2.png';
import frontend3 from '../assets/APIT-API/APIT-frontend3.png';
import frontend4 from '../assets/APIT-API/APIT-frontend4.png';
import test1 from '../assets/APIT-API/APIT-test1.png';
import test2 from '../assets/APIT-API/APIT-test2.png';
import journeyPdf from '../assets/APIT-API/A Front End Journey.pdf';

export interface OnlineProjectDetail {
  client?: string;
  role?: string;
  deliverables?: string[];
  longDescription?: string[];
  gallery?: string[];
  githubUrl?: string;
  githubUrls?: { label: string; url: string }[];
  liveUrl?: string;
  pdfUrl?: string;
  pdfLabel?: string;
}

export interface OnlineProject {
  id: string;
  title: string;
  statusText: string;
  statusDetail: string;
  description: string;
  heroImage: string;
  tags: string[];
  githubUrl?: string;
  githubUrls?: { label: string; url: string }[];
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
    heroImage: cardHero,
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
        destopLanding,
        selectGame,
        login1,
        login2,
        garden2,
        oldLibrary,
        initSplasscreenMbl,
        apitMbl2,
        notfound404
      ],
      githubUrl: "https://github.com/clara-cdp/A-Paws-In-Time",
      liveUrl: "https://github.com/clara-cdp/A-Paws-In-Time"
    }
  },
  {
    id: "a-paws-in-time-api",
    title: "A PAWS IN TIME (API & REACT)",
    statusText: "COMPLETED",
    statusDetail: "Decoupled Architecture",
    description: `Decoupled full-stack rebuild of the adventure game, separating the system into a standalone React frontend and a robust Laravel REST API. Features secure OAuth2 authentication via Laravel Passport, Spatie role-based access control, persistent save files, and Scribe API documentation.`,
    heroImage: backendHero,
    tags: ["REACT", "JAVASCRIPT", "TYPESCRIPT", "PHP", "LARAVEL", "REST API", "OAUTH2", "SPATIE", "PEST", "POSTGRESQL"],
    githubUrls: [
      { label: "GITHUB (API)", url: "https://github.com/clara-cdp/A-Paws-In-Time-API" },
      { label: "GITHUB (FE)", url: "https://github.com/clara-cdp/A-Paws-In-Time-frontend" }
    ],
    details: {
      client: "Personal Full-Stack Project",
      role: "Full-Stack Developer & Game/Interface Designer",
      deliverables: [
        "React frontend with Laravel REST API architecture",
        "OAuth2 authentication using Laravel Passport",
        "Role-based access control with Spatie Permission",
        "Persistent game progress and multiple save files",
        "Documented and tested REST API"
      ],
      longDescription: [
        "## Narrative & Gameplay",
        "A Paws in Time is a retro point-and-click adventure set in a world where time has glitched. After the Mad Doctor kidnaps the player's cat to power a machine capable of freezing time permanently, players must infiltrate his mansion and shift between the Past and Present. By exploring interactive scenes, collecting objects and changing the past to reshape the future, they gradually uncover the Doctor's plan and break the temporal loop.",
        "## Decoupled Full-Stack Architecture",
        "The project was rebuilt as two independent applications connected through a REST API. The React frontend delivers the player experience, handling scene rendering, navigation, inventory management and user interactions through reusable components and client-side state. The Laravel backend exposes REST endpoints responsible for authentication, authorization, game progression and persistent player data. Authentication is implemented using Laravel Passport, providing secure OAuth2 access tokens for authenticated requests. Role-based authorization is managed with Spatie Permission, allowing administrators to manage game content while restricting privileged operations from standard player accounts. This architecture enables the frontend and backend to be developed, tested and deployed independently while maintaining a clear API contract.",
        "## API, State & Testing",
        "The backend manages player progression, inventory, completed puzzles and saved games through authenticated REST endpoints. When a player loads an existing save, the React application reconstructs the current game state by consuming the API. Request validation ensures data integrity, while Pest provides automated backend testing for endpoint behaviour. The complete API is documented with Scribe, making the communication contract between frontend and backend easy to understand and maintain. Development and endpoint verification were also supported through Postman.",
        "## Visual Design",
        "Inspired by classic point-and-click adventures and retro pixel-art games, the interface combines handcrafted environments with modern frontend technologies. Graphic assets were generated before being extensively refined using Adobe Illustrator and Photoshop, creating interactive scenes that support both gameplay and storytelling."
      ],
      gallery: [
        backendHero,
        backendScribe,
        backendScribe2,
        frontend,
        frontend2,
        frontend3,
        frontend4,
        frontendLogin,
        frontendError,
        test1,
        test2
      ],
      githubUrls: [
        { label: "GITHUB (API)", url: "https://github.com/clara-cdp/A-Paws-In-Time-API" },
        { label: "GITHUB (FE)", url: "https://github.com/clara-cdp/A-Paws-In-Time-frontend" }
      ],
      pdfUrl: journeyPdf,
      pdfLabel: "EXPLORE FRONT END JOURNAL"
    }
  }
];
