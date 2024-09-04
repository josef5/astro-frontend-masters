import { defineConfig } from 'astro/config';

import react@2.1.1 from "@astrojs/react";
import solidJs@2.1.0 from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  integrations: [react@2.1.1(), solidJs@2.1.0()]
});