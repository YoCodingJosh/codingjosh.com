import type { Accent } from '@/lib/accent'

export interface UsesItem {
  name: string
  note: string
}

export interface UsesGroup {
  title: string
  glyph: string
  accent: Accent
  items: UsesItem[]
}

/**
 * PLACEHOLDER CONTENT from the design handoff. Fill in the real gear; the Uses page renders
 * whatever is here.
 */
export const usesGroups: readonly UsesGroup[] = [
  {
    title: 'EDITOR',
    glyph: '</>',
    accent: 'c2',
    items: [
      { name: 'VS Code', note: 'theme: ?' },
      { name: 'Font', note: 'JetBrains Mono?' },
      { name: 'Extensions', note: 'fill in' },
    ],
  },
  {
    title: 'TERMINAL',
    glyph: '>_',
    accent: 'c3',
    items: [
      { name: 'Shell', note: 'zsh + bash' },
      { name: 'Terminal app', note: 'Ghostty + Konsole + Kitty' },
      { name: 'Prompt', note: 'fill in' },
    ],
  },
  {
    title: 'HARDWARE',
    glyph: '▣',
    accent: 'c1',
    items: [
      { name: 'Machine', note: 'fill in' },
      { name: 'Keyboard', note: 'Realforce and HHKB' },
      { name: 'Monitor', note: 'fill in' },
    ],
  },
  {
    title: 'RETRO',
    glyph: '▶',
    accent: 'c4',
    items: [
      { name: 'Console', note: 'SNES? Genesis?' },
      { name: 'Handheld', note: 'fill in' },
      { name: 'Capture / display', note: 'fill in' },
    ],
  },
]
