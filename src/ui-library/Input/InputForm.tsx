import React, { forwardRef, InputHTMLAttributes } from 'react';
import styles from './styles.module.scss';
import cn from 'classnames';
import { FieldError } from 'react-hook-form';

type Props = { label?: string; labelClass?: string; error?: FieldError } & InputHTMLAttributes<HTMLInputElement>;

/**
 * Input component.
 */
export const InputForm = forwardRef<HTMLInputElement, Props>((props: Props, ref) => {
    return (
        <div>
            {props.label ? (
                <label htmlFor='login' className={cn(styles.label, props.labelClass)}>
                    {props.label}
                </label>
            ) : undefined}
            <input ref={ref} {...props} className={cn(styles.input, props.className)} />
            <p className={styles.error}>{props.error ? props.error.message : ''}</p>
        </div>
    );
});

InputForm.displayName = 'InputForm';
