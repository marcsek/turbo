import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { VitePluginFonts } from 'vite-plugin-fonts';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: '@ui', replacement: path.resolve(__dirname, 'src/components/ui') }],
  },
  plugins: [
    react(),
    VitePluginFonts({
      google: {
        families: [{ name: 'Roboto', styles: 'ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700' }],
      },
    }),
  ],
});
