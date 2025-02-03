import React from 'react';
import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';

export const ErrorScreen: React.FC = () => {
    const { t } = useTranslation('app', { keyPrefix: 'main.errorScreen' });

    return (
        <div className={styles.container}>
            <h1 className={styles.error}>{t('title')}</h1>
        </div>
    );
};
