import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    allowedHosts: [
      '51a1-2001-448a-50b0-4b30-70c4-7b94-da2c-86f4.ngrok-free.app'
    ]
  }
})
