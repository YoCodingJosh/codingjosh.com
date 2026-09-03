import { createServerFn } from '@tanstack/react-start'
import type { RevealResult } from '@/server/contact'

export type { RevealResult }

/** Public config the contact page needs to render the Turnstile widget. */
export const getContactConfig = createServerFn({ method: 'GET' }).handler(async () => {
  const { env } = await import('cloudflare:workers')
  return { siteKey: env.TURNSTILE_SITE_KEY as string }
})

/** Verifies the Turnstile token server-side, then returns the email address stored in KV. */
export const revealEmail = createServerFn({ method: 'POST' })
  .validator((input: unknown) => {
    const token =
      input && typeof input === 'object' && 'token' in input ? (input as { token: unknown }).token : null
    if (typeof token !== 'string' || token.length === 0) {
      throw new Error('Missing Turnstile token')
    }
    return { token }
  })
  .handler(async ({ data }): Promise<RevealResult> => {
    const { revealContactEmail } = await import('@/server/contact')
    return revealContactEmail(data.token)
  })
