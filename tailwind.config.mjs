const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Public Sans", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      colors: {
        primary: colors.blue,
        purple: {
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
        },
      },
      fontSize: {
        hero: ["4rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }], // 64px
        "hero-lg": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }], // 72px
      },
      spacing: {
        18: "4.5rem",
        20: "5rem",
        30: "7.5rem",
        128: "32rem",
        144: "36rem",
        160: "40rem",
        192: "48rem",
        256: "64rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
