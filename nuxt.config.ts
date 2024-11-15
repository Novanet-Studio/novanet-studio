// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@nuxt/fonts'],
  css: [
    '~/assets/css/main.css', // Importa el archivo de fuentes
  ],

  
  /* typescript: {
    typeCheck: true
  }, */
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
  components:true,
})