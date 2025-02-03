import React from 'react';
import cn from 'classnames';
import { ReactNode } from 'react';
import { ButtonHTMLAttributes, forwardRef, PropsWithChildren } from 'react';
import styles from './styles.module.scss';
import { Loading } from '../loading/Loading';

export type ButtonProps = {
    loading?: boolean;
    loadingVariant?: 'replace' | 'startIcon';
    theme?: 'default' | 'secondary';
    startIcon?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * Button component
 */
export const Button = forwardRef<HTMLAnchorElement | HTMLButtonElement, PropsWithChildren<ButtonProps>>(
    (props, ref) => {
        const { loading, theme = 'default', className, ...restProps } = props;

        const totalClassName = cn(styles.button, className, styles[`theme-${theme}`], {
            [styles.loading]: loading,
        });

        const { disabled, ...btnRestProps } = restProps as ButtonHTMLAttributes<HTMLButtonElement>;

        return (
            <button
                className={totalClassName}
                ref={ref as React.ForwardedRef<HTMLButtonElement>}
                disabled={disabled || loading}
                type={btnRestProps.type}
                {...btnRestProps}
            >
                {loading ? <Loading /> : btnRestProps.title}
            </button>
        );
    },
);
Button.displayName = 'Button';
