import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import vue from '@vitejs/plugin-vue'
import pkg from "./package.json"

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: pkg.name,
      // formats: ['es'],
      fileName: "main"
    },
    outDir: "lib"
  },
  plugins: [vue(), dts()]
})
