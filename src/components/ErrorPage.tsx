import { type ErrorComponentProps, Link, useRouter } from '@tanstack/react-router'
import { buttonClasses } from './Button'

export function ErrorPage({ error }: ErrorComponentProps) {
  const router = useRouter()
  console.error(error)

  return (
    <div className="flex min-h-[50vh] flex-col items-start justify-center gap-5 pt-6">
      <div className="font-mono text-[12px] tracking-[0.08em] text-mute">SOMETHING BROKE</div>
      <h1 className="font-display text-[44px] leading-none font-extrabold tracking-[-0.03em] md:text-[56px]">
        Well, that's embarrassing.
      </h1>
      <p className="max-w-[520px] text-[17px] leading-relaxed text-mute">
        The page hit an error. Trying again usually fixes it; if not, it is probably my fault.
      </p>
      <div className="flex flex-wrap gap-3">
        <button type="button" onClick={() => router.invalidate()} className={buttonClasses('primary', 'c1')}>
          Try again
        </button>
        <Link to="/" className={buttonClasses('secondary')}>
          Go home
        </Link>
      </div>
    </div>
  )
}
