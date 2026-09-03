import type { Accent } from '@/lib/accent'

/** Short list for the FUN FACTS.TXT card on the home page. */
export const quickFacts: readonly string[] = [
  'ISFP-T, apparently',
  'Fluent in English, basic Japanese',
  'Powered by pizza and soda',
  'Retro, puzzle, and FPS games',
  'Big on anime and manga',
]

export interface FactCard {
  text: string
  /** `null` uses the plain card surface. */
  accent: Accent | null
  tilt: -1 | 1
}

/** Tilted cards on the About page. */
export const factCards: readonly FactCard[] = [
  { text: 'Enthusiastic about Japanese culture, anime, and manga.', accent: 'c3', tilt: -1 },
  { text: 'Avid enjoyer of junk food, especially pizza and soda.', accent: null, tilt: 1 },
  { text: 'Video games, especially retro, puzzle, and FPS.', accent: 'c2', tilt: 1 },
  { text: 'Always learning a new language or framework.', accent: null, tilt: -1 },
]

export const profileRows: ReadonlyArray<{ key: string; value: string }> = [
  { key: 'based', value: 'Kansas City' },
  { key: 'role', value: 'Full stack + architect' },
  { key: 'langs', value: 'EN · 日本語 (basic)' },
  { key: 'type', value: 'ISFP-T' },
]

export const skills = {
  love: ['TypeScript', 'Go', 'SQL', 'C#', 'JavaScript'],
  experienced: ['Ruby', 'PHP', 'C/C++', 'Java', 'Python'],
  frameworks:
    'React, Next.js, Astro, Vue.js, Nuxt, React Native (Expo), Ruby on Rails, Spring Boot, FastAPI.',
} as const

export const aboutCopy = {
  lead: "Hey there! I'm Josh, a software engineer from Kansas City who likes building things people actually enjoy using.",
  body: "I'm always learning something new. Whether it's crafting user-friendly software or poking at the latest tech, I'm up for the challenge. Collaboration is a big deal to me, and I get a lot out of helping other people level up.",
} as const
