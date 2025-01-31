import React, { forwardRef, InputHTMLAttributes } from 'react';
import { InputForm } from '../../../../../ui-components/Input/InputForm';
import { FieldError } from 'react-hook-form';

type Props = { label?: string; labelClass?: string; error?: FieldError } & InputHTMLAttributes<HTMLInputElement>;

export const PasswordInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
    return <InputForm type='text' id='password' ref={ref} {...props} />;
});

PasswordInput.displayName = 'PasswordInput';
