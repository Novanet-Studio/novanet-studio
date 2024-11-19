// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  ssr: false,
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@nuxt/fonts"],
  css: [
    "~/assets/css/main.css", // Importa el archivo de fuentes
  ],

  fonts: { devtools: false,
    
    defaults: {
      weights: [300, 400, 700, 900],
      styles: ["normal", "italic"],
      fallbacks: {
        "sans-serif": ["Tahoma"],
      },
    },
    families: [
      // only resolve this font with the `google` provider
      { name: 'My Font Family', provider: 'google' },

    ]
  },

  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },

  components: true,
});
