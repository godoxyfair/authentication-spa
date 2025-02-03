import React from 'react';
import styles from './styles.module.scss';
import cn from 'classnames';

type Props = {
    className?: string;
};

/**
 *  Loader component.
 */
export const Loading = (props: Props) => {
    return (
        <div className={styles.container}>
            <div className={cn(styles.loader, props.className)}></div>
        </div>
    );
};
