import type { Project, ProjectArt } from '@/data/projects'
import { accentVar } from '@/lib/accent'
import { cn } from '@/lib/cn'
import { TagLink } from './Chip'

function artBackground({ kind, a, b }: ProjectArt): string {
  const fg = accentVar(a)
  const bg = accentVar(b)
  switch (kind) {
    case 'dots':
      return `radial-gradient(${fg} 2.5px, transparent 3px) 0 0 / 16px 16px, ${bg}`
    case 'zig':
      return `repeating-linear-gradient(135deg, ${fg} 0 10px, ${bg} 10px 20px)`
    case 'bars':
      return `repeating-linear-gradient(90deg, ${fg} 0 14px, ${bg} 14px 28px)`
  }
}

interface ActiveProjectCardProps {
  project: Project
  /** Home page variant: taller art, smaller title, no link tag. */
  compact?: boolean
}

export function ActiveProjectCard({ project, compact = false }: ActiveProjectCardProps) {
  return (
    <article
      className={cn(
        'flex flex-col overflow-hidden rounded-[14px] border-2 border-ink bg-card shadow-hard-5 transition-all duration-150 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-hard-8',
        project.tilt < 0 ? 'motion-safe:hover:-rotate-1' : 'motion-safe:hover:rotate-1',
      )}
    >
      <div
        className={cn('border-b-2 border-ink', compact ? 'h-[120px]' : 'h-[110px]')}
        style={project.art ? { background: artBackground(project.art) } : undefined}
      />
      <div className={cn('flex flex-1 flex-col p-[18px]', compact ? 'gap-2' : 'gap-2.5')}>
        <h3 className={cn('font-display font-bold', compact ? 'text-[19px]' : 'text-[20px]')}>
          {project.name}
        </h3>
        <p className="text-[14px] leading-[1.55] text-pretty text-mute">{project.blurb}</p>
        <div className="mt-auto flex items-center justify-between gap-2.5 pt-2">
          <span className="font-mono text-[11px] text-mute">{project.stack.join(' · ')}</span>
          {!compact && project.github && (
            <TagLink href={project.github} accent="c3">
              GitHub ↗
            </TagLink>
          )}
        </div>
      </div>
    </article>
  )
}

export function ShelfProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col gap-2.5 rounded-[14px] border-2 border-dashed border-ink bg-card p-[18px] transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:border-solid hover:shadow-hard-5">
      <h3 className="font-display text-[19px] font-bold">{project.name}</h3>
      <p className="text-[14px] leading-[1.55] text-pretty text-mute">{project.blurb}</p>
      <div className="mt-auto flex flex-wrap gap-2 pt-1.5">
        {project.github && <TagLink href={project.github}>GitHub ↗</TagLink>}
        {project.play && (
          <TagLink href={project.play} accent="c2">
            Play! ▶
          </TagLink>
        )}
      </div>
    </article>
  )
}
