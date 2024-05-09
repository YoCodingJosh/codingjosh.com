// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true, },

  nitro: {
    preset: "cloudflare-pages",
  },

  modules: [
    "nitro-cloudflare-dev",
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    '@nuxtjs/color-mode',
    "@nuxt/image",
    "@vueuse/nuxt",
    "nuxt-security",
    "@nuxt/content"
  ],

  app: {
    head: {
      titleTemplate: "%s - CodingJosh",
    },
  },

  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    configPath: 'tailwind.config.ts',
  },

  colorMode: {
    classSuffix: '',
  },

  routeRules: {
    // '/': {
    //   prerender: true,
    // },
    '/api/**': { cors: true },
  },

  runtimeConfig: {
    public: {
      turnstileSiteKey: '', // NUXT_PUBLIC_TURNSTILE_SITE_KEY
    },
    turnstileSecretKey: '', // NUXT_TURNSTILE_SECRET_KEY
  },

  experimental: {
    componentIslands: true,
  },

  security: {
    csrf: true,
    sri: false, // sri breaks cloudflare pages (bad hash)
    headers: {
      // crossOriginEmbedderPolicy: process.env.NODE_ENV === 'development' ? 'unsafe-none' : 'require-corp',
      crossOriginEmbedderPolicy: 'unsafe-none',
      contentSecurityPolicy: {
        "script-src": ["'self'", "'unsafe-inline'", "https://static.cloudflareinsights.com/"],
        "img-src": ["'self'", "data:", "https://cdn.myanimelist.net", "https://s4.anilist.co/", "https://anilist.co/"],
      },
      crossOriginResourcePolicy: "cross-origin",
    },
  },

  content: {
    highlight: {
      theme: {
        default: 'light-plus',
        dark: 'dark-plus',
      },

      langs: [
        'c', 'cpp', 'csharp', 'typescript', 'ruby', 'python', 'sql', 'docker', 'erb', 'git-commit', 'git-rebase',
        'tsx', 'jsx',
      ]
    }
  }
})
