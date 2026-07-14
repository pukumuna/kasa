import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/8710331-debutez-avec-react/' : '/',
  server: {
    watch: { usePolling: true, interval: 100 },
  },
}))
