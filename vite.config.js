import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { config } from 'dotenv'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
