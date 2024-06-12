import { defineConfig, passthroughImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";
import pagefind from "astro-pagefind";
import fs from "node:fs";
import expressiveCode, { ExpressiveCodeTheme } from "astro-expressive-code";
import sitemap from "@astrojs/sitemap";
const jsoncString = fs.readFileSync(new URL(`./my-theme.jsonc`, import.meta.url), "utf-8");
const myTheme = ExpressiveCodeTheme.fromJSONString(jsoncString);

// https://astro.build/config
export default defineConfig({
  site : 'https://ravixui.com',
  build: {
    format: "file"
  },
  integrations: [tailwind(), svelte(), expressiveCode({
    themes: [myTheme]
  }), mdx(), pagefind(), sitemap(
    {
      filter: (page) => page !== 'https://ravixui.com/testPage'
    }
  )],
  output: "hybrid",
  adapter: cloudflare(),
  image: {
    service: passthroughImageService()
  }
});