import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://ledidan.github.io/ov_pay_cicd",
  plugins: [react()],
})
