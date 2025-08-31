import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Untuk Vercel tidak perlu "base"
export default defineConfig({
  plugins: [react()]
})
