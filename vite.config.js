import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/', // Explicit base URL (helps with asset paths)
  build: {
    outDir: 'dist',
    emptyOutDir: true, // Clears dist folder before rebuild
    chunkSizeWarningLimit: 1600, // Avoids chunk size warnings
  },
  server: {
    host: true // Needed for Netlify's live preview
  }
})
