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
    env: {
      NODE_ENV: 'testing',
      DEV_URL: 'http://localhost:5173/',
    },
    setupNodeEvents(on, config) {
      codeCoverageTask(on, config);
      return config;
    },
  },
});
