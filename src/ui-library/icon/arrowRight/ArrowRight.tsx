import React from 'react';

type Props = {
    color?: string;
    width?: string;
    height?: string;
};

export const ArrowRight = (props: Props) => {
    return (
        <svg
            fill='none'
            width={props.width}
            height={props.height}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 32 32'
        >
            <title>3-Arrow Right</title>
            <g id='_3-Arrow_Right'>
                <path
                    fill='currentColor'
                    d='M31.71,15.29l-10-10L20.29,6.71,28.59,15H0v2H28.59l-8.29,8.29,1.41,1.41,10-10A1,1,0,0,0,31.71,15.29Z'
                />
            </g>
        </svg>
    );
};
