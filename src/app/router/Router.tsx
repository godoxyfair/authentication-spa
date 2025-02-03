import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import styles from './stylesStarts.module.scss';
import { routes } from './routes';

const browserRouter = createBrowserRouter(routes);

/**
 * App routers.
 */
export const Router: React.FC = () => {
    // const navigate = useNavigate();

    // useEffect(() => {
    //     if (!isAuthenticated) {
    //         navigate('/');
    //     }
    // }, [isAuthenticated]);

    // if (!isAuthenticated) {
    //     return (
    //         <div className={styles.container}>
    //             <Spinner fixedHeight />
    //         </Box>
    //     );
    // }

    return <RouterProvider router={browserRouter} />;
};
