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
import matchUpHero from '../assets/match-up/match_up_card_HERO.png';
import muScreenshot1 from '../assets/match-up/Screenshot 2026-07-27 115331.png';
import muScreenshot2 from '../assets/match-up/Screenshot 2026-07-27 115446.png';
import muScreenshot3 from '../assets/match-up/Screenshot 2026-07-27 120408.png';
import muScreenshot4 from '../assets/match-up/Screenshot 2026-07-27 120532.png';
import muScreenshot5 from '../assets/match-up/Screenshot 2026-07-27 120651.png';
import muScreenshot6 from '../assets/match-up/Screenshot 2026-07-27 120826.png';
import projectDetailHero from '../assets/match-up/projectDetail-HERO.png';
import taskomaniaHero from '../assets/TASKOMANIA/Screenshot 2026-07-27 165526.png';
import toScreenshot2 from '../assets/TASKOMANIA/Screenshot 2026-07-27 165548.png';
import toScreenshot3 from '../assets/TASKOMANIA/Screenshot 2026-07-27 165631.png';
import toScreenshot4 from '../assets/TASKOMANIA/Screenshot 2026-07-27 165725.png';
import toScreenshot5 from '../assets/TASKOMANIA/Screenshot 2026-07-27 165748.png';
import toScreenshot6 from '../assets/TASKOMANIA/Screenshot 2026-07-27 165907.png';
import toScreenshot7 from '../assets/TASKOMANIA/Screenshot 2026-07-27 165919.png';
import reactivityHero from '../assets/REACTIVITY/reactivity1.png';
import reactivity2 from '../assets/REACTIVITY/reactivity2.png';
import reactivity3 from '../assets/REACTIVITY/reacitvity3.png';
import reactivity4 from '../assets/REACTIVITY/reactivity4.png';
import reactivity5 from '../assets/REACTIVITY/reactivity5.png';

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
  hero?: string;
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
  isSmall?: boolean;
}

