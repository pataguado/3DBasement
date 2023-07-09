import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Add MIME type configuration
    mimeTypes: {
      'text/jsx': ['js'] // Configure the MIME type for JSX files
    }
  }
});
