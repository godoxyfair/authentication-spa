import React from 'react';
import { FooterContent } from './components/FooterContent';
import { HeaderContent } from './components/HeaderContent';
import { MainContent } from './components/MainContent';
import { AppContentWrapper } from './layouts/AppContentWrapper';
import { Footer } from './layouts/Footer';
import { Header } from './layouts/Header';
import { Main } from './layouts/Main';
import styles from './styles.module.scss';
import { Navigate } from 'react-router-dom';
import { ROUTE } from '../router/routesName';

/**
 * Main layout of the application.
 */
export const AppLayout: React.FC = () => {
    const status = localStorage.getItem('status');

    const renderContent = () => {
        if (!status) {
            return <Navigate to={ROUTE.AUTH.FULL_PATH} />;
        }

        return (
            <>
                <Header hidden>
                    <HeaderContent />
                </Header>

                <AppContentWrapper>
                    <Main>
                        <MainContent />
                    </Main>
                    <div className={styles.footerActions} id='footer-actions' />
                    <Footer>
                        <FooterContent />
                    </Footer>
                </AppContentWrapper>
            </>
        );
    };

    return (
        <div className={styles.appLayout} id='app-layout'>
            {renderContent()}
        </div>
    );
};
