import { createFileRoute } from '@tanstack/react-router'
import { PageHeader, SectionHeading } from '@/components/PageHeader'
import { ActiveProjectCard, ShelfProjectCard } from '@/components/ProjectCard'
import { activeProjects, shelfProjects } from '@/data/projects'

const SUB = "Things I'm building right now, plus a shelf of older stuff that still works (mostly)."

export const Route = createFileRoute('/projects')({
  head: () => ({
    meta: [{ title: 'Projects · codingjosh.com' }, { name: 'description', content: SUB }],
  }),
  component: ProjectsPage,
})

function ProjectsPage() {
  return (
    <div className="flex flex-col gap-12 pt-6">
      <PageHeader title="Projects" sub={SUB} />

      <section className="flex flex-col gap-[18px]">
        <SectionHeading dot="c2">Active</SectionHeading>
        <div className="grid gap-5 md:grid-cols-3">
          {activeProjects.map((project) => (
            <ActiveProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-[18px]">
        <SectionHeading dot="c1">On the shelf</SectionHeading>
        <div className="grid gap-5 md:grid-cols-3">
          {shelfProjects.map((project) => (
            <ShelfProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  )
}
