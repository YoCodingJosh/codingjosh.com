import { createFileRoute } from '@tanstack/react-router'
import { PageHeader } from '@/components/PageHeader'
import { type Post, posts, tagAccent } from '@/data/posts'
import { accentBg, accentHoverShadow } from '@/lib/accent'
import { cn } from '@/lib/cn'

const SUB = 'Notes on building things, mostly. Occasionally anime.'

export const Route = createFileRoute('/blog')({
  head: () => ({
    meta: [{ title: 'Writing · codingjosh.com' }, { name: 'description', content: SUB }],
  }),
  component: WritingPage,
})

function WritingPage() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date))

  return (
    <div className="flex max-w-[760px] flex-col gap-10 pt-6">
      <PageHeader title="Writing" sub={SUB} />
      <div className="flex flex-col gap-4">
        {sorted.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
        {sorted.length === 0 && (
          <p className="text-[15px] text-mute">Nothing published yet. The drafts folder is full, though.</p>
        )}
      </div>
    </div>
  )
}

function PostCard({ post }: { post: Post }) {
  const accent = tagAccent[post.tag]
  const className = cn(
    'grid items-start gap-5 rounded-[14px] border-2 border-ink bg-card p-5 shadow-hard-5 transition-all duration-150 sm:grid-cols-[110px_1fr]',
    post.href && cn('hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-hard-8', accentHoverShadow[accent]),
  )
  const body = (
    <>
      <div className="font-mono text-[12px] leading-relaxed text-mute">
        {post.date}
        <br />
        <span
          className={cn(
            'mt-1.5 inline-block rounded-[4px] border-2 border-ink px-2 py-0.5 text-on-accent',
            accentBg[accent],
          )}
        >
          {post.tag}
        </span>
      </div>
      <div className="flex flex-col gap-1.5">
        <h2 className="font-display text-[22px] font-bold tracking-[-0.01em]">{post.title}</h2>
        <p className="text-[15px] leading-[1.55] text-pretty text-mute">{post.excerpt}</p>
      </div>
    </>
  )

  return post.href ? (
    <a href={post.href} className={className}>
      {body}
    </a>
  ) : (
    <article className={className}>{body}</article>
  )
}
