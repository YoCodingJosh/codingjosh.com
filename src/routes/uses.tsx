import { createFileRoute } from '@tanstack/react-router'
import { PageHeader } from '@/components/PageHeader'
import { usesGroups } from '@/data/uses'
import { accentBg } from '@/lib/accent'
import { cn } from '@/lib/cn'

const SUB = 'The stuff on my desk and in my dock.'

export const Route = createFileRoute('/uses')({
  head: () => ({
    meta: [{ title: 'Uses · codingjosh.com' }, { name: 'description', content: SUB }],
  }),
  component: UsesPage,
})

function UsesPage() {
  return (
    <div className="flex flex-col gap-10 pt-6">
      <PageHeader title="Uses" sub={SUB} />
      <div className="grid gap-5 md:grid-cols-2">
        {usesGroups.map((group) => (
          <section
            key={group.title}
            className="overflow-hidden rounded-[14px] border-2 border-ink bg-card shadow-hard-5"
          >
            <h2
              className={cn(
                'flex justify-between border-b-2 border-ink px-[18px] py-3 font-mono text-[12px] font-semibold tracking-[0.06em] text-on-accent',
                accentBg[group.accent],
              )}
            >
              <span>{group.title}</span>
              <span aria-hidden>{group.glyph}</span>
            </h2>
            <dl className="flex flex-col px-[18px] pt-2 pb-3.5">
              {group.items.map((item) => (
                <div
                  key={item.name}
                  className="flex justify-between gap-3 border-b-2 border-dashed border-line py-2.5 text-[15px]"
                >
                  <dt className="font-medium">{item.name}</dt>
                  <dd className="text-right text-[14px] text-mute">{item.note}</dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>
    </div>
  )
}
