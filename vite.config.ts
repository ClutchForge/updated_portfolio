import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Use a relative base so the build works on any static host or sub-path.
  base: './',
  plugins: [react(), tailwindcss()],
})
