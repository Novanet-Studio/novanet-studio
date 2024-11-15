/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Red Hat Display"', 'sans-serif'],
      },
    colors: {
      'azure': '#007FFF',
      'oxford-blue': '#001933',
      'columbia-blue': '#CCE5FF',
      'white': '#ffffff',
      'raspberry': '#DF1F5B',
      'chartreuse': '#D6F630',
      'cadet-gray': '#959CA4'
    },

      backgroundImage: {
        'emblem-columbia-blue': "url('/assets/images/novanet-emblema-semicirculo1.svg')",
        'azure': "url('/assets/images/novanet-emblema-semicirculo2",
        'borde-emblem-columbia-blue': "url('/assets/images/novanet-emblema-semicirculo-borde-azul",
        'borde-azure-reverse': "url('/assets/images/novanet-emblema-semicirculo-borde-azul-reverso",
        'Background-autronaut': "url('/assets/images/novanet-emblema-semicirculo-fondo-autronauta",
        'footer-texture': "url('/img/footer-texture.png')",
      },

      backgroundSize: {


      },

      backgroundOpacity: ['active'],
    },
  },
  plugins: [],
}
