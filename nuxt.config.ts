// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss','@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',],
  runtimeConfig: {
    // Will be available in both server and client
    public: {
      jwtSecret: process.env.JWT_SECRET,
    }
  }
})
