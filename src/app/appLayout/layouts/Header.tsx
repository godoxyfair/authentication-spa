import cn from 'classnames';
import React from 'react';
import styles from '../styles.module.scss';

interface IProps {
    hidden?: boolean;
}

/**
 * Лэйаут хэдера приложения.
 */
export const Header: React.FC<React.PropsWithChildren<IProps>> = ({ children, hidden }) => (
    <div className={cn(styles.header, { [styles.hidden]: hidden })} id='header' content='header'>
        {children}
    </div>
);
