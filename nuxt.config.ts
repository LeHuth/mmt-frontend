// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@nuxtjs/color-mode',
    '@pinia-plugin-persistedstate/nuxt', '@nuxt/devtools', '@nuxt/image', '@morev/vue-transitions/nuxt'],

  // @ts-ignore
  colorMode: {
    preference: 'light', // default theme
    fallback: 'light', // fallback theme
    dataValue: 'theme', // activate data-theme in <html> tag
    classSuffix: ''
  },

  css: ['~/assets/Fonts.css', '~/assets/index.scss', 'vue-simple-range-slider/css'],

  runtimeConfig: {
    // Will be available in both server and client
    public: {
      jwtSecret: process.env.JWT_SECRET,
      baseUrl: process.env.BASE_URL
    },
    server_jwtSecret: process.env.JWT_SECRET
  },

  app: {},

  devtools: {
    enabled: true
  },
  // @ts-ignore
  image: {
    format: ['webp'],
    domains: ['nuxtjs.org', 'midjourney.com', 'storage.googleapis.com']
  }
})
