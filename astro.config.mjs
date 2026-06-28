import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://aicareer.me',
  integrations: [sitemap(), react(), tailwind({ applyBaseStyles: false })],
  output: 'static',
  build: {
    format: 'directory', // generates /risk/bookkeeper/index.html
  },
});
