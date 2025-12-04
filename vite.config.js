import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/savecontact/',   // ✅ THIS IS REQUIRED
  plugins: [react()],
  server: {
    port: 5173
  }
})
