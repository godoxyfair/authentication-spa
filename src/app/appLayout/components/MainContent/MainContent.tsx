import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './styles.module.scss';

/**
 * Main content wrapper.
 */
export const MainContent: React.FC = () => {
    return (
        <>
            <div className={styles.mainOutlet} id='main-outlet'>
                <Outlet />
            </div>
        </>
    );
};
