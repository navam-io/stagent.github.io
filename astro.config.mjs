import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://stagent.io',
  integrations: [
    mdx(),
    sitemap({
      filter: (page) =>
        !page.includes('/confirmed') && !page.includes('/og'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
