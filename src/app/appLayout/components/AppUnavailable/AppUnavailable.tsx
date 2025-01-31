import React from 'react';
import { AppContentWrapper } from '../../layouts/AppContentWrapper';
import { Footer } from '../../layouts/Footer';
import { FooterContent } from '../FooterContent';

/**
 * Компонент-заглушка на уровне всего приложения о том, что сервис недоступен.
 */
export const AppUnavailable: React.FC = () => {
    return (
        <AppContentWrapper>
            <div>Unavailable</div>
            <Footer>
                <FooterContent />
            </Footer>
        </AppContentWrapper>
    );
};
