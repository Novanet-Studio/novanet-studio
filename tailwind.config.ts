import { Style } from "#build/components";

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
    fontSize: {
      xl: [
        "3.125rem",
        {
          lineHeight: "3.44rem",
          fontWeight: "900",
        },
      ],
      "2xl": [
        "2.5rem",
        {
          lineHeight: "3.12rem",
          fontWeight: "900",
        },
      ],

      "3xl": [
        "1.8rem",
        {
          lineHeight: "2.19rem",
          fontWeight: "900",
        },
      ],

      "4xl": [
        "1.5rem",
        {
          lineHeight: "1.75rem",
          fontWeight: "700",
        },
      ],
      "5xl": [
        "1.3rem",
        {
          lineHeight: "1.75rem",
          fontWeight: "700",
        },
      ],
      "6xl": [
        "1.12rem",
        {
          lineHeight: "1.37rem",
          fontWeight: "400",
        },
      ],

      p1: [
        "2.2rem",
        {
          lineHeight: "2.81rem",
          fontWeight: "300",
        },
      ],
      p2: [
        "1.87rem",
        {
          lineHeight: "2.5rem",
          fontWeight: "400",
        },
      ],

      p3: [
        "1.375rem",
        {
          lineHeight: "1.75rem",
          fontWeight: "400",
        },
      ],
      p4: [
        "1.12rem",
        {
          lineHeight: "1.56rem",
          fontWeight: "400",
        },
      ],
    },

    extend: {
      fontFamily: {
        custom: ["Red Hat Display"],
      },
      colors: {
        azure: "#007FFF",
        "oxford-blue": "#001933",
        "columbia-blue": "#CCE5FF",
        white: "#ffffff",
        raspberry: "#DF1F5B",
        chartreuse: "#D6F630",
        "cadet-gray": "#959CA4",
      },

      backgroundImage: {
        "emblem-columbia-blue":
          "url('/assets/images/novanet-emblema-semicirculo-1.svg')",

        "azure-reverse":
          "url('/assets/images/novanet-emblema-semicirculo-2.svg')",

        "borde-emblem-columbia-blue":
          "url('/assets/images/novanet-emblema-semicirculo-borde-azul.svg')",

        "emblem-azure-reverse":
          "url('/assets/images/novanet-emblema-semicirculo-borde-azul-reverso.svg')",

        "Background-autronaut":
          "url('/assets/images/novanet-emblema-semicirculo-fondo-autronauta.svg')",

        "footer-texture": "url('/img/footer-texture.png')",
      },

      backgroundSize: {},

      backgroundOpacity: ["active"],
    },
  },
  plugins: [],
};
