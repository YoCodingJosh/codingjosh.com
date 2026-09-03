import type { Accent } from '@/lib/accent'

export type PostTag = 'go' | 'infra' | 'react' | 'anime'

export interface Post {
  slug: string
  title: string
  /** ISO date, YYYY-MM-DD. */
  date: string
  tag: PostTag
  excerpt: string
  /** Where the card links. Cards without one are not clickable yet. */
  href?: string
}

export const tagAccent: Record<PostTag, Accent> = {
  go: 'c2',
  infra: 'c1',
  react: 'c4',
  anime: 'c3',
}

/**
 * PLACEHOLDER CONTENT from the design handoff. Replace with real posts (MDX or a CMS) before
 * these go live; the Writing page and the home "Latest writing" list both read from here.
 */
export const posts: readonly Post[] = [
  {
    slug: 'cloning-kaboom-in-go',
    title: 'Cloning Kaboom in Go with Ebitengine',
    date: '2026-08-14',
    tag: 'go',
    excerpt: 'What a 1981 Atari game taught me about game loops, input timing, and keeping scope small.',
  },
  {
    slug: 'go-api-next-to-workers',
    title: 'Running a Go API next to Cloudflare Workers',
    date: '2026-07-02',
    tag: 'infra',
    excerpt:
      'Where the edge helps, where it gets in the way, and how I split the streaming platform between the two.',
  },
  {
    slug: 'hono-tanstack-six-months',
    title: 'Hono + TanStack Router, six months in',
    date: '2026-05-19',
    tag: 'react',
    excerpt: 'Notes from shipping a business app on a lightweight stack. Mostly good news.',
  },
  {
    slug: 'rewriting-mal-stats',
    title: 'Rewriting my MyAnimeList stats app (again)',
    date: '2026-03-08',
    tag: 'anime',
    excerpt: 'Third time is the charm. This one has a real data model.',
  },
]

export const recentPosts = [...posts]
  .sort((a, b) => b.date.localeCompare(a.date))
  .slice(0, 3)
