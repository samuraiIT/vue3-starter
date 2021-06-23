/*
In your tailwind.config.js file, configure the purge option
with the paths to all of your pages and components so 
Tailwind can tree-shake unused styles in production builds:
---
Optimizing for Production Guide:
<https://tailwindcss.com/docs/optimizing-for-production>
*/
module.exports = {
    mode: 'jit',
    purge: ['./index.html', './src/**/*.{vue,js}'], // purge class from index.html and all vue.js files
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            // declare custom tailwind class (brand)
            colors: {
                brand: {
                    DEFAULT: '#FDB035',
                    light: '#FDC05D',
                    dark: '#F29602',
                },
            },
        },
    },
    plugins: [],
}
