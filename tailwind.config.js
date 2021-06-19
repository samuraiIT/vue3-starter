/*
In your tailwind.config.js file, configure the purge option
with the paths to all of your pages and components so 
Tailwind can tree-shake unused styles in production builds:
---
Optimizing for Production Guide:
<https://tailwindcss.com/docs/optimizing-for-production>
*/
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js}"], // purge class from index.html and all vue.js files
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      // add interactions states not present by default in the tailwind toolbelt
      backgroundColor: ["active"],
      textColor: ["visited"],
    },
  },
  plugins: [],
};
