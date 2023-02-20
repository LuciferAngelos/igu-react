import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import XHR from "i18next-http-backend"
import LanguageDetector from 'i18next-browser-languagedetector'
import en from './en.json';
import de from './de.json';
import enAu from './en-au.json';
import enCa from './en-ca.json';
import es from './es.json';
import frCa from './fr-ca.json';
import no from './no.json';
import ptBr from './pt-br.json';
import sk from './sk.json';

export const resources = {
  en: {
    translation: en
  },
  de: {
    translation: de
  },
  enAu: {
    translation: enAu
  },
  enCa: {
    translation: enCa
  },
  es: {
    translation: es
  },
  frCa: {
    translation: frCa
  },
  no: {
    translation: no
  },
  ptBr: {
    translation: ptBr
  },
  sk: {
    translation: sk
  },
};

const options = {
  order: ['querystring', 'navigator'],
  lookupQuerystring: 'lng'
}

i18n
  .use(XHR)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    detection: options,
    // lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
