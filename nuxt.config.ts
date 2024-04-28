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
    sri: false, // breaks cloudflare pages
    headers: {
      crossOriginEmbedderPolicy: process.env.NODE_ENV === 'development' ? 'unsafe-none' : 'require-corp',
    },
  },
})
