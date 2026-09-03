import { env } from 'cloudflare:workers'
import { site } from '@/data/site'
import { cached } from './cache'

export type WatchStatus = 'watching' | 'completed' | 'on_hold' | 'dropped' | 'plan_to_watch'

export interface NowWatching {
  id: number
  title: string
  englishTitle: string | null
  url: string
  picture: string | null
  status: WatchStatus
  episodesWatched: number
  /** `null` when MAL does not know the episode count yet (airing shows). */
  totalEpisodes: number | null
  /** Josh's own score, `null` when unscored. */
  score: number | null
  /** Community mean score. */
  meanScore: number | null
  updatedAt: string
}

interface MalListEntry {
  node: {
    id: number
    title: string
    main_picture?: { medium?: string; large?: string }
    alternative_titles?: { en?: string }
    num_episodes?: number
    mean?: number
  }
  list_status: {
    status: WatchStatus
    score: number
    num_episodes_watched: number
    is_rewatching?: boolean
    updated_at: string
  }
}

const API = 'https://api.myanimelist.net/v2'
const FIELDS = 'list_status,num_episodes,mean,main_picture,alternative_titles'

/** Public list endpoint: needs only the client ID header, not OAuth, as long as the list is public. */
async function fetchList(status?: WatchStatus): Promise<MalListEntry[]> {
  const url = new URL(`${API}/users/${encodeURIComponent(site.mal.username)}/animelist`)
  url.searchParams.set('fields', FIELDS)
  url.searchParams.set('sort', 'list_updated_at')
  url.searchParams.set('limit', '1')
  if (status) url.searchParams.set('status', status)

  const response = await fetch(url, {
    headers: { 'X-MAL-CLIENT-ID': env.MAL_CLIENT_ID },
    // The home page loader awaits this; never let a slow upstream hold the whole page.
    signal: AbortSignal.timeout(6_000),
  })
  if (!response.ok) {
    throw new Error(`MyAnimeList responded ${response.status} for ${url.pathname}${url.search}`)
  }
  const body = (await response.json()) as { data?: MalListEntry[] }
  return body.data ?? []
}

function toNowWatching(entry: MalListEntry): NowWatching {
  const { node, list_status: list } = entry
  return {
    id: node.id,
    title: node.title,
    englishTitle: node.alternative_titles?.en || null,
    url: `https://myanimelist.net/anime/${node.id}`,
    picture: node.main_picture?.medium ?? node.main_picture?.large ?? null,
    status: list.status,
    episodesWatched: list.num_episodes_watched,
    totalEpisodes: node.num_episodes || null,
    score: list.score || null,
    meanScore: node.mean ?? null,
    updatedAt: list.updated_at,
  }
}

/** Something currently being watched, else the most recently touched entry of any status. */
async function fetchNowWatching(): Promise<NowWatching | null> {
  const [watching] = await fetchList('watching')
  const entry = watching ?? (await fetchList())[0]
  return entry ? toNowWatching(entry) : null
}

export async function loadNowWatching(): Promise<NowWatching | null> {
  if (!env.MAL_CLIENT_ID) {
    console.warn('MAL_CLIENT_ID is not set; skipping the MyAnimeList lookup')
    return null
  }
  const key = `mal:now-watching:${site.mal.username.toLowerCase()}`
  const result = await cached(key, { freshFor: 10 * 60, keepFor: 24 * 60 * 60 }, fetchNowWatching)
  return result ?? null
}
