import React from 'react';
import styles from './styles.module.scss';
import miniLogo from '../../../../resources/icons/logo.svg';
import { useAppMediaQuery } from '../../../../hooks/useAppMediaQuery';

/**
 * Footer content wrapper
 */
export const FooterContent: React.FC = () => {
    const { isMobile } = useAppMediaQuery();

    if (isMobile) {
        return null;
    }

    return (
        <div className={styles.footerContent}>
            <div className={styles.bank}>
                <img alt='logo' className={styles.logo} height={20} src={miniLogo} width={20} />
                <div>{'2025'}</div>
            </div>
        </div>
    );
};
