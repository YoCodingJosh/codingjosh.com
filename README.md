# CodingJosh.com

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

Initialize KV using something like this: `npx wrangler kv:key put --local --namespace-id=e59a4950bd764ebaa9a0bc909a45aae4 contactStatus '{ "available": false, "message": "Contact form is currently under construction." }'`

Download latest airport data for colo-info api here: https://data.opendatasoft.com/explore/dataset/airports-code%40public/table/

For CMS login, set `NUXT_AUTH_GITHUB_USER_ID` in .env to your account's GitHub account, get it here: https://api.github.com/users/your_github_user_name

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
