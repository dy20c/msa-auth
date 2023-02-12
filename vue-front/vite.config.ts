import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8000,
    proxy: {
      '/welcome': {
        target: 'http://localhost:9000/welcome',
        changeOrigin: true
      }
    }
  }
})
