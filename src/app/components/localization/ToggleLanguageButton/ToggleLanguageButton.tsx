import React from 'react';
import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../../../../ui-library';
import { getCurrentLanguage, invertLanguage } from '../../../i18nUtils';

type Props = {
    className?: string;
};

/**
 * Toggle language button.
 */
export const ToggleLanguageButton: FunctionComponent<Props> = (props: Props) => {
    const { i18n } = useTranslation();
    const currentLanguage = getCurrentLanguage(i18n);

    const handleClick = async () => {
        await i18n.changeLanguage(invertLanguage(currentLanguage));
    };

    return <Button onClick={handleClick} className={props.className} title={invertLanguage(currentLanguage)} />;
};
