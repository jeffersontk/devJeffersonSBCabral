import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import {sanityIntegration} from "@sanity/astro";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  integrations: [
    tailwind(), 
    sanityIntegration({
    projectId: "05a00f6m",
    dataset: "production",
    apiVersion: '2024-02-05',
    useCdn: false,
    // Access the Studio on your.url/admin
    studioBasePath: "/admin",
  }), 
  react()
]
});