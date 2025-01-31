import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18nInstance from './i18n';
import { Router } from './router/Router';
import { worker } from '../api/mocks/server';

export const App: React.FC = () => {
    worker.start();
    return (
        <I18nextProvider i18n={i18nInstance}>
            <Router />
        </I18nextProvider>
    );
};
