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
    <div className="home-page">
      <Hero />
      <SelectedProjects />
      <NowRow />
      <WritingAndFacts />
      <section className="contact-banner">
        <div>
          <MonoLabel>GOOD THINGS START WITH A CONVERSATION</MonoLabel>
          <h2 className="mt-3 font-display text-[clamp(30px,4vw,44px)] leading-tight font-extrabold tracking-tight">
            Got something in mind?
          </h2>
          <p className="mt-3 text-mute">
            I’m open to interesting contract work and collaborations.
          </p>
        </div>
        <ButtonLink to="/contact" shadow="c2" className="shrink-0">
          Let’s talk ↗
        </ButtonLink>
      </section>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <div className="eyebrow">
          <span aria-hidden className="size-2 rounded-full bg-c2" />
          {site.eyebrow}
        </div>
        <h1 className="hero-title">
          Hey, I’m{' '}
          <span className="hero-name">
            Josh.
            <svg aria-hidden viewBox="0 0 260 22">
              <path d="M4 15Q120 0 254 11M22 21Q150 10 233 18" />
            </svg>
          </span>
        </h1>
        <p className="hero-lead">{site.lead}</p>
        <div className="flex flex-wrap gap-3 pt-2">
          <ButtonLink to="/projects" shadow="c1">
            Explore my work ↗
          </ButtonLink>
          <ButtonLink to="/about" variant="secondary">
            A little about me
          </ButtonLink>
        </div>
        <div className="hero-stack">
          <span className="font-mono text-[11px] text-mute">MY GO-TO TOOLS</span>
          <div className="flex flex-wrap gap-2">
            {site.heroChips.map((chip) => (
              <Chip key={chip.label} accent={null}>
                {chip.label}
              </Chip>
            ))}
          </div>
        </div>
      </div>
      <div className="portrait-scene">
        <div aria-hidden className="portrait-orbit" />
        <div aria-hidden className="portrait-dots" />
        <Polaroid
          alt="Josh wearing sunglasses, with an illustrated Morioh backdrop"
          caption="Josh Kennedy · Kansas City, MO"
          className="hero-polaroid"
          imgClassName="aspect-square w-full"
        />
        <span className="portrait-sticker">
          a person.
          <br />
          who codes.
        </span>
        <svg aria-hidden viewBox="0 0 80 80" className="portrait-spark">
          <path d="M40 4v72M4 40h72M14 14l52 52M14 66l52-52" />
        </svg>
      </div>
    </section>
  )
}

function SelectedProjects() {
  return (
    <section className="flex flex-col gap-7">
      <div className="section-title-row">
        <div>
          <MonoLabel>01 / THE WORK</MonoLabel>
          <h2 className="section-title">
            A few things I’m building<span className="text-c1">.</span>
          </h2>
        </div>
        <Link to="/projects" className="text-link">
          All projects ↗
        </Link>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {featuredProjects.map((project) => (
          <ActiveProjectCard key={project.slug} project={project} compact />
        ))}
      </div>
    </section>
  )
}

function NowRow() {
  return (
    <section className="flex flex-col gap-6">
      <div className="section-title-row">
        <div>
          <MonoLabel>02 / AWAY FROM THE README</MonoLabel>
          <h2 className="section-title">A little life lately.</h2>
        </div>
        <span className="font-mono text-xs text-mute">Code. Anime. One more level.</span>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <NowWatchingCard />
        <NowCard label={nowPlaying ? 'NOW PLAYING' : 'OFF THE CLOCK'} tilt={1}>
          <MediaRow
            cover={
              nowPlaying?.cover ? (
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
            title={nowPlaying?.title ?? 'A soft spot for retro games'}
            sub={nowPlaying?.meta ?? 'Retro, puzzle, and FPS favorites'}
          />
        </NowCard>
        <NowCard label="ON MY WORKBENCH" tilt={-1} inverted>
          <div className="font-display text-[19px] leading-[1.3] font-bold">
            {site.currently.headline}
          </div>
          <div className="text-[13px] opacity-75">{site.currently.sub}</div>
        </NowCard>
      </div>
    </section>
  )
}

function WritingAndFacts() {
  return (
    <section className="grid items-stretch gap-8 md:grid-cols-[1.2fr_1fr]">
      <div className="flex flex-col gap-4 py-2">
        <MonoLabel>03 / FIELD NOTES</MonoLabel>
        <h2 className="section-title mt-0">A space to think out loud.</h2>
        {recentPosts.length ? (
          recentPosts.map((post) => (
            <a key={post.slug} href={post.href} className="text-link py-3">
              {post.title} ↗
            </a>
          ))
        ) : (
          <p className="max-w-md text-[17px] leading-relaxed text-mute">
            Notes on building software, following rabbit holes, and figuring things out along the
            way. The first post is still ahead.
          </p>
        )}
        <Link to="/blog" className="text-link self-start">
          Visit the writing corner ↗
        </Link>
      </div>
      <div className="facts-note">
        <div className="flex items-center justify-between">
          <MonoLabel className="text-on-accent">A FEW THINGS ABOUT ME</MonoLabel>
          <span aria-hidden className="text-2xl">
            ✳
          </span>
        </div>
        <ul className="mt-3 flex flex-col gap-2.5 text-[16px]">
          {quickFacts.map((fact) => (
            <li key={fact} className="flex items-baseline gap-3">
              <span aria-hidden className="font-mono text-xs">
                ↳
              </span>
              {fact}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
