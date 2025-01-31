import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export const AuthRequestDtoValidationSchema = yupResolver(
    yup.object({
        login: yup.string().required('Login is required field'),
        password: yup.string().required('Password is required field'),
    }),
);
