import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Spotify-Mood-Frontend/',
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://www.fruityvice.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});