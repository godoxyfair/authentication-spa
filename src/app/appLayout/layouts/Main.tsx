import React from 'react';
import styles from '../styles.module.scss';

/**
 * Лэйаут основого контента.
 */
export const Main: React.FC<React.PropsWithChildren> = ({ children }) => (
    <div id='main-content' className={styles.main} content='main'>
        {children}
    </div>
);
