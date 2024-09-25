import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: 'frontend',
  port:'3000', // Ensure this points to your frontend directory
  build: {
    outDir: 'build', // This is where the build will be output
    emptyOutDir: true // Clear the output directory before building
  },
});
