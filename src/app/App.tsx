import React from 'react';
import './App.css';
import { I18nextProvider } from 'react-i18next';
import i18nInstance from './i18n';

export const App: React.FC = () => {
    return <I18nextProvider i18n={i18nInstance}></I18nextProvider>;
};
