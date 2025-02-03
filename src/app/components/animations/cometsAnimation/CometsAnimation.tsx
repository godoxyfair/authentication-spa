import cn from 'classnames';
import React from 'react';
import stylesStar from './stylesStarts.module.scss';
import stylesComets from './stylesComets.module.scss';
import { useAppMediaQuery } from '../../../../hooks/useAppMediaQuery';

export const CometsAnimation = () => {
    const { isMobile } = useAppMediaQuery();
    const style = isMobile ? stylesComets : stylesStar;

    return (
        <div className={style.orbit}>
            <div className={cn(style.ball, { [style.ball1]: true })}></div>
            <div className={cn(style.ball, { [style.ball2]: true })}></div>
            {!isMobile && <div className={cn(style.ball, { [style.ball3]: true })}></div>}
        </div>
    );
};
