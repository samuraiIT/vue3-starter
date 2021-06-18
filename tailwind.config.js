/*
In your tailwind.config.js file, configure the purge option
with the paths to all of your pages and components so 
Tailwind can tree-shake unused styles in production builds:
---
Optimizing for Production Guide:
<https://tailwindcss.com/docs/optimizing-for-production>
*/
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};