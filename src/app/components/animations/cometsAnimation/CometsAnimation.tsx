import cn from 'classnames';
import React from 'react';
import styles from './styles.module.scss';

export const CometsAnimation = () => {
    return (
        <div className={styles.orbit}>
            {/*<div className={cn(styles.ball, { [styles.ball1]: true })}></div>*/}
            {/*<div className={cn(styles.ball, { [styles.ball2]: true })}></div>*/}
            <div className={cn(styles.ball, { [styles.ball1]: true })}></div>
            <div className={cn(styles.ball, { [styles.ball2]: true })}></div>
            <div className={cn(styles.ball, { [styles.ball3]: true })}></div>
        </div>
    );
};
