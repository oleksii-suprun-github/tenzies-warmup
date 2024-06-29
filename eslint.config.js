import { FlatCompat } from '@eslint/eslintrc';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import js from '@eslint/js';
import parser from '@typescript-eslint/parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

const config = [
  {
    files: ['src/**/*.ts', 'src/**/*.tsx'],
    ignores: ['node_modules/**', 'dist/**', 'coverage/**'],
    languageOptions: {
      parser,
      globals: {
        jest: true,
        browser: true,
        node: true,
        es6: true,
      },
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        tsconfigRootDir: __dirname,
        project: './tsconfig.eslint.json',
      },
    },
  },
  ...compat.plugins(
    'react',
    'import',
    'prettier',
    'react-hooks',
    'jsx-a11y',
    'package-json',
    '@typescript-eslint',
    'deprecation',
  ),
  {
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {},
      },
    },
  },
];

export default config;
