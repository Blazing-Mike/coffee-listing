/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["DM Sans Variable", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('/bg-cafe.jpg')",
      },
      colors: {
        "dark-grey": "#1B1D1F",
        black: "#111315",
        "light-grey": "#6F757C",
        lemon: "#BEE3CC",
        yellow: "F6C768",
        "light-pink": "#FEF7EE",
        red: "#ED735D"
      },
    },
  },
  plugins: [],
};
