import type { ReactNode } from 'react'
import { type Accent, accentBg } from '@/lib/accent'
import { cn } from '@/lib/cn'

interface ChipProps {
  accent?: Accent | null
  className?: string
  children: ReactNode
}

/** Small mono label with an ink border: hero skills, skill chips, post tags. */
export function Chip({ accent, className, children }: ChipProps) {
  return (
    <span
      className={cn(
        'inline-block rounded-[6px] border-2 border-ink px-2.5 py-[5px] font-mono text-[12px]',
        accent ? cn(accentBg[accent], 'text-on-accent') : 'bg-card',
        className,
      )}
    >
      {children}
    </span>
  )
}

interface TagLinkProps {
  href: string
  accent?: Accent | null
  className?: string
  children: ReactNode
}

/** Tiny external link tag ("GitHub ↗", "Play! ▶"). */
export function TagLink({ href, accent, className, children }: TagLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn(
        'inline-block rounded-[6px] border-2 border-ink px-2.5 py-1 font-mono text-[12px] shadow-hard-2 transition-transform duration-150 hover:-translate-x-px hover:-translate-y-px',
        accent ? cn(accentBg[accent], 'text-on-accent') : 'bg-card',
        className,
      )}
    >
      {children}
    </a>
  )
}
