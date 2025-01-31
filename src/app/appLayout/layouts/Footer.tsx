import cn from 'classnames';
import React from 'react';
import styles from '../styles.module.scss';

interface IProps {
    borderless?: boolean;
}

/**
 * Лэйаут футера приложения.
 */
export const Footer: React.FC<React.PropsWithChildren<IProps>> = ({ children, borderless }) => (
    <div className={cn(styles.footer, { [styles.borderless]: borderless })} id='footer'>
        {children}
    </div>
);
