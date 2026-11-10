import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Para GitHub Pages en https://USUARIO.github.io/vial-109/ descomenta:
// base: '/vial-109/',
export default defineConfig({
  plugins: [react()],
})
