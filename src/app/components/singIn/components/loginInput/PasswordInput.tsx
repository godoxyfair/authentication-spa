import React, { forwardRef, InputHTMLAttributes } from 'react';
import { InputForm } from '../../../../../ui-library';
import { FieldError } from 'react-hook-form';

type Props = { label?: string; labelClass?: string; error?: FieldError } & InputHTMLAttributes<HTMLInputElement>;

/**
 * Password input.
 */
export const PasswordInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
    return <InputForm type='text' id='password' ref={ref} {...props} />;
});

PasswordInput.displayName = 'PasswordInput';
