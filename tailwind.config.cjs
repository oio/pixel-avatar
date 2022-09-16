/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        canary: "#FFC700",
        coral: "#FF6E4F",
        mint: "#51FFBC",
        royal: "#5551FF",
      },
    },
  },
  plugins: [],
};
