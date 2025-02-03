import React from 'react';
import styles from './styles.module.scss';
import { CometsAnimation, BottomMenu } from '../../components';
import { useAppMediaQuery } from '../../../hooks/useAppMediaQuery';
import { ProjectBlock } from '../../components';
import { useGetInfoQuery } from '../../../api/infoApi';
import { Spinner } from '../../../ui-library';
import { ErrorScreen } from '../../components/error/ErrorScreen';
import { useTranslation } from 'react-i18next';
import { AboutCompany } from '../../components/aboutSection/AboutCompany';

/**
 * Main page.
 */
export const MainPage: React.FC = () => {
    const { isMobile } = useAppMediaQuery();
    const { t } = useTranslation('app', { keyPrefix: 'main.mainPage' });
    const { data: projectData, isLoading, isError } = useGetInfoQuery();
    const element = document.getElementById('footer');

    if (isLoading && element) {
        element.style.display = 'none';
        return <Spinner />;
    }

    if (isError && element) {
        element.style.display = 'none';
        return <ErrorScreen />;
    }

    return (
        <div className={styles.container}>
            <div className={styles.animationContainer}>
                <h1 className={styles.title}>{t('title')}</h1>
                <CometsAnimation />
            </div>
            <div className={styles.emptyBlock} />
            <div className={styles.about}>
                <p>{t('description.title')}</p>
                {!isMobile && (
                    <div className={styles.child}>
                        <p>{t('description.help')}</p>
                        <div className={styles.textContainer}>
                            <p>{t('description.text1')}</p>
                            <p>{t('description.text2')}</p>
                            <p>{t('description.text3')}</p>
                        </div>
                    </div>
                )}
                <p className={styles.place}>{t('description.location')}</p>
            </div>
            {projectData?.map((item) => <ProjectBlock key={item.id} item={item} />)}
            <AboutCompany />
            <BottomMenu />
        </div>
    );
};
