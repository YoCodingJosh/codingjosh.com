# codingjosh.com

Personal site for Josh Kennedy. React + Tailwind on [TanStack Start](https://tanstack.com/start) with
TanStack Query, deployed to Cloudflare Workers.

## Stack

- **TanStack Start** for routing, SSR, and server functions (`src/routes`, `src/server`)
- **TanStack Query** for client caching of server data (`src/lib/*-query.ts` style modules)
- **Tailwind CSS v4** with the design tokens in `src/styles/app.css`
- **Cloudflare Workers** via `@cloudflare/vite-plugin` and Wrangler, with a KV namespace for caching

Site copy that is not yet driven by an API lives in `src/data/` so pages stay data-driven and easy to
swap for a real source later.

## Live data

- **Now watching** (`src/server/mal.ts`): pulls the most recently updated entry on the MyAnimeList
  list configured in `src/data/site.ts` and caches it in KV for 10 minutes (stale data is served if
  MAL is down). Needs the `MAL_CLIENT_ID` secret from <https://myanimelist.net/apiconfig>.
- **Contact email reveal** (`src/server/contact.ts`): verifies a Cloudflare Turnstile token, then reads
  the `contactStatus` key from KV. Needs the `TURNSTILE_SECRET_KEY` secret. The site key is a plain
  var in `wrangler.jsonc`.

## Local development

```bash
pnpm install
cp .dev.vars.example .dev.vars   # then fill in the secrets
pnpm dev                          # http://localhost:3000
```

Seed the local KV namespace with the contact status once:

```bash
pnpm wrangler kv key put --local --namespace-id=e59a4950bd764ebaa9a0bc909a45aae4 contactStatus \
  '{ "available": true, "message": "Contact is closed right now.", "email": "you@example.com" }'
```

## Deploying

```bash
pnpm wrangler secret put MAL_CLIENT_ID
pnpm wrangler secret put TURNSTILE_SECRET_KEY
pnpm run deploy
```

`pnpm run deploy` builds, type-checks, and runs `wrangler deploy`. `pnpm cf-typegen` regenerates
`worker-configuration.d.ts` after changing bindings in `wrangler.jsonc` (it also runs on install).