export const onlineProjects: OnlineProject[] = [
  {
    id: "a-paws-in-time",
    title: "A PAWS IN TIME",
    statusText: "COMPLETED",
    statusDetail: "MVC",
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
    statusText: "LIVE",
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
  },
  {
    id: "reactivity",
    title: "REACTIVITY",
    statusText: "IN PROGRESS",
    statusDetail: "React & TypeScript",
    description: "A handmade habit tracker built with React, TypeScript, and Vite. Designed to make daily habit tracking effortless, Reactivity helps users build consistency, calculate streaks, and visualize progress across a weekly navigation cycle.",
    heroImage: reactivityHero,
    tags: ["REACT", "TYPESCRIPT", "TAILWIND CSS", "VITE"],
    githubUrl: "https://github.com/clara-cdp/Reactivity",
    details: {
      client: "Personal Project",
      role: "Frontend Developer & Designer",
      hero: reactivity2,
      deliverables: [
        "Interactive habit tracking dashboard with weekly navigation",
        "Habit creation, deletion, and local storage state persistence",
        "Dynamic streak calculation engine based on consecutive daily completions",
        "Real-time daily progress percentage indicator"
      ],
      longDescription: [
        "## Habit Management & Streak Mechanics",
        "Reactivity is designed to help users build consistency through daily tracking. The application calculates current streaks dynamically based on consecutive completions across different weeks. Users can create, toggle, and delete habits with instant local storage state synchronization to ensure data persists between sessions.",
        "## Upcoming Features (Next to Come)",
        "A major part of the project roadmap involves expanding its tracking and analytical capabilities. Planned additions include a Monthly calendar view, Habit categories (Health, Work, Learning...), Browser notifications, Outlook Calendar integration (Microsoft Graph API), skip-day options, milestone celebration animations, a GitHub-style yearly heatmap, and daily motivational quotes."
      ],
      gallery: [
        reactivityHero,
        reactivity2,
        reactivity3,
        reactivity4,
        reactivity5
      ],
      githubUrl: "https://github.com/clara-cdp/Reactivity"
    }
  },
  {
    id: "taskomania",
    title: "TASKOMANIA",
    statusText: "COMPLETED",
    statusDetail: "Custom MVC Framework",
    description: "Task management application built using a custom PHP MVC Framework. Features advanced front-controller routing, query search filtering, task status toggles, and dual-persistence support for both JSON file storage and relational MySQL databases.",
    heroImage: taskomaniaHero,
    tags: ["PHP", "MVC", "TAILWIND CSS", "MYSQL", "JSON"],
    githubUrl: "https://github.com/clara-cdp/Task-O-mania",
    details: {
      client: "Bootcamp Team Project",
      role: "UI/UX Designer & Front/Back Developer",
      hero: toScreenshot2,
      deliverables: [
        "Custom PHP MVC routing engine with a Front Controller",
        "Unified Controller base class managing HTTP requests and views",
        "Task status tracking with start/finish state triggers",
        "Hybrid data persistence layer supporting both JSON files and MySQL"
      ],
      longDescription: [
        "## Custom MVC Architecture",
        "Taskomania was built as a core project to master the inner workings of the MVC architectural pattern. Instead of using a pre-existing framework, the application utilizes a custom-built routing engine that directs traffic through a Front Controller, mapping request paths to corresponding controller actions dynamically.",
        "## Advanced Routing & Controller Logic",
        "The custom framework implements controller abstractions to handle request payloads, input sanitization, and view rendering. Developers can switch persistence modes seamlessly without modifying the business logic, demonstrating high modularity and clean separation of concerns.",
        "## Flexible Persistence",
        "To support lightweight local environments as well as production systems, the application includes a dual-persistence strategy. Standard configurations load task states from JSON file structures, while the develop environment integrates with a relational MySQL database schema."
      ],
      gallery: [
        taskomaniaHero,
        toScreenshot2,
        toScreenshot3,
        toScreenshot4,
        toScreenshot5,
        toScreenshot6,
        toScreenshot7
      ],
      githubUrl: "https://github.com/clara-cdp/Task-O-mania"
    }
  },
  {
    id: "match-up-game",
    title: "MATCH UP!",
    statusText: "COMPLETED",
    statusDetail: "Vanilla JS & CSS",
    description: "Classic card matching memory game with dynamic theme decks (Japan, Mosaics, Dogs), customizable backdrops, responsive grid layouts, and a reactive speed-based scoring loop.",
    heroImage: matchUpHero,
    tags: ["HTML5", "CSS", "TAILWIND CSS", "JAVASCRIPT"],
    githubUrl: "https://github.com/clara-cdp/MATCH-UP-GAME",
    isSmall: true,
    details: {
      client: "Personal Project",
      role: "Frontend Developer & Designer",
      hero: projectDetailHero,
      deliverables: [
        "Responsive HTML5/CSS3 card layout and dynamic grids",
        "State management for card flipping and match verification",
        "Speed-based score multiplier tracking loop",
        "Dynamic theme settings (Japan, Mosaics, Dogs) switching assets on the fly"
      ],
      longDescription: [
        "## Core Gameplay Loop",
        "Match Up! is a memory card game built in pure Vanilla Javascript. The player's objective is to reveal pairs of matching cards within a grid. Card flip states are handled cleanly with CSS transition classes, resetting mismatching cards or freezing correct pairs depending on matching status.",
        "## Custom Themes & Styles",
        "The game supports three unique theme configurations (Japan, Mosaics, and Dogs) that inject specific asset packs and CSS styling. This shifts background gradients, card designs, and card backs seamlessly, creating a responsive and interactive frontend experience."
      ],
      gallery: [
        muScreenshot1,
        muScreenshot2,
        muScreenshot3,
        muScreenshot4,
        muScreenshot5,
        muScreenshot6
      ],
      githubUrl: "https://github.com/clara-cdp/MATCH-UP-GAME"
    }
  }
];
