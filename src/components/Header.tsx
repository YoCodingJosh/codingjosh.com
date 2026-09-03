import { Link, useLocation } from '@tanstack/react-router'
import { navItems } from '@/data/nav'
import { accentBg } from '@/lib/accent'
import { cn } from '@/lib/cn'
import { toggleTheme } from '@/lib/theme'

export function Header() {
  const pathname = useLocation({ select: (location) => location.pathname })

  return (
    <header className="relative z-[2] mx-auto flex max-w-[1040px] flex-wrap items-center justify-between gap-x-4 gap-y-3 px-7 py-[22px]">
      <Link
        to="/"
        className="flex items-center gap-2.5 font-mono text-[15px] font-semibold tracking-[-0.01em]"
      >
        <span className="size-[22px] rounded-[4px] border-2 border-ink bg-c1 shadow-hard-3" />
        <span>
          codingjosh<span className="text-c2">.com</span>
        </span>
      </Link>

      <nav className="ml-auto flex flex-wrap items-center justify-end gap-1.5">
        {navItems.map((item) => {
          const active = item.to === '/' ? pathname === '/' : pathname.startsWith(item.to)
          return (
            <Link
              key={item.to}
              to={item.to}
              aria-current={active ? 'page' : undefined}
              className={cn(
                'rounded-full border-2 px-3 py-[7px] font-mono text-[13px] transition-all duration-150',
                active
                  ? cn(accentBg[item.accent], 'border-ink text-on-accent shadow-hard-3')
                  : 'border-transparent hover:-translate-x-px hover:-translate-y-px hover:border-ink',
              )}
            >
              {item.label}
            </Link>
          )
        })}
        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
          className="ml-2 grid size-9 cursor-pointer place-items-center rounded-full border-2 border-ink bg-card font-mono text-[13px] font-semibold shadow-hard-3 transition-all duration-150 hover:-translate-x-px hover:-translate-y-px hover:shadow-hard-4"
        >
          <span className="dark:hidden">☼</span>
          <span className="hidden dark:inline">☾</span>
        </button>
      </nav>
    </header>
  )
}
