import path from 'path';
import { defineConfig, loadEnv } from 'vite'; // <--- 1. Fixed missing import
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // This loads all variables, including your VITE_GOOGLE_API_KEY
  const env = loadEnv(mode, process.cwd(), ''); 

  return {
    // 2. This 'base' line fixes the blank page issue
    base: './', 

    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
    
    // 3. This maps your Vercel variable to every possible name your code might use
    define: {
      'process.env.API_KEY': JSON.stringify(env.VITE_GOOGLE_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.VITE_GOOGLE_API_KEY),
      'process.env.GOOGLE_API_KEY': JSON.stringify(env.VITE_GOOGLE_API_KEY),
      'import.meta.env.GOOGLE_API_KEY': JSON.stringify(env.VITE_GOOGLE_API_KEY),
    },
    
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});
