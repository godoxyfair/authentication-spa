import React from 'react';
import styles from './styles.module.scss';
import { InformationDTO } from '../../../../../api/types';
import { ArrowRight } from '../../../../../ui-library/icon';
import { useTranslation } from 'react-i18next';

type Props = {
    item: InformationDTO;
};

/**
 * Project information component.
 */
export const InfoBlock: React.FC<Props> = (props: Props) => {
    const { item } = props;

    const { t } = useTranslation('app', { keyPrefix: 'main.mainPage' });

    return (
        <div className={styles.infoContainerGrid}>
            <div className={styles.projectInfoGrid}>
                <h2 className={styles.title}>{item.title}</h2>
                <div className={styles.tabloContainer}>
                    <div className={styles.tabloText}>
                        {item.stack}
                        <span />
                        {item.stack}
                    </div>
                </div>
            </div>
            <div className={styles.linkContainer}>
                <a href={item.link} className={styles.link} target='_blank' rel='noopener noreferrer'>
                    {t('projectInfo.link')} <ArrowRight height={'20'} width={'20'} />
                </a>
            </div>
        </div>
    );
};
