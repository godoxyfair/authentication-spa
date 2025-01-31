import { useMediaQuery } from 'react-responsive';

interface IMediaQueryReturnType {
    isMobile: boolean;
    isTablet?: boolean;
    isDesktop?: boolean;
}

export enum EBreakpoint {
    MOBILE = 430,
    TABLET = 768,
    DESKTOP = 1440,
}

/**
 * Хук для идентификации разрешения экрана клиента.
 */
export const useAppMediaQuery = (): IMediaQueryReturnType => {
    const isMobile = useMediaQuery({ query: `(max-width: ${EBreakpoint.TABLET - 1}px)` });
    const isTablet = useMediaQuery({
        query: `(min-width: ${EBreakpoint.TABLET}px) and (max-width: ${EBreakpoint.DESKTOP - 1}px)`,
    });
    const isDesktop = useMediaQuery({
        query: `(min-width: ${EBreakpoint.DESKTOP}px) and (max-width: ${EBreakpoint.DESKTOP - 1}px)`,
    });

    return {
        isMobile,
        isTablet,
        isDesktop,
    };
};
