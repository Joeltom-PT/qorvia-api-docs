import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['zenscroll']
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/]
    }
  }
})
