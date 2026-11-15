import { defineConfig } from 'astro/config';

// Static output, served from the GitHub Pages project sub-path.
export default defineConfig({
  output: 'static',
  site: 'https://haroon-fayyaz.github.io',
  base: '/receiptly',
});
