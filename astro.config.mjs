import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://aicareer.me',
  integrations: [
    sitemap({
      // Stamp every entry with a lastmod. Google uses lastmod to prioritise
      // recrawl; the default @astrojs/sitemap output omits it entirely. Build
      // time is an honest proxy here because the site only deploys when content
      // actually changes — this is not a high-frequency CI. `changefreq` and
      // `priority` are deliberately omitted: Google ignores both.
      serialize(item) {
        item.lastmod = new Date().toISOString();
        return item;
      },
    }),
    react(),
    tailwind({ applyBaseStyles: false }),
  ],
  output: 'static',
  build: {
    format: 'directory', // generates /risk/bookkeeper/index.html
  },
});
