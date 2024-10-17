import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEn from '../assets/i18n/en/translation.json';
import translationRu from '../assets/i18n/ru/translation.json';
import { ELanguage } from '../core/language';

const defaultNS = 'app';

export type TDefaultNS = typeof defaultNS;

const resources = {
    [ELanguage.EN]: {
        app: translationEn,
    },
    [ELanguage.RU]: {
        app: translationRu,
    },
} as const;

export type TResources = (typeof resources)[ELanguage.RU];

const i18nInstance = i18n.createInstance();

i18nInstance.use(initReactI18next).init({
    lng: navigator.language.split('-')[0].toUpperCase() || ELanguage.RU,
    ns: [defaultNS],
    fallbackLng: ELanguage.RU,
    resources,
    interpolation: {
        escapeValue: false,
    },
});

export default i18nInstance;
