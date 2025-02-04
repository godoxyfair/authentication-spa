import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.module.scss';
import star from '../../../resources/icons/stars.svg';
import { ToggleLanguageButton } from '../localization';
import { useTranslation } from 'react-i18next';
import { Button } from '../../../ui-library';
import { ROUTE } from '../../router/routesName';
import { useNavigate } from 'react-router-dom';

/**
 * Bottom sticky footer component.
 */
export const BottomMenu: React.FC = () => {
    const [appLayoutElement, setAppLayoutElement] = useState<HTMLElement | null>(null);

    const { t } = useTranslation('app', { keyPrefix: 'main.mainPage' });
    const navigate = useNavigate();

    useEffect(() => {
        const checkElement = () => {
            const element = document.getElementById('footer-actions');
            if (element) {
                setAppLayoutElement(element);
            }
        };

        checkElement();

        const observer = new MutationObserver(checkElement);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => observer.disconnect();
    }, []);

    const imageRef1 = useRef<HTMLImageElement | null>(null);
    const imageRef2 = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        const scrollContainer = document.getElementById('app-content-wrapper');

        const handleScroll = () => {
            if (imageRef1.current && imageRef2.current && scrollContainer) {
                const scrollY = scrollContainer.scrollTop;
                const rotationDegree = scrollY / 3;
                imageRef1.current.style.transform = `rotate(${rotationDegree}deg)`;
                imageRef2.current.style.transform = `rotate(${rotationDegree}deg)`;
            }
        };

        scrollContainer?.addEventListener('scroll', handleScroll);

        return () => {
            scrollContainer?.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleLogOut = () => {
        localStorage.removeItem('status');
        navigate(ROUTE.AUTH.FULL_PATH);
    };

    return (
        <>
            {!!appLayoutElement &&
                ReactDOM.createPortal(
                    <div className={styles.blockContainer}>
                        <div className={styles.actionBlock}>
                            <img ref={imageRef1} alt='icon' className={styles.icon} height={24} src={star} width={24} />
                            <img ref={imageRef2} alt='icon' className={styles.icon} height={24} src={star} width={24} />
                            <p>{t('bottomMenu.title')}</p>
                            <ToggleLanguageButton className={styles.button} />
                            <Button onClick={handleLogOut} className={styles.button} title={'LogOut'} />
                        </div>
                    </div>,
                    appLayoutElement,
                )}
        </>
    );
};
