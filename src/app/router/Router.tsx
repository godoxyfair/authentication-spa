import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes';

const browserRouter = createBrowserRouter(routes);

/**
 * App routers.
 */
export const Router: React.FC = () => {
    return <RouterProvider router={browserRouter} />;
};
