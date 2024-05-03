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
    "nuxt-security"
  ],

  app: {
    head: {
      titleTemplate: "%s - CodingJosh",
    },
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
      crossOriginEmbedderPolicy: process.env.NODE_ENV === 'development' ? 'unsafe-none' : 'require-corp',
      contentSecurityPolicy: {
        "img-src": ["'self'", "data:", "https://cdn.myanimelist.net", "https://s4.anilist.co/", "https://anilist.co/"],
      },
    },
  },
})
