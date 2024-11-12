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
    colors: {
      'azure': '#007FFF',
      'oxford-blue': '#001933',
      'columbia-blue': '#CCE5FF',
      'white': '#ffffff',
      'raspberry': '#DF1F5B',
      'chartreuse': '#D6F630',
      'cadet-gray': '#959CA4'
    },
    extend: {
      backgroundImage: {
        'emblem-columbia-blue': "url('/assets/images/novanet-emblem-half-circle.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      backgroundOpacity: ['active'],
    },
  },
  plugins: [],
}
