import { defineConfig } from 'astro/config';
// import vercel from "@astrojs/vercel/serverless";
import vercel from "@astrojs/vercel/edge";
import tailwind from "@astrojs/tailwind";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [tailwind(), preact()]
});