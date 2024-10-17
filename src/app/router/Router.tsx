import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import styles from './styles.less';
import { routes } from './routes';

const browserRouter = createBrowserRouter(routes);

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
