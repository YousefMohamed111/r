import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig({
  base: "/r/",
  plugins: [react()],
  build: {
    outDir: 'build',  // تغيير المجلد الافتراضي للإخراج إلى 'build'
  },
})

