import { site, visibleSocials } from '@/data/site'
import { accentBorderBottom, accentHoverText } from '@/lib/accent'
import { cn } from '@/lib/cn'

const STRIPES =
  'repeating-linear-gradient(90deg, var(--color-c1) 0 40px, var(--color-c3) 40px 80px, var(--color-c2) 80px 120px, var(--color-c4) 120px 160px)'

export function Footer() {
  return (
    <footer className="relative z-[1] border-t-[3px] border-ink bg-card">
      <div className="h-[10px] border-b-[3px] border-ink" style={{ background: STRIPES }} />
      <div className="mx-auto flex max-w-[1040px] flex-wrap items-center justify-between gap-5 p-7">
        <div className="font-mono text-[13px] text-mute">
          © {new Date().getFullYear()} {site.name} · built with React + Tailwind ·{' '}
          <span className="animate-blink">▮</span>
        </div>
        <div className="flex flex-wrap gap-4 font-mono text-[13px]">
          {visibleSocials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className={cn('border-b-2', accentBorderBottom[social.accent], accentHoverText[social.accent])}
            >
              {social.label}
            </a>
          ))}
          <a href={site.kofi} target="_blank" rel="noreferrer" className="border-b-2 border-b-c3 hover:text-c3">
            Ko-fi ☕
          </a>
        </div>
      </div>
    </footer>
  )
}
