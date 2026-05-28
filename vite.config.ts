import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  build: {
    // Target modern browsers — smaller output
    target: 'es2020',
    // Warn on chunks > 500 kB
    chunkSizeWarningLimit: 500,

    rollupOptions: {
      output: {
        // Split heavy deps into separate cacheable chunks
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-three': ['three'],
          'vendor-r3f': ['@react-three/fiber', '@react-three/drei'],
          'vendor-gsap': ['gsap', '@gsap/react'],
          'vendor-emailjs': ['@emailjs/browser'],
          'vendor-globe': ['react-globe.gl'],
        },
      },
    },
  },

  // Optimise pre-bundling
  optimizeDeps: {
    include: ['react', 'react-dom', 'three', '@react-three/fiber', '@react-three/drei'],
  },
})
