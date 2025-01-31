import React from 'react';
import { FunctionComponent } from 'react';
import { SignInForm } from '../../../components/singIn/SingInForm';
import { ToggleLanguageButton } from '../../../components/localization';
import styles from './styles.module.scss';
import { SkyAnimation } from '../../../components';
import { PaintAnimation } from '../../../components';
import { useAppMediaQuery } from '../../../../hooks/useAppMediaQuery';
import { Navigate } from 'react-router-dom';
import { ROUTE } from '../../../router/routesName';

export const SignInScreen: FunctionComponent = () => {
    const { isMobile } = useAppMediaQuery();
    const status = localStorage.getItem('status');

    if (status) {
        return <Navigate to={`${ROUTE.MAIN.FULL_PATH}/*`} />;
    }

    return (
        <>
            <div className={styles.wrap}>
                <div className={styles.languageToggler}>
                    <ToggleLanguageButton />
                </div>
                {isMobile ? <SkyAnimation /> : <PaintAnimation />}
                <div className={styles.formContainer}>
                    <div className={styles.formWrapper}>
                        <SignInForm />
                    </div>
                </div>
            </div>
        </>
    );
};
