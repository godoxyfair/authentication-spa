import React from 'react';
import styles from './styles.module.scss';
import { Loading } from '../loading/Loading';

/**
 *  Spinner component.
 */
export const Spinner: React.FC = () => {
    return (
        <div className={styles.spinnerContainer}>
            <Loading className={styles.spinner} />
        </div>
    );
};
