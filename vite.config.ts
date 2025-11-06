import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  
  // Performance optimizations
  build: {
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'framer-motion': ['framer-motion'],
          'icons': ['react-icons'],
        },
      },
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
    // Minify for production using esbuild (faster than terser)
    minify: 'esbuild',
    // Target modern browsers for better optimization
    target: 'esnext',
    // Disable source maps in production
    sourcemap: false,
  },
  
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion'],
  },
  
  // Enable CSS code splitting
  css: {
    devSourcemap: false,
  },
  
  // Server optimization
  server: {
    hmr: {
      overlay: false, // Disable error overlay for better performance
    },
  },
})
