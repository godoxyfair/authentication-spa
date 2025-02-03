import React from 'react';
import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';
import { useAppMediaQuery } from '../../../hooks/useAppMediaQuery';

/**
 * About components.
 */
export const AboutCompany: React.FC = () => {
    const { t } = useTranslation('app', { keyPrefix: 'main.mainPage' });
    const { isMobile } = useAppMediaQuery();

    return (
        <>
            <div className={styles.container}>
                {!isMobile && <div>{t('description.location')}</div>}
                <div className={styles.linkContainer}>
                    <a href={'https://linkedin.com/in/marta-igumenova'} target='_blank' rel='noopener noreferrer'>
                        LinkedIn
                    </a>
                    <a href={'https://github.com/godoxyfair'} target='_blank' rel='noopener noreferrer'>
                        GitHub
                    </a>
                    <a href={'mailto:maigumenova@gmail.com'} target='_blank' rel='noopener noreferrer'>
                        Email
                    </a>
                </div>
                <div className={styles.company}>© SMOOTH</div>
            </div>
            <h1 className={styles.companyTitle}>SMOOTH DESIGN</h1>
        </>
    );
};
