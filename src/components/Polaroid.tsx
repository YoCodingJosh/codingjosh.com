import { cn } from '@/lib/cn'

interface PolaroidProps {
  alt: string
  caption: string
  /** Frame: rotation, padding, width, shadow. */
  className?: string
  /** Image sizing. */
  imgClassName?: string
  captionClassName?: string
}

/** The portrait in a tilted polaroid frame. Used on Home and About with different tilts/shadows. */
export function Polaroid({ alt, caption, className, imgClassName, captionClassName }: PolaroidProps) {
  return (
    <div className={cn('relative border-[3px] border-ink bg-card', className)}>
      <img
        src="/josh_portrait.jpg"
        alt={alt}
        className={cn('block border-2 border-ink object-cover', imgClassName)}
      />
      <div
        className={cn(
          'absolute inset-x-0 bottom-2.5 text-center font-mono text-[12px] text-mute',
          captionClassName,
        )}
      >
        {caption}
      </div>
    </div>
  )
}
