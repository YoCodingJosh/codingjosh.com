import { queryOptions } from '@tanstack/react-query'
import { createServerFn } from '@tanstack/react-start'
import type { NowWatching } from '@/server/mal'

export type { NowWatching }

/**
 * Server function: the most recent MyAnimeList activity. The MAL client and KV cache live in a
 * server-only module that is imported lazily so nothing from `cloudflare:workers` reaches the browser.
 */
export const getNowWatching = createServerFn({ method: 'GET' }).handler(
  async (): Promise<NowWatching | null> => {
    const { loadNowWatching } = await import('@/server/mal')
    return loadNowWatching()
  },
)

export const nowWatchingQuery = queryOptions({
  queryKey: ['mal', 'now-watching'],
  queryFn: () => getNowWatching(),
  staleTime: 5 * 60 * 1000,
})

const STATUS_LABEL: Record<NowWatching['status'], string> = {
  watching: 'NOW WATCHING',
  completed: 'JUST FINISHED',
  on_hold: 'ON HOLD',
  dropped: 'DROPPED',
  plan_to_watch: 'UP NEXT',
}

export function nowWatchingLabel(item: NowWatching | null): string {
  return item ? STATUS_LABEL[item.status] : 'NOW WATCHING'
}

/** "ep 7 / 12 · ★ 8/10" */
export function episodeLine(item: NowWatching): string {
  const parts: string[] = []
  const total = item.totalEpisodes ? ` / ${item.totalEpisodes}` : ''
  parts.push(`ep ${item.episodesWatched}${total}`)
  if (item.score) parts.push(`★ ${item.score}/10`)
  return parts.join(' · ')
}
