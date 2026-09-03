import { Link, createFileRoute } from '@tanstack/react-router'
import { ButtonLink } from '@/components/Button'
import { Chip } from '@/components/Chip'
import { CoverPlaceholder, MediaRow, NowCard } from '@/components/NowCard'
import { NowWatchingCard } from '@/components/NowWatchingCard'
import { MonoLabel } from '@/components/PageHeader'
import { Polaroid } from '@/components/Polaroid'
import { ActiveProjectCard } from '@/components/ProjectCard'
import { quickFacts } from '@/data/about'
import { nowPlaying } from '@/data/now-playing'
import { recentPosts } from '@/data/posts'
import { featuredProjects } from '@/data/projects'
import { site } from '@/data/site'
import { nowWatchingQuery } from '@/lib/now-watching'

export const Route = createFileRoute('/')({
  loader: ({ context }) => context.queryClient.ensureQueryData(nowWatchingQuery),
  component: HomePage,
})

function HomePage() {
  return (
    <div className="flex flex-col gap-[72px]">
      <Hero />
      <NowRow />
      <SelectedProjects />
      <WritingAndFacts />
    </div>
  )
}

function Hero() {
  return (
    <section className="grid items-center gap-12 pt-9 md:grid-cols-[1.25fr_0.75fr]">
      <div className="flex flex-col gap-[22px]">
        <div className="inline-flex items-center gap-2 font-mono text-[12px] text-mute">
          <span className="size-2 rounded-full bg-c2" />
          {site.eyebrow}
        </div>
        <h1 className="font-display text-[52px] leading-[0.98] font-extrabold tracking-[-0.03em] text-balance md:text-[76px]">
          Hey, I'm{' '}
          <span className="relative isolate inline-block px-1.5">
            <span
              aria-hidden
              className="absolute inset-x-0 bottom-2 -z-10 h-[22px] -rotate-[1.5deg] bg-c3"
            />
            Josh.
          </span>
        </h1>
        <p className="max-w-[520px] text-[20px] leading-normal text-pretty">{site.lead}</p>
        <div className="mt-1.5 flex flex-wrap gap-3">
          <ButtonLink to="/projects" shadow="c1">
            See my projects →
          </ButtonLink>
          <ButtonLink to="/contact" variant="secondary">
            Say hi
          </ButtonLink>
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {site.heroChips.map((chip) => (
            <Chip key={chip.label} accent={chip.accent}>
              {chip.label}
            </Chip>
          ))}
        </div>
      </div>

      <div className="relative justify-self-center">
        <div className="absolute -top-[18px] -right-[14px] z-0 size-[74px] rounded-full bg-c1" />
        <div
          className="absolute bottom-6 -left-[26px] z-0 size-[90px]"
          style={{
            background: 'radial-gradient(var(--color-ink) 1.8px, transparent 2.2px) 0 0 / 12px 12px',
          }}
        />
        <Polaroid
          alt="Josh lookin fresh and ready to code"
          caption="josh_portrait.jpg · KC, MO"
          className="z-[1] w-[250px] rotate-3 px-3 pt-3 pb-10 shadow-hard-8 transition-transform duration-150 motion-safe:hover:rotate-0"
          imgClassName="size-[250px]"
        />
        <svg
          aria-hidden
          viewBox="0 0 120 20"
          className="absolute -right-[30px] -bottom-[14px] z-[2] w-[120px]"
        >
          <path
            d="M0 10 Q15 0 30 10 T60 10 T90 10 T120 10"
            fill="none"
            stroke="var(--color-c2)"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </section>
  )
}

function NowRow() {
  return (
    <section className="grid gap-5 md:grid-cols-3">
      <NowWatchingCard />
      <NowCard label="NOW PLAYING" tilt={1}>
        <MediaRow
          cover={
            nowPlaying.cover ? (
              <img
                src={nowPlaying.cover}
                alt=""
                width={48}
                height={64}
                className="h-16 w-12 flex-none border-2 border-ink object-cover"
              />
            ) : (
              <CoverPlaceholder pattern="vertical" />
            )
          }
          title={nowPlaying.title}
          sub={nowPlaying.meta}
        />
      </NowCard>
      <NowCard label="CURRENTLY" tilt={-1} inverted>
        <div className="font-display text-[17px] leading-[1.3] font-bold">{site.currently.headline}</div>
        <div className="text-[13px] opacity-75">{site.currently.sub}</div>
      </NowCard>
    </section>
  )
}

function SelectedProjects() {
  return (
    <section className="flex flex-col gap-[22px]">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="font-display text-[34px] font-extrabold tracking-[-0.02em]">Selected projects</h2>
        <Link to="/projects" className="border-b-2 border-b-c1 font-mono text-[13px] whitespace-nowrap">
          all projects →
        </Link>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {featuredProjects.map((project) => (
          <ActiveProjectCard key={project.slug} project={project} compact />
        ))}
      </div>
    </section>
  )
}

function WritingAndFacts() {
  return (
    <section className="grid items-start gap-12 md:grid-cols-2">
      <div className="flex flex-col gap-[18px]">
        <h2 className="font-display text-[34px] font-extrabold tracking-[-0.02em]">Latest writing</h2>
        <div className="flex flex-col">
          {recentPosts.map((post) => (
            <Link
              key={post.slug}
              to="/blog"
              className="flex items-baseline justify-between gap-4 border-b-2 border-dashed border-line py-3.5 transition-colors hover:text-c1"
            >
              <span className="font-display text-[18px] font-bold">{post.title}</span>
              <span className="font-mono text-[12px] whitespace-nowrap text-mute">{post.date}</span>
            </Link>
          ))}
          {recentPosts.length === 0 && (
            <p className="py-3.5 text-[15px] text-mute">Nothing published yet. Soon.</p>
          )}
        </div>
      </div>
      <div className="flex -rotate-1 flex-col gap-3 rounded-[14px] border-2 border-ink bg-c3 p-[26px] text-on-accent shadow-hard-5">
        <MonoLabel className="text-on-accent">FUN FACTS.TXT</MonoLabel>
        <ul className="list-disc pl-[18px] text-[15px] leading-[1.7]">
          {quickFacts.map((fact) => (
            <li key={fact}>{fact}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
