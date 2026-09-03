export interface NowPlaying {
  title: string
  /** e.g. "SNES · 1994" */
  meta: string
  /** Optional cover image URL; the striped placeholder is used when absent. */
  cover?: string
  href?: string
}

/**
 * PLACEHOLDER from the design handoff. Hand-edit this when you start something new; a live source
 * (RetroAchievements, Steam, ...) can replace it later.
 */
export const nowPlaying: NowPlaying = {
  title: 'Retro game title',
  meta: 'SNES · 1994',
}
