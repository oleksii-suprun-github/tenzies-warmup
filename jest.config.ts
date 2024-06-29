const esModules = ['nanoid'].join('|');

module.exports = {
  preset: 'ts-jest/presets/default-esm',
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts', '!src/mocks/**'],
  coveragePathIgnorePatterns: ['src/App.tsx'],
  setupFilesAfterEnv: ['./config/jest/setupTests.js'],
  coverageDirectory: 'coverage/jest',
  testEnvironment: 'jsdom',
  modulePaths: ['<rootDir>/src'],
  transform: {
    '^.+\\.(ts|js|tsx|jsx)$': '@swc/jest',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)': '<rootDir>/config/jest/fileTransform.js',
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$',
    `/node_modules/(?!${esModules})`,
  ],

  moduleNameMapper: {
    '^nanoid(/(.*)|$)': 'nanoid$1',
    '^@/(.*)$': '<rootDir>/src/$1',
    '^components/(.*)$': '<rootDir>/src/Components/$1',
    '^utils/(.*)$': '<rootDir>/src/utils/$1',
    '^types/(.*)$': '<rootDir>/src/types/$1',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
  moduleFileExtensions: [
    'tsx',
    'ts',
    'web.js',
    'js',
    'web.ts',
    'web.tsx',
    'json',
    'web.jsx',
    'jsx',
    'node',
  ],
  resetMocks: true,
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  fakeTimers: { enableGlobally: true },
  injectGlobals: true,
};
