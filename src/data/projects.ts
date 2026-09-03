import type { Accent } from '@/lib/accent'

export type ArtKind = 'dots' | 'zig' | 'bars'

export interface ProjectArt {
  kind: ArtKind
  /** Foreground accent. */
  a: Accent
  /** Background accent. */
  b: Accent
}

export interface Project {
  slug: string
  name: string
  blurb: string
  stack: string[]
  github?: string
  play?: string
  /** Active projects get the header art card; shelf projects get the dashed card. */
  status: 'active' | 'shelf'
  art?: ProjectArt
  /** Hover tilt direction in degrees for active cards. */
  tilt: -1 | 1
  /** Shown in the "Selected projects" row on the home page. */
  featured?: boolean
}

export const projects: readonly Project[] = [
  {
    slug: 'video-streaming',
    name: 'Video Streaming Site',
    blurb:
      'A platform for watching licensed media. Astro, Hono, and React on Cloudflare Workers up front; Go + Gin behind it; Postgres on Supabase.',
    stack: ['Astro', 'Hono', 'Go', 'Postgres'],
    status: 'active',
    art: { kind: 'dots', a: 'c1', b: 'c3' },
    tilt: -1,
    featured: true,
  },
  {
    slug: 'ai-business-software',
    name: 'AI-augmented business software',
    blurb:
      'AI utilities that smooth out day-to-day operations so stakeholders can make informed decisions.',
    stack: ['Hono', 'Workers', 'React', 'TanStack'],
    status: 'active',
    art: { kind: 'zig', a: 'c4', b: 'c2' },
    tilt: 1,
    featured: true,
  },
  {
    slug: 'kablam-go',
    name: 'Kablam Go!',
    blurb:
      'A clone of Kaboom, the Atari classic, written in Go with Ebitengine. Built to learn game dev in Go.',
    stack: ['Go', 'Ebitengine'],
    github: 'https://github.com/YoCodingJosh/kablam_go',
    status: 'active',
    art: { kind: 'bars', a: 'c2', b: 'c3' },
    tilt: -1,
    featured: true,
  },
  {
    slug: 'yozora',
    name: 'Yozora',
    blurb:
      'Developer utility for one-off stuff: UUIDs, base64, and more. Go with Wails, React + Tailwind frontend.',
    stack: ['Go', 'Wails', 'React'],
    github: 'https://github.com/HYPEWORKS/yozora',
    status: 'shelf',
    tilt: 1,
  },
  {
    slug: 'anime-stats',
    name: 'MyAnimeList Stats',
    blurb:
      "Pulls a user's latest MAL data and shows stats and fun facts. Rewrite in progress with React, Tailwind, and Hono.",
    stack: ['React', 'Hono'],
    github: 'https://github.com/YoCodingJosh/anime-stats',
    status: 'shelf',
    tilt: -1,
  },
  {
    slug: 'brick-blaster',
    name: 'Brick Blaster!',
    blurb: 'Simple breakout-style game in Vue.js + TypeScript on Canvas.',
    stack: ['Vue.js', 'TypeScript'],
    github: 'https://github.com/YoCodingJosh/brick-blaster',
    play: 'https://brick-blaster.codingjosh.com/',
    status: 'shelf',
    tilt: 1,
  },
]

export const activeProjects = projects.filter((project) => project.status === 'active')
export const shelfProjects = projects.filter((project) => project.status === 'shelf')
export const featuredProjects = projects.filter((project) => project.featured).slice(0, 3)
