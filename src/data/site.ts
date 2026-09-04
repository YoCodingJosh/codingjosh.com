import type { Accent } from '@/lib/accent'

export interface Social {
  label: string
  /** `null` hides the link until it is filled in. */
  href: string | null
  accent: Accent
}

export interface HeroChip {
  label: string
  /** `null` uses the plain card surface. */
  accent: Accent | null
}

const MAL_USERNAME = 'CodingJosh'

/** Global site facts. Anything page-specific lives next to its page in this folder. */
export const site = {
  name: 'Josh Kennedy',
  domain: 'codingjosh.com',
  title: 'codingjosh.com',
  description:
    "Josh Kennedy, full stack developer and architect in Kansas City. Projects, writing, and what I'm watching.",
  location: 'Kansas City',
  timeZone: 'America/Chicago',
  eyebrow: 'Kansas City · full stack developer & architect',
  lead: 'I build web apps that scale and, more importantly, are fun to use. Comfortable anywhere in the stack, from Postgres to pixels.',
  currently: {
    headline: 'Shipping a video streaming platform on Cloudflare Workers + Go.',
    sub: 'Open to interesting contract work.',
  },
  heroChips: [
    { label: 'TypeScript', accent: 'c2' },
    { label: 'Go', accent: 'c3' },
    { label: 'C#', accent: 'c4' },
    { label: 'React', accent: 'c1' },
    { label: 'SQL', accent: null },
  ] as readonly HeroChip[],
  mal: {
    /** Public MyAnimeList username. The API client ID is the `MAL_CLIENT_ID` secret. */
    username: MAL_USERNAME,
    profileUrl: `https://myanimelist.net/profile/${MAL_USERNAME}`,
  },
  socials: [
    { label: 'X', href: 'https://x.com/YoCodingJosh', accent: 'c4' },
    { label: 'GitHub', href: 'https://github.com/YoCodingJosh', accent: 'c1' },
    { label: 'MyAnimeList', href: `https://myanimelist.net/profile/${MAL_USERNAME}`, accent: 'c2' },
  ] as readonly Social[],
  kofi: 'https://ko-fi.com/Z8Z810D8H7',
}

export const visibleSocials = site.socials.filter(
  (social): social is Social & { href: string } => social.href !== null,
)
