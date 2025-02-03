import React, { FunctionComponent, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { AnimationColors } from '../type';

type InkBlot = {
    id: number;
    x: number;
    y: number;
    size: number;
    color?: string;
};

/**
 * Starts animation for mobile.
 */
export const SkyAnimation: FunctionComponent = () => {
    const [stars, setStars] = useState<InkBlot[]>([]);

    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            const colors = Object.keys(AnimationColors);
            const sizes = [10, 20];
            const color = colors[Math.floor(Math.random() * colors.length)];
            const size = Number(sizes[Math.floor(Math.random() * sizes.length)]);
            const x = Math.random() * (window.innerWidth - size);
            const y = Math.random() * (window.innerHeight - size);

            const newBlot: InkBlot = {
                id: Date.now(),
                x,
                y,
                size,
                color,
            };

            setStars((prev) => [...prev, newBlot]);

            setTimeout(() => {
                setStars((prev) => prev.filter((b) => b.id !== newBlot.id));
            }, 10000);
        };

        const handleResize = () => {
            setStars([]); // Очищаем массив клякс при изменении размера окна
        };

        window.addEventListener('resize', handleResize);

        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={styles.starContainer}>
            {stars.map((item) => (
                <div
                    key={item.id}
                    className={styles.star}
                    style={{
                        left: item.x,
                        top: item.y,
                        width: item.size,
                        height: item.size,
                        backgroundColor: item.color,
                    }}
                />
            ))}
        </div>
    );
};
