# CodingJosh

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

This website is deployed to Cloudflare Pages (with Functions) using a Git hook to automatically deploy.

### Installation

```
$ npm install
```

### Local Development

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

```
$ npm run start-all
```

This command will start Wrangler which will start the local dev server. Wrangler will provide a local Cloudflare environment for development.

App will be usable at http://localhost:8788/

> [!NOTE]
> You should create a file `wrangler.toml` at the root (preferably copied from `wrangler.toml.template`)

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

> [!IMPORTANT]
> This section is not important since we deploy using a Git hook to Cloudflare.

Using SSH:

```
$ USE_SSH=true npm run deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
