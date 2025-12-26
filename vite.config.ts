import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Fix 1: Load env correctly from current directory
  const env = loadEnv(mode, process.cwd(), '');

  return {
    // Fix 2: CRITICAL - This fixes the blank page on Vercel
    base: './',

    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
    define: {
      // Fix 3: Map your Vercel Key (VITE_GOOGLE_API_KEY) to what the app expects
      'process.env.API_KEY': JSON.stringify(env.VITE_GOOGLE_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.VITE_GOOGLE_API_KEY),
      'process.env.GOOGLE_API_KEY': JSON.stringify(env.VITE_GOOGLE_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});
