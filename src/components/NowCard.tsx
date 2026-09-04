import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface NowCardProps {
  label: string
  tilt: -1 | 1
  /** Ink-filled card with paper text (the "CURRENTLY" card). */
  inverted?: boolean
  children: ReactNode
}

/** One of the three "now" cards under the hero. */
export function NowCard({ label, tilt, inverted = false, children }: NowCardProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-2.5 rounded-[14px] border-2 border-ink p-5 transition-transform duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5',
        tilt < 0 ? 'motion-safe:hover:-rotate-1' : 'motion-safe:hover:rotate-1',
        inverted ? 'bg-ink text-paper shadow-hard-5 shadow-hard-c3' : 'bg-card shadow-hard-5',
      )}
    >
      <div
        className={cn('font-mono text-[11px] tracking-[0.08em]', inverted ? 'opacity-70' : 'text-mute')}
      >
        {label}
      </div>
      {children}
    </div>
  )
}

interface CoverPlaceholderProps {
  /** Stripe direction: diagonal for anime, vertical for games. */
  pattern: 'diagonal' | 'vertical'
}

/** 48×64 striped stand-in for a cover image. */
export function CoverPlaceholder({ pattern }: CoverPlaceholderProps) {
  const background =
    pattern === 'diagonal'
      ? 'repeating-linear-gradient(45deg, var(--color-c4) 0 6px, var(--color-card) 6px 12px)'
      : 'repeating-linear-gradient(90deg, var(--color-c2) 0 6px, var(--color-card) 6px 12px)'
  return <div aria-hidden className="h-16 w-12 flex-none border-2 border-ink" style={{ background }} />
}

interface MediaRowProps {
  cover: ReactNode
  title: string
  sub: ReactNode
}

export function MediaRow({ cover, title, sub }: MediaRowProps) {
  return (
    <div className="flex items-center gap-3">
      {cover}
      <div className="flex min-w-0 flex-col gap-0.75">
        <div className="font-display text-[17px] leading-tight font-bold">{title}</div>
        <div className="text-[13px] text-mute">{sub}</div>
      </div>
    </div>
  )
}
