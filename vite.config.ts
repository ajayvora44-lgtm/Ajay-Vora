import path from 'path';
import { defineConfig, loadEnv } from 'vite'; // <--- Added loadEnv here
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), ''); // <--- Fixed path to process.cwd()

  return {
    // This fixed the blank page issue on Vercel
    base: './', 

    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
    define: {
      // This allows your code to still use process.env
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GOOGLE_API_KEY': JSON.stringify(env.GEMINI_API_KEY) // Added this just in case
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});
