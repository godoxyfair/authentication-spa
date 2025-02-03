import React from 'react';
import { FunctionComponent } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';
import { AuthRequestDtoValidationSchema } from './authValidation';
import { LoginInput, PasswordInput } from './components';
import { useSignInMutation } from '../../../api/authApi';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../ui-library';
import { ROUTE } from '../../router/routesName';
import cn from 'classnames';

export type SignInFormInputs = {
    login: string;
    password: string;
};

/**
 * Authentication form.
 */
export const SignInForm: FunctionComponent = () => {
    const methods = useForm<SignInFormInputs>({ reValidateMode: 'onSubmit', resolver: AuthRequestDtoValidationSchema });

    const navigate = useNavigate();
    const [signInMutation] = useSignInMutation();

    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
        setError,
    } = methods;

    const { t } = useTranslation('app', { keyPrefix: 'main.auth' });

    const onSubmit = async (data: SignInFormInputs) => {
        try {
            await signInMutation({ login: data.login, password: data.password }).unwrap();
            navigate(ROUTE.MAIN.FULL_PATH);
        } catch (error) {
            setError('password', { message: t('from.error') });
            console.log('error');
        }
    };

    return (
        <div className={styles.formContainer}>
            <div className={styles.futter} />
            <div className={cn(styles.futter, styles.futterRot)} />
            <form onSubmit={handleSubmit(onSubmit)} className={styles.from}>
                <h2 className={styles.title}>{t('from.title')}</h2>
                <LoginInput
                    placeholder={t('from.input.loginPlaceholder')}
                    {...register('login')}
                    error={errors.login}
                />

                <PasswordInput
                    placeholder={t('from.input.passwordPlaceholder')}
                    {...register('password')}
                    error={errors.password}
                />
                <Button type='submit' loading={isSubmitting} title={t('from.input.button')} />
            </form>
        </div>
    );
};
