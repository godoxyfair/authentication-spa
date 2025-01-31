import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import ReactDOM from 'react-dom';
import { CometsAnimation } from '../../components';
import star from '../../../resources/icons/stars.svg';

export const MainPage: React.FC = () => {
    const [appLayoutElement, setAppLayoutElement] = useState<HTMLElement | null>(null);

    useEffect(() => {
        const checkElement = () => {
            const element = document.getElementById('footer-actions');
            if (element) {
                setAppLayoutElement(element);
            }
        };

        checkElement(); // Проверяем сразу

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
                const rotationDegree = scrollY / 3; // Пропорциональное вращение на основе прокрутки
                imageRef1.current.style.transform = `rotate(${rotationDegree}deg)`;
                imageRef2.current.style.transform = `rotate(${rotationDegree}deg)`; // Применяем вращение
            }
        };

        scrollContainer?.addEventListener('scroll', handleScroll);

        // Очистка события при размонтировании компонента
        return () => {
            scrollContainer?.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.animationContainer}>
                <h1 className={styles.title}>Building bold webs for brave companies</h1>
                <CometsAnimation />
            </div>
            <div className={styles.emptyBlock} />
            <div className={styles.about}>
                <p>DUTIES IS A DESIGN STUDIO AND PARTNER</p>
                <div className={styles.child}>
                    <p>WE HELP YOU:</p>
                    <div className={styles.textContainer}>
                        <p>— Define your UI-interface</p>
                        <p>— Design your layout</p>
                        <p>— Deploy your App</p>
                    </div>
                </div>
                <p style={{ justifySelf: 'end' }}>CURRENTLY: Berlin. Germany</p>
            </div>
            {!!appLayoutElement &&
                ReactDOM.createPortal(
                    <div className={styles.blockContainer}>
                        <div className={styles.actionBlock}>
                            <img ref={imageRef1} alt='icon' className={styles.icon} height={24} src={star} width={24} />
                            <img ref={imageRef2} alt='icon' className={styles.icon} height={24} src={star} width={24} />
                            <p>Papapapappapaapappapapa</p>
                        </div>
                    </div>,
                    appLayoutElement,
                )}
        </div>
    );
};
