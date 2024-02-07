import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import { sanityIntegration } from "@sanity/astro";
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [tailwind(), sanityIntegration({
    projectId: "05a00f6m",
    dataset: "production",
    apiVersion: '2024-02-05',
    useCdn: false,
    // Access the Studio on your.url/admin
    studioBasePath: "/admin"
  }), react()],
  adapter: vercel({
    imageService: true,
  })
});