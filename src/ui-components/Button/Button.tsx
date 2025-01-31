import React from 'react';
import cn from 'classnames';
import { ReactNode } from 'react';
import { ButtonHTMLAttributes, forwardRef, PropsWithChildren } from 'react';
import styles from './styles.less';

export type ButtonProps = {
    loading?: boolean;
    loadingVariant?: 'replace' | 'startIcon';
    theme?: 'default' | 'secondary';
    startIcon?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * Компонент кнопки
 */
export const Button = forwardRef<HTMLAnchorElement | HTMLButtonElement, PropsWithChildren<ButtonProps>>(
    (props, ref) => {
        const { loading, theme = 'default', ...restProps } = props;

        const totalClassName = cn(styles.button, styles[`theme-${theme}`], {
            [styles.loading]: loading,
        });

        const { disabled, ...btnRestProps } = restProps as ButtonHTMLAttributes<HTMLButtonElement>;

        return (
            <button
                className={totalClassName}
                ref={ref as React.ForwardedRef<HTMLButtonElement>}
                type='button'
                disabled={disabled || loading}
                {...btnRestProps}
            >
                {btnRestProps.title}
            </button>
        );
    },
);
Button.displayName = 'Button';
