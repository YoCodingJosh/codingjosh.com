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
      { name: 'Prompt', note: 'fill in' },
    ],
  },
  {
    title: 'PERSONAL HARDWARE',
    glyph: '▣',
    accent: 'c1',
    items: [
      { name: 'Machine', note: 'Framework Desktop Max+ 395, 128GB RAM' },
      { name: 'OS', note: 'Fedora 44 KDE' },
      { name: 'Keyboard', note: 'Realforce R3S (30g, Full size)' },
      { name: 'Mouse', note: 'Razer Viper V3 Pro' },
      { name: 'Monitor', note: '32" 1440p 144Hz + 27" 1440p (Vertical) 75Hz' },
      { name: 'Terminal', note: 'Konsole' },
      { name: 'Shell', note: 'bash' },
    ],
  },
  {
    title: 'WORK HARDWARE',
    glyph: '💻',
    accent: 'c5',
    items: [
      { name: 'Machine', note: 'Macbook Pro, 16" M4 Pro, 24GB RAM' },
      { name: 'OS', note: 'macOS 26' },
      { name: 'Keyboard', note: 'HHKB Professional Hybrid Type-S (45g)' },
      { name: 'Mouse', note: 'Logitech MX Master 4' },
      { name: 'Monitor', note: '27" 1440p 180Hz, 24" WUXGA 75Hz' },
      { name: 'Terminal', note: 'Kitty and Ghostty' },
      { name: 'Shell', note: 'zsh' },
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
