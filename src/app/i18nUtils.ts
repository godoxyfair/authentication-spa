import { i18n } from 'i18next';
import { AvailableLanguages } from './i18n';

export const invertLanguage = (lng: AvailableLanguages) => {
    return lng === 'ru' ? 'en' : 'ru';
};

export const getCurrentLanguage = (instance: i18n): AvailableLanguages => {
    return instance.resolvedLanguage as AvailableLanguages;
};
