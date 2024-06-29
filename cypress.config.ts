import { defineConfig } from 'cypress';
import codeCoverageTask from '@cypress/code-coverage/task';

export default defineConfig({
  projectId: 'dq6bjd',
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      codeCoverageTask(on, config);
      return config;
    },
  },
});
