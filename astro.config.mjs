// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // When you add a custom domain, change this to it (e.g. 'https://klausboettger.com').
  site: 'https://kbottr.github.io',
  // Writes sitemap-index.xml for search engines (linked from public/robots.txt).
  integrations: [sitemap({ filter: (page) => !page.endsWith('/404/') })],
  build: {
    // The CSS is small, so it goes straight into each page's <head>:
    // nothing blocks the first paint while a stylesheet downloads.
    inlineStylesheets: 'always',
  },
  // Internal pages are fetched in the background as soon as a link to them
  // is on screen, so clicking one (e.g. in the dock) opens instantly.
  // Skipped automatically when the visitor has data saver on.
  prefetch: { prefetchAll: true, defaultStrategy: 'viewport' },
  image: {
    // Remote images Astro may download and optimise at build time.
    // Apple Music album covers are served from is1-ssl.mzstatic.com, is2-ssl…, etc.
    remotePatterns: [{ protocol: 'https', hostname: '**.mzstatic.com' }],
  },
});
