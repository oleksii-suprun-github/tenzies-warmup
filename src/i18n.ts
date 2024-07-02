import i18n, { Module } from 'i18next';
import { initReactI18next } from 'react-i18next';

import enGB from './locales/en-GB/translation.json';
import deDE from './locales/de-DE/translation.json';

interface CustomLanguageDetector extends Module {
  type: 'languageDetector';
  async: boolean;
  detect: (callback: (lng: string) => void) => void;
}

const customLanguageDetector: CustomLanguageDetector = {
  type: 'languageDetector',
  async: true,
  detect: (callback: (lng: string) => void) => {
    callback(navigator.language);
  },
};

i18n
  .use(customLanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources: {
      'en-GB': { translation: enGB },
      'de-DE': { translation: deDE },
    },
    fallbackLng: 'en-GB',
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
