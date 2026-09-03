import { Turnstile } from '@marsidev/react-turnstile'
import { useMutation } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { buttonClasses } from '@/components/Button'
import { visibleSocials } from '@/data/site'
import { accentHoverShadow } from '@/lib/accent'
import { cn } from '@/lib/cn'
import { getContactConfig, revealEmail } from '@/lib/contact'
import { useIsDark } from '@/lib/theme'

const SUB = 'Feel free to reach out. Click the button to reveal my email.'

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [{ title: 'Contact · codingjosh.com' }, { name: 'description', content: SUB }],
  }),
  loader: () => getContactConfig(),
  component: ContactPage,
})

function ContactPage() {
  const { siteKey } = Route.useLoaderData()

  return (
    <div className="grid min-h-[60vh] items-center gap-14 pt-6 md:grid-cols-2">
      <div className="flex flex-col gap-[18px]">
        <h1 className="font-display text-[44px] leading-none font-extrabold tracking-[-0.03em] md:text-[56px]">
          Say hi
        </h1>
        <p className="text-[18px] leading-relaxed text-pretty">{SUB}</p>
        <p className="text-[15px] leading-relaxed text-mute">
          Please be respectful of my time in your email. I'll try to get back to you as soon as I can.
        </p>
        <div className="mt-2 flex flex-wrap gap-2.5">
          {visibleSocials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className={cn(
                'rounded-[8px] border-2 border-ink bg-card px-3.5 py-2 font-mono text-[13px] shadow-hard-3 transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard-5',
                accentHoverShadow[social.accent],
              )}
            >
              {social.label} ↗
            </a>
          ))}
        </div>
      </div>

      <MailWindow siteKey={siteKey} />
    </div>
  )
}

function MailWindow({ siteKey }: { siteKey: string }) {
  const reveal = useMutation({
    mutationFn: (token: string) => revealEmail({ data: { token } }),
  })
  const email = reveal.data?.ok ? reveal.data.email : null

  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -top-6 -right-5 size-20 rotate-12 bg-c1 [clip-path:polygon(50%_0,100%_100%,0_100%)]"
      />
      <div className="relative flex rotate-1 flex-col gap-[18px] rounded-2xl border-[3px] border-ink bg-card p-7 shadow-hard-8">
        <div className="flex justify-between font-mono text-[11px] tracking-[0.08em] text-mute">
          <span>MAIL.EXE</span>
          <span aria-hidden>▁ ▢ ✕</span>
        </div>
        {email ? (
          <RevealedEmail email={email} />
        ) : (
          <RevealForm
            siteKey={siteKey}
            pending={reveal.isPending}
            error={
              reveal.data && !reveal.data.ok
                ? reveal.data.message
                : reveal.isError
                  ? 'Something broke on my end. Try again in a bit.'
                  : null
            }
            onSubmit={(token) => reveal.mutate(token)}
          />
        )}
      </div>
    </div>
  )
}

interface RevealFormProps {
  siteKey: string
  pending: boolean
  error: string | null
  onSubmit: (token: string) => void
}

function RevealForm({ siteKey, pending, error, onSubmit }: RevealFormProps) {
  const [token, setToken] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)
  const isDark = useIsDark()

  // Turnstile is client-only; mount it after hydration so it also picks up the right theme.
  useEffect(() => setMounted(true), [])

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(event) => {
        event.preventDefault()
        if (token && !pending) onSubmit(token)
      }}
    >
      <div
        className="flex min-h-[100px] items-center justify-center rounded-lg border-2 border-dashed border-line p-3 text-center font-mono text-[12px] text-mute"
        style={{
          background: 'repeating-linear-gradient(135deg, transparent 0 10px, var(--color-paper) 10px 20px)',
        }}
      >
        {mounted ? (
          <Turnstile
            siteKey={siteKey}
            onSuccess={setToken}
            onExpire={() => setToken(null)}
            onError={() => setToken(null)}
            options={{ theme: isDark ? 'dark' : 'light', size: 'flexible' }}
          />
        ) : (
          <span>[ loading human check… ]</span>
        )}
      </div>
      <button type="submit" disabled={!token || pending} className={buttonClasses('primary', 'c2')}>
        {pending ? 'Checking…' : '✉ Show my email'}
      </button>
      {error && (
        <p role="alert" className="text-center font-mono text-[12px] text-c1">
          {error}
        </p>
      )}
    </form>
  )
}

function RevealedEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
    } catch {
      // Clipboard can be blocked; the address is still readable on screen.
    }
  }

  return (
    <div className="flex flex-col items-center gap-2.5 py-3">
      <button
        type="button"
        onClick={copy}
        title="Copy to clipboard"
        className="cursor-pointer rounded-lg border-2 border-ink bg-c3 px-4 py-2.5 font-mono text-[18px] font-semibold text-on-accent select-none sm:text-[22px]"
      >
        {email}
      </button>
      <div className="text-[14px] text-mute" aria-live="polite">
        {copied ? 'Copied? Cool. Talk soon.' : 'Click it to copy. Talk soon.'}
      </div>
    </div>
  )
}
