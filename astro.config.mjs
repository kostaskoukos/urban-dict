import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import vercel from "@astrojs/vercel/edge";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [tailwind(), preact()],
  adapter: vercel()
});