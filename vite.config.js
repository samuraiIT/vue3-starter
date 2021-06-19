const path = require('path')
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    // create an alias '/@' for the './src' path
    resolve: {
        alias: {
            '/@': path.resolve(__dirname, './src'),
        },
    },
    plugins: [vue()],
})
