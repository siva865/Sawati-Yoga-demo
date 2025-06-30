import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ViteFonts from 'vite-plugin-fonts'

export default defineConfig({
  plugins: [react()],
  server:{
    port:3000
  }

})
