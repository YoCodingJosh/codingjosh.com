import { env } from 'cloudflare:workers'

interface CacheEntry<T> {
  fetchedAt: number
  data: T
}

interface CacheOptions {
  /** Seconds a cached value is served without re-fetching. */
  freshFor: number
  /** Seconds the value is kept at all, so it can be served stale if the upstream fails. */
  keepFor: number
}

/**
 * Stale-while-error cache on top of the KV binding.
 * Returns `undefined` only when there is no cached value and the fetcher fails.
 */
export async function cached<T>(
  key: string,
  options: CacheOptions,
  fetcher: () => Promise<T>,
): Promise<T | undefined> {
  let entry: CacheEntry<T> | null = null
  try {
    entry = await env.KV.get<CacheEntry<T>>(key, 'json')
  } catch (error) {
    console.warn(`KV read failed for ${key}`, error)
  }

  if (entry && Date.now() - entry.fetchedAt < options.freshFor * 1000) {
    return entry.data
  }

  try {
    const data = await fetcher()
    const next: CacheEntry<T> = { fetchedAt: Date.now(), data }
    try {
      await env.KV.put(key, JSON.stringify(next), { expirationTtl: options.keepFor })
    } catch (error) {
      console.warn(`KV write failed for ${key}`, error)
    }
    return data
  } catch (error) {
    console.error(
      `Refresh failed for ${key}; ${entry ? 'serving stale data' : 'nothing cached'}`,
      error,
    )
    return entry?.data
  }
}
