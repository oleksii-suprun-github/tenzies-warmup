import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';
import fs from 'fs';
import path from 'path';

const loadTranslations = (locale) => {
  const translationsPath = path.resolve(__dirname, '../src/locales', locale, 'translation.json');
  const translations = JSON.parse(fs.readFileSync(translationsPath, 'utf8'));
  return translations;
};

const translations = loadTranslations('en-GB');

const interpolate = (str, vars) => {
  return str.replace(/\{\{(\w+)\}\}/g, (_, key) => vars[key] || '');
};

vi.mock('react-i18next', () => {
  return {
    useTranslation: () => ({
      t: (key, vars) => {
        const translation = translations[key] || key;
        return vars ? interpolate(translation, vars) : translation;
      },
      i18n: {
        changeLanguage: (lang) => {
          Object.assign(translations, loadTranslations(lang));
          return Promise.resolve();
        },
      },
    }),
  };
});
