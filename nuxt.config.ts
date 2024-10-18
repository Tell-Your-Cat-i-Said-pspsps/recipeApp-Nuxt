// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2024-04-03',

  experimental: {
  },

  unhead: {
  },

  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/icon',
    '@nuxt/image'
  ],
  image:{
    domains:["https://cdn.dummyjson.com"]

  },
  googleFonts:{
    families:{
      Montserrat:true
    }
  }
})