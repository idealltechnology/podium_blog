import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from './assets/i18n/translations/en.json';

import translationAR from './assets/i18n/translations/ar.json';

const fallbackLng = ['en'];
const availableLanguages = ['en', 'arab'];

const resources = {
  en: {
    translation: translationEN
  },
  ar: {
    translation: translationAR
  }
};

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources,

  debug: false
});

export default i18n;
