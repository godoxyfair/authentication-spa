import React, { useEffect, useRef } from 'react';

/**
 * Paint animation for desktop.
 */
export const PaintAnimation: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const dropsRef = useRef<{ x: number; y: number; radius: number; color: string; speed: number; trail: any[] }[]>([]);

    useEffect(() => {
        const handleKeyDown = () => {
            const x = Math.random() * window.innerWidth;
            const colors = ['#FFE5EC', '#FFC2D1', '#FFB3C6', '#FF8FAB'];
            const color = colors[Math.floor(Math.random() * colors.length)];

            dropsRef.current = [
                ...dropsRef.current,
                { x, y: 0, radius: Math.random() * 8 + 5, color, speed: Math.random() * 2 + 2, trail: [] },
            ];
        };

        const handleResize = () => {
            dropsRef.current = [];
        };

        document.addEventListener('resize', handleResize);

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let animationFrameId: number;

        const animate = () => {
            dropsRef.current = dropsRef.current
                .map((drop) => {
                    const newDrop = { ...drop };
                    newDrop.trail.push({ x: drop.x, y: drop.y, radius: drop.radius, color: drop.color });
                    if (newDrop.trail.length > 30) newDrop.trail.shift();

                    newDrop.y += drop.speed;

                    if (newDrop.y + newDrop.radius > canvas.height) {
                        newDrop.radius *= 1.2;
                        newDrop.speed *= 0.5;
                    }

                    return newDrop.radius > 50 ? null : newDrop;
                })
                .filter(Boolean) as any[];

            dropsRef.current.forEach((drop) => {
                drop.trail.forEach((point, index) => {
                    ctx.beginPath();
                    ctx.arc(point.x, point.y, point.radius * (index / drop.trail.length), 0, Math.PI * 2);
                    ctx.fillStyle = point.color;
                    ctx.fill();
                });

                ctx.beginPath();
                ctx.arc(drop.x, drop.y, drop.radius, 0, Math.PI * 2);
                ctx.fillStyle = drop.color;
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh' }} />
    );
};
