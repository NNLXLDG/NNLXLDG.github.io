// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://github.com/NNLXLDG/NNLXLDG.github.io',
  output: 'static',
  integrations: [mdx(), sitemap()],
});