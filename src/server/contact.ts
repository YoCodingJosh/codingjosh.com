import { env } from 'cloudflare:workers'

const TURNSTILE_VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify'

/** Shape of the `contactStatus` KV entry. Flip `available` to close the inbox without a deploy. */
interface ContactStatus {
  available: boolean
  message?: string
  email?: string
}

interface TurnstileVerification {
  success: boolean
  'error-codes'?: string[]
}

export type RevealResult = { ok: true; email: string } | { ok: false; message: string }

export async function revealContactEmail(token: string): Promise<RevealResult> {
  if (!env.TURNSTILE_SECRET_KEY) {
    console.warn('TURNSTILE_SECRET_KEY is not set; refusing to reveal the contact email')
    return { ok: false, message: 'Contact is not set up yet. Check back soon.' }
  }

  const verification = await fetch(TURNSTILE_VERIFY_URL, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ secret: env.TURNSTILE_SECRET_KEY, response: token }),
  })
  const result = (await verification.json()) as TurnstileVerification
  if (!result.success) {
    console.warn('Turnstile verification failed', result['error-codes'])
    return { ok: false, message: 'The human check did not pass. Reload and try again.' }
  }

  const status = await env.KV.get<ContactStatus>('contactStatus', 'json')
  if (!status) {
    console.error('KV key "contactStatus" is missing')
    return { ok: false, message: 'Contact info is missing right now. Try again later.' }
  }
  if (!status.available || !status.email) {
    return { ok: false, message: status.message ?? 'Contact is closed for now.' }
  }

  return { ok: true, email: status.email }
}
