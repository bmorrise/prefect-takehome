import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';

import LanguageDetector from 'i18next-browser-languagedetector';

export type TranslationKeys = keyof typeof en;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    resources: {
      en: {
        translation: en,
      }
    }
  });


export default i18n;