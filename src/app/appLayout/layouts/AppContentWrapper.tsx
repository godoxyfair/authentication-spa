import React from 'react';
import styles from '../styles.module.scss';

/**
 * Layout wrapper of the application.
 */
export const AppContentWrapper: React.FC<React.PropsWithChildren> = ({ children }) => (
    <div className={styles.appContentWrapper} id='app-content-wrapper' content='app-content-wrapper'>
        {children}
    </div>
);
