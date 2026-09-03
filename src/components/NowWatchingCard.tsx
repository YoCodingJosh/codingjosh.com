import { useSuspenseQuery } from '@tanstack/react-query'
import { site } from '@/data/site'
import { episodeLine, nowWatchingLabel, nowWatchingQuery } from '@/lib/now-watching'
import { CoverPlaceholder, MediaRow, NowCard } from './NowCard'

/** Live "now watching" card fed by MyAnimeList through a server function + KV cache. */
export function NowWatchingCard() {
  const { data } = useSuspenseQuery(nowWatchingQuery)

  if (!data) {
    return (
      <NowCard label="NOW WATCHING" tilt={-1}>
        <a href={site.mal.profileUrl} target="_blank" rel="noreferrer">
          <MediaRow
            cover={<CoverPlaceholder pattern="diagonal" />}
            title="Between shows"
            sub="nothing on deck · via MyAnimeList"
          />
        </a>
      </NowCard>
    )
  }

  return (
    <NowCard label={nowWatchingLabel(data)} tilt={-1}>
      <a href={data.url} target="_blank" rel="noreferrer" title={data.englishTitle ?? data.title}>
        <MediaRow
          cover={
            data.picture ? (
              <img
                src={data.picture}
                alt=""
                width={48}
                height={64}
                loading="lazy"
                className="h-16 w-12 flex-none border-2 border-ink object-cover"
              />
            ) : (
              <CoverPlaceholder pattern="diagonal" />
            )
          }
          title={data.title}
          sub={`${episodeLine(data)} · via MyAnimeList`}
        />
      </a>
    </NowCard>
  )
}
