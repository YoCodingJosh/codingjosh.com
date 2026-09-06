export interface NowPlaying {
  title: string
  /** e.g. "SNES · 1994" */
  meta: string
  /** Optional cover image URL; the striped placeholder is used when absent. */
  cover?: string
  href?: string
}

/**
 * Set a current game here when ready. Null shows general gaming interests instead.
 */
export const nowPlaying: NowPlaying | null = null
