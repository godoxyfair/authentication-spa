import React from 'react';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import { ROUTE } from './routesName';
import { SignInScreen } from '../screens/auth/sign-in/SignInScreen';
import { MainPage } from '../screens/mainPage/MainPage';
import { AppLayout } from '../appLayout';

//basename for gh-pages
// const browserRouter = createBrowserRouter(routes, { basename: '/authentication-spa' });

/**
 * App routers.
 */
export const Router: React.FC = () => {
    // return <RouterProvider router={browserRouter} />;
    return (
        <HashRouter>
            <Routes>
                <Route path={ROUTE.AUTH.FULL_PATH} element={<SignInScreen />} />
                <Route path='/' element={<AppLayout />}>
                    <Route path='/' index element={<Navigate to={ROUTE.MAIN.FULL_PATH} />} />
                    <Route path={ROUTE.MAIN.FULL_PATH} element={<MainPage />} />
                </Route>
            </Routes>
        </HashRouter>
    );
};
