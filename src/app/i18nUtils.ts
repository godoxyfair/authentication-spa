import { i18n } from 'i18next';
import i18nInstance, { AvailableLanguages } from './i18n';
import { ELanguage } from '../core/language';

export const changeLanguage = (language: ELanguage) => {
    if (Object.values(ELanguage).includes(language)) {
        i18nInstance.changeLanguage(language);
        console.log(`Язык успешно переключен на: ${language}`);
    } else {
        console.error(`Неверный код языка: ${language}`);
    }
};

export const invertLanguage = (lng: AvailableLanguages) => {
    return lng === 'ru' ? 'en' : 'ru';
};

export const getCurrentLanguage = (instance: i18n): AvailableLanguages => {
    return instance.resolvedLanguage as AvailableLanguages;
};
