import {
  defineConfig,
  passthroughImageService,
} from "astro/config";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";

import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    svelte(),
    expressiveCode({
      themes: ["tokyo-night", "catppuccin-latte"],
    }),
    mdx()
  ],
  output: "hybrid",
  adapter: cloudflare(),
  image: {
    service: passthroughImageService(),
  },
});
