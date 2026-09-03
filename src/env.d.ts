/// <reference types="vite/client" />

// Secrets are not part of wrangler.jsonc, so `wrangler types` only knows about them when a
// `.dev.vars` file exists. Declaring them here keeps `env` typed on a fresh checkout.
declare namespace Cloudflare {
  interface Env {
    MAL_CLIENT_ID: string
    TURNSTILE_SECRET_KEY: string
  }
}
