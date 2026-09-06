import { Link, useLocation } from '@tanstack/react-router'
import { useState } from 'react'
import { navItems } from '@/data/nav'
import { accentBg } from '@/lib/accent'
import { cn } from '@/lib/cn'
import { toggleTheme } from '@/lib/theme'

export function Header() {
  const pathname = useLocation({ select: (location) => location.pathname })
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <Link
        to="/"
        onClick={() => setOpen(false)}
        className="brand"
        aria-label="codingjosh.com home"
      >
        <span aria-hidden className="brand-mark">
          j.
        </span>
        <span>
          codingjosh<span className="text-mute">.com</span>
        </span>
      </Link>
      <div className="ml-auto flex items-center gap-3 md:order-2">
        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
          className="theme-toggle"
        >
          <svg
            aria-hidden
            viewBox="0 0 24 24"
            className="size-[18px]"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <circle cx="12" cy="12" r="8" />
            <path d="M12 4a8 8 0 0 1 0 16Z" fill="currentColor" stroke="none" />
          </svg>
        </button>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? 'Close ×' : 'Menu +'}
        </button>
      </div>
      <nav
        id="primary-nav"
        aria-label="Main navigation"
        className={cn('primary-nav', open && 'is-open')}
      >
        {navItems.map((item) => {
          const active = item.to === '/' ? pathname === '/' : pathname.startsWith(item.to)
          return (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              aria-current={active ? 'page' : undefined}
              className={cn('nav-link', active && cn(accentBg[item.accent], 'is-active'))}
            >
              {item.label}
            </Link>
          )
        })}
      </nav>
    </header>
  )
}
