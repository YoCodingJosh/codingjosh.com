import { ButtonLink } from './Button'

export function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-start justify-center gap-5 pt-6">
      <div className="font-mono text-[12px] tracking-[0.08em] text-mute">ERROR 404</div>
      <h1 className="font-display text-[56px] leading-none font-extrabold tracking-[-0.03em] md:text-[76px]">
        That page wandered off.
      </h1>
      <p className="max-w-[520px] text-[18px] leading-relaxed text-mute">
        Whatever you were looking for is not here. It may have never existed, which is on me.
      </p>
      <ButtonLink to="/" shadow="c1">
        ← Take me home
      </ButtonLink>
    </div>
  )
}
