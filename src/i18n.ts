import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';
import cs from './messages/cs.json';
import en from './messages/en.json';

const resources = {
  cs: { translation: cs },
  en: { translation: en },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'cs',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
