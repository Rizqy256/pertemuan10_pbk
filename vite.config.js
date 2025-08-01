import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') // biar bisa import '@/components/CartItem.vue' gitu
    }
  },
  test: {
    globals: true,
    environment: 'jsdom'
  }
})
