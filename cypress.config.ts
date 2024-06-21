import { defineConfig } from "cypress";
import viteConfig from "./vite.config";

export default defineConfig({
  projectId: 'dq6bjd',
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
      viteConfig,
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
