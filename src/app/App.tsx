import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18nInstance from './i18n';
import { Router } from './router/Router';

export const App: React.FC = () => {
    return (
        <I18nextProvider i18n={i18nInstance}>
            <Router />
        </I18nextProvider>
    );
};
