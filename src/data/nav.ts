import type { Accent } from '@/lib/accent'

export type NavPath = '/' | '/about' | '/projects' | '/blog' | '/uses' | '/contact'

export interface NavItem {
  to: NavPath
  label: string
  /** Fill colour of the pill while the route is active (cycles c1..c4 by index). */
  accent: Accent
}

export const navItems: readonly NavItem[] = [
  { to: '/', label: 'Home', accent: 'c1' },
  { to: '/about', label: 'About', accent: 'c2' },
  { to: '/projects', label: 'Projects', accent: 'c3' },
  { to: '/blog', label: 'Writing', accent: 'c4' },
  { to: '/uses', label: 'Uses', accent: 'c1' },
  { to: '/contact', label: 'Contact', accent: 'c2' },
]
