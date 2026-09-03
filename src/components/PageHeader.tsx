interface PageHeaderProps {
  title: string
  sub?: string
}

/** Inner-page title block: 56px display heading plus a muted one-liner. */
export function PageHeader({ title, sub }: PageHeaderProps) {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="font-display text-[44px] leading-none font-extrabold tracking-[-0.03em] md:text-[56px]">
        {title}
      </h1>
      {sub && <p className="max-w-[560px] text-[17px] text-pretty text-mute">{sub}</p>}
    </div>
  )
}

interface SectionHeadingProps {
  children: string
  /** Optional accent dot before the heading (Projects page). */
  dot?: 'c1' | 'c2' | 'c3' | 'c4'
}

const DOT: Record<NonNullable<SectionHeadingProps['dot']>, string> = {
  c1: 'bg-c1',
  c2: 'bg-c2',
  c3: 'bg-c3',
  c4: 'bg-c4',
}

export function SectionHeading({ children, dot }: SectionHeadingProps) {
  return (
    <div className="flex items-center gap-3">
      {dot && <span className={`size-3 rounded-full border-2 border-ink ${DOT[dot]}`} />}
      <h2 className="font-display text-[26px] font-extrabold tracking-[-0.02em]">{children}</h2>
    </div>
  )
}

/** Mono uppercase label ("I REALLY LIKE", "FUN FACTS.TXT"). */
export function MonoLabel({ children, className = '' }: { children: string; className?: string }) {
  return (
    <div className={`font-mono text-[11px] tracking-[0.08em] text-mute ${className}`}>{children}</div>
  )
}
