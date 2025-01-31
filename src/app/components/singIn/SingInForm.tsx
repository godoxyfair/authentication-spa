import React from 'react';
import { FunctionComponent } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';
import { AuthRequestDtoValidationSchema } from './authValidation';
import { LoginInput } from './components/loginInput/LoginInput';
import { PasswordInput } from './components/loginInput/PasswordInput';
import { useSignInMutation } from '../../../api/authApi';
import { useNavigate } from 'react-router-dom';

export type SignInFormInputs = {
    login: string;
    password: string;
};

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
            await signInMutation({ login: data.login, password: data.password });
            navigate('/main');
        } catch (e) {
            setError('password', { message: t('from.error') });
        }
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                // position: 'relative',
            }}
        >
            {/*<CometsAnimation />*/}
            <div
                style={{
                    minHeight: '400px',
                    minWidth: '400px',
                    borderRadius: '100px',
                    backgroundColor: 'rgba(65, 222, 157, 0.4)',
                    opacity: '0.6',
                    position: 'absolute',
                    top: '50%',
                    right: '50%',
                    transform: 'translate(50%, -50%)',
                }}
            />
            <div
                style={{
                    minHeight: '400px',
                    minWidth: '400px',
                    borderRadius: '100px',
                    backgroundColor: 'rgba(65, 222, 157, 0.4)',
                    opacity: '0.6',
                    position: 'absolute',
                    top: '50%',
                    right: '50%',
                    transform: 'translate(50%, -50%)',
                    rotate: '10deg',
                }}
            />
            <form onSubmit={handleSubmit(onSubmit)} className={styles.from}>
                <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px', textAlign: 'center' }}>
                    {t('from.title')}
                </h2>
                <LoginInput
                    // label={t('from.input.login')}
                    placeholder={t('from.input.loginPlaceholder')}
                    {...register('login')}
                    error={errors.login}
                />

                <PasswordInput
                    // label={t('from.input.password')}
                    placeholder={t('from.input.passwordPlaceholder')}
                    {...register('password')}
                    error={errors.password}
                />

                <button type='submit' className={styles.button}>
                    {isSubmitting ? 'loading' : t('from.input.button')}
                </button>
            </form>
        </div>
    );
};
