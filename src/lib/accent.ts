/**
 * The four "Sunset" accents. Tailwind needs literal class names, so every accent-driven style is
 * expressed as a lookup table instead of a template string.
 */
export type Accent = 'c1' | 'c2' | 'c3' | 'c4' | 'c5'

export const accents: readonly Accent[] = ['c1', 'c2', 'c3', 'c4', 'c5']

/** Cycle through the accents by index (nav pills, skill chips, ...). */
export function accentAt(index: number): Accent {
  return accents[index % accents.length] ?? 'c1'
}

export const accentBg: Record<Accent, string> = {
  c1: 'bg-c1',
  c2: 'bg-c2',
  c3: 'bg-c3',
  c4: 'bg-c4',
  c5: 'bg-c5',
}

export const accentText: Record<Accent, string> = {
  c1: 'text-c1',
  c2: 'text-c2',
  c3: 'text-c3',
  c4: 'text-c4',
  c5: 'text-c5',
}

export const accentHoverText: Record<Accent, string> = {
  c1: 'hover:text-c1',
  c2: 'hover:text-c2',
  c3: 'hover:text-c3',
  c4: 'hover:text-c4',
  c5: 'hover:text-c5',
}

export const accentBorderBottom: Record<Accent, string> = {
  c1: 'border-b-c1',
  c2: 'border-b-c2',
  c3: 'border-b-c3',
  c4: 'border-b-c4',
  c5: 'border-b-c5',
}

/** Sets the colour used by the `shadow-hard-*` utilities. */
export const accentShadow: Record<Accent, string> = {
  c1: 'shadow-hard-c1',
  c2: 'shadow-hard-c2',
  c3: 'shadow-hard-c3',
  c4: 'shadow-hard-c4',
  c5: 'shadow-hard-c5',
}

export const accentHoverShadow: Record<Accent, string> = {
  c1: 'hover:shadow-hard-c1',
  c2: 'hover:shadow-hard-c2',
  c3: 'hover:shadow-hard-c3',
  c4: 'hover:shadow-hard-c4',
  c5: 'hover:shadow-hard-c5',
}

/** CSS custom property for use inside inline gradients. */
export function accentVar(accent: Accent): string {
  return `var(--color-${accent})`
}
