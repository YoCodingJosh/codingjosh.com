import { createFileRoute } from '@tanstack/react-router'
import { Chip } from '@/components/Chip'
import { MonoLabel, SectionHeading } from '@/components/PageHeader'
import { Polaroid } from '@/components/Polaroid'
import { aboutCopy, factCards, profileRows, skills } from '@/data/about'
import { accentAt, accentBg } from '@/lib/accent'
import { cn } from '@/lib/cn'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      { title: 'About · codingjosh.com' },
      { name: 'description', content: aboutCopy.lead },
    ],
  }),
  component: AboutPage,
})

function AboutPage() {
  return (
    <div className="grid items-start gap-14 pt-6 md:grid-cols-[300px_1fr]">
      <aside className="flex flex-col gap-5 md:sticky md:top-6">
        <Polaroid
          alt="Josh"
          caption="hi 👋"
          className="mx-auto w-full max-w-[300px] -rotate-2 px-2.5 pt-2.5 pb-[34px] shadow-hard-8 shadow-hard-c4"
          imgClassName="aspect-square w-full"
          captionClassName="bottom-2"
        />
        <dl className="flex flex-col gap-1.5 font-mono text-[13px]">
          {profileRows.map((row) => (
            <div key={row.key} className="flex justify-between border-b-2 border-dashed border-line py-1.5">
              <dt className="text-mute">{row.key}</dt>
              <dd>{row.value}</dd>
            </div>
          ))}
        </dl>
      </aside>

      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <h1 className="font-display text-[44px] leading-none font-extrabold tracking-[-0.03em] md:text-[56px]">
            About me
          </h1>
          <p className="text-[18px] leading-relaxed text-pretty">{aboutCopy.lead}</p>
          <p className="text-[17px] leading-[1.65] text-pretty text-mute">{aboutCopy.body}</p>
        </div>

        <div className="flex flex-col gap-3.5">
          <SectionHeading>Fun facts</SectionHeading>
          <div className="grid gap-3.5 sm:grid-cols-2">
            {factCards.map((fact) => (
              <div
                key={fact.text}
                className={cn(
                  'rounded-[12px] border-2 border-ink p-4 text-[15px] leading-normal shadow-hard-4 transition-transform duration-150 motion-safe:hover:rotate-0 motion-safe:hover:scale-[1.02]',
                  fact.accent ? cn(accentBg[fact.accent], 'text-on-accent') : 'bg-card',
                  fact.tilt < 0 ? '-rotate-1' : 'rotate-1',
                )}
              >
                {fact.text}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3.5">
          <SectionHeading>Skills</SectionHeading>
          <MonoLabel>I REALLY LIKE</MonoLabel>
          <div className="flex flex-wrap gap-2">
            {skills.love.map((skill, index) => (
              <Chip key={skill} accent={accentAt(index)} className="px-3 py-[7px] text-[13px] shadow-hard-3">
                {skill}
              </Chip>
            ))}
          </div>
          <MonoLabel className="mt-2">ALSO EXPERIENCED WITH</MonoLabel>
          <div className="flex flex-wrap gap-2">
            {skills.experienced.map((skill) => (
              <span
                key={skill}
                className="rounded-[8px] border-2 border-line bg-card px-3 py-[7px] font-mono text-[13px]"
              >
                {skill}
              </span>
            ))}
          </div>
          <MonoLabel className="mt-2">FRAMEWORKS</MonoLabel>
          <p className="text-[15px] leading-[1.7] text-mute">{skills.frameworks}</p>
        </div>
      </div>
    </div>
  )
}
