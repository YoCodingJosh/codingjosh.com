import { type ProjectDetails } from '../../types/ProjectDetails';

// TODO: put this in a database

export const projectsData: ProjectDetails[] = [
  {
    name: "Kablam!",
    description: "a clone of an old video game",
    tech: [ "C++", "SDL2" ],
    repo: "https://github.com/YoCodingJosh/kablam",
    projectType: "open-source",
    underConstruction: true,
  },
  {
    name: "Chamber",
    description: "a basic X/Twitter clone. shout your thoughts into the echo chamber!",
    tech: [ "Ruby on Rails", "Ruby", "PostgreSQL", "Tailwind CSS", "Docker" ],
    projectType: "open-source",
    underConstruction: true,
  },
  {
    name: "Pop a Dots!",
    description: "a simple game that a friend and I worked on while in college. pop all of the dots! avoid the black dots!",
    tech: [ "Python 3", "Pygame" ],
    repo: "https://github.com/YoCodingJosh/CirclesGamePython",
    projectType: "open-source",
    unsupported: true,
  },
  {
    name: "Brick Blaster!",
    description: 'basic breakout clone',
    tech: [ 'Vue 3', 'TypeScript', 'HTML5 Canvas', 'Pinia' ],
    projectType: 'open-source',
    repo: 'https://github.com/YoCodingJosh/brick-blaster',
    url: 'https://brick-blaster.codingjosh.com/',
  },
  {
    name: "Anime Stats for MyAnimeList",
    description: "a simple website that displays your anime stats from MyAnimeList",
    tech: [ "TypeScript", "Vue 3", "Hono", "Vuetify", "Cloudflare Workers", "Cloudflare Pages" ],
    repo: "https://github.com/YoCodingJosh/anime-stats-frontend",
    url: "https://anime-stats.codingjosh.com/",
    projectType: "open-source",
    underConstruction: true,
  },
  {
    name: "CodingJosh",
    description: "my personal website (you're on it!)",
    tech: [ "TypeScript", "Nuxt 3", "Tailwind CSS", "Vue 3", "Cloudflare Pages", "Cloudflare D1" ],
    projectType: "open-source",
    repo: "https://github.com/YoCodingJosh/codingjosh.com",
    url: "https://codingjosh.com/",
  },
  {
    name: "keihatsu (啓発)",
    description: "a better confluence and jira with AI - still in the early R&D phase",
    tech: [ "TypeScript", "Next.js", "React", "Tailwind CSS", "Cloudflare Pages", "Cloudflare Workers", "Supabase", "PostgreSQL" ],
    projectType: "closed-source",
    underConstruction: true,
  },
];
