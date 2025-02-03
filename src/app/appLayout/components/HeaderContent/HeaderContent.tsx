import cn from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import logo from '../../../../resources/icons/logo.svg';
import { useAppMediaQuery } from '../../../../hooks/useAppMediaQuery';

/**
 * Header content wrapper.
 */
export const HeaderContent: React.FC = () => {
    const { isMobile } = useAppMediaQuery();

    const renderMobileContent = () => {
        return (
            <>
                <Link className={styles.profileLink} to={'/main'}>
                    <img alt='logo' className={styles.logo} height={24} src={logo} width={24} />
                </Link>
                <div className={styles.nameWrapper}>{/* <AccountWidget /> */}</div>
                <div className={styles.personal}>{/*<h1>Title</h1>*/}</div>
            </>
        );
    };

    const renderDefaultContent = () => {
        return (
            <div className={styles.container}>
                <div className={styles.logoContainer}>
                    <Link to={'/main'}>
                        <img alt='logo' className={styles.logo} height={26} src={logo} width={140} />
                    </Link>
                </div>
                <div className={styles.content}>{/*<h1>Title</h1>*/}</div>
            </div>
        );
    };

    const renderContent = () => {
        if (isMobile) {
            return renderMobileContent();
        }
        return renderDefaultContent();
    };

    return <div className={cn({ [styles.headerContent]: true, [styles.mobile]: isMobile })}>{renderContent()}</div>;
};
