import { Link, type LinkProps } from '@tanstack/react-router'
import type { ReactNode } from 'react'
import { type Accent, accentShadow } from '@/lib/accent'
import { cn } from '@/lib/cn'

export const buttonBase =
  'inline-block cursor-pointer rounded-[10px] border-2 border-ink px-[22px] py-3 text-center font-display text-[16px] font-bold transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-0'

export function buttonClasses(variant: 'primary' | 'secondary', shadow?: Accent): string {
  return cn(
    buttonBase,
    variant === 'primary' ? 'bg-ink text-paper' : 'bg-card text-ink',
    'shadow-hard-4 hover:shadow-hard-6 disabled:hover:shadow-hard-4',
    shadow && accentShadow[shadow],
  )
}

interface ButtonLinkProps {
  to: LinkProps['to']
  variant?: 'primary' | 'secondary'
  /** Accent colour for the hard shadow; defaults to ink. */
  shadow?: Accent
  className?: string
  children: ReactNode
}

export function ButtonLink({ to, variant = 'primary', shadow, className, children }: ButtonLinkProps) {
  return (
    <Link to={to} className={cn(buttonClasses(variant, shadow), className)}>
      {children}
    </Link>
  )
}
