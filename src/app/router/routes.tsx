import React from 'react';
import { type RouteObject, Navigate } from 'react-router-dom';
import { AppLayout } from '../appLayout';
import { SignInScreen } from '../screens/auth/sign-in/SignInScreen';
import { MainPage } from '../screens/mainPage/MainPage';
import { ROUTE } from './routesName';

export const routes: RouteObject[] = [
    {
        path: `${ROUTE.AUTH.FULL_PATH}`,
        element: <SignInScreen />,
    },
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to={`${ROUTE.MAIN.FULL_PATH}`} />,
            },
            {
                path: `${ROUTE.MAIN.PATH}`,
                element: <MainPage />,
            },
        ],
    },
];
