import { type ProjectDetails } from '../../types/ProjectDetails';

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
    name: "Pop a Dots!",
    description: "a simple game that a friend and I worked on while in college. pop all of the dots! avoid the black dots!",
    tech: [ "Python 3", "Pygame" ],
    repo: "https://github.com/YoCodingJosh/CirclesGamePython",
    projectType: "open-source",
    unsupported: true,
  },
  {
    name: "Anime Stats for MyAnimeList",
    description: "a simple website that displays your anime stats from MyAnimeList",
    tech: [ "Vue 3", "TypeScript", "Vuetify", "Hono", "Cloudflare Workers", "Cloudflare Pages" ],
    repo: "https://github.com/YoCodingJosh/anime-stats-frontend",
    projectType: "open-source",
    underConstruction: true,
  },
  {
    name: "CodingJosh",
    description: "my personal website (you're on it!)",
    tech: [ "Nuxt 3", "TypeScript", "Tailwind CSS", "Vue 3", "Cloudflare Pages" ],
    projectType: "closed-source",
    customInfoString: "Will be open-sourced soon!",
  }
];
