import cn from 'classnames';
import React from 'react';
import styles from './styles.less';

interface IProps {
    fixedHeight?: boolean;
}

/**
 * Компонент лоадера.
 */
export const Spinner: React.FC<IProps> = (props) => {
    const { fixedHeight = false } = props;

    return <div className={cn(styles.spinner, { [styles.fixedHeight]: fixedHeight })}>circular progress</div>;
};
