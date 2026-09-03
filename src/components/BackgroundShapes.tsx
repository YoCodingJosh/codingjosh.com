import type { CSSProperties } from 'react'

type DriftStyle = CSSProperties & { '--drift-duration'?: string; '--drift-direction'?: string }

function drift(duration: string, reverse = false): DriftStyle {
  return { '--drift-duration': duration, '--drift-direction': reverse ? 'reverse' : 'normal' }
}

/** Six floating memphis shapes behind the page. Purely decorative. */
export function BackgroundShapes() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 opacity-55">
      <div className="drift absolute top-[120px] left-[6%] size-[54px] rounded-full bg-c3" style={drift('11s')} />
      <div
        className="drift absolute top-[78px] right-[9%] size-[70px] bg-c2 [clip-path:polygon(50%_0,100%_100%,0_100%)]"
        style={drift('13s', true)}
      />
      <div
        className="drift absolute top-[520px] left-[3%] size-[120px] rounded-full opacity-50"
        style={{
          ...drift('16s'),
          background: 'radial-gradient(var(--color-ink) 1.6px, transparent 2px) 0 0 / 12px 12px',
        }}
      />
      <div
        className="drift absolute top-[640px] right-[5%] size-[60px] rounded-full border-[5px] border-c1"
        style={drift('12s', true)}
      />
      {/* Rotated wrapper so the diamond keeps its 45° while the inner box drifts. */}
      <div className="absolute top-[980px] left-[10%] size-12 rotate-45">
        <div className="drift size-full bg-c4" style={drift('14s')} />
      </div>
      <div
        className="drift absolute top-[1200px] right-[14%] h-[26px] w-[200px] opacity-60"
        style={{
          ...drift('18s', true),
          background: 'repeating-linear-gradient(135deg, var(--color-c1) 0 8px, transparent 8px 16px)',
        }}
      />
    </div>
  )
}
