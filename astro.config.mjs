import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://posi2.github.io",
  output: "static",
  compressHTML: true,
  build: {
    format: "directory",
  },
  server: {
    port: 4321,
  },
});
