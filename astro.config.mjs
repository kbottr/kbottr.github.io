// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // When you add a custom domain, change this to it (e.g. 'https://klausboettger.com').
  site: 'https://kbottr.github.io',
  image: {
    // Remote images Astro may download and optimise at build time.
    // Apple Music album covers are served from is1-ssl.mzstatic.com, is2-ssl…, etc.
    remotePatterns: [{ protocol: 'https', hostname: '**.mzstatic.com' }],
  },
});
