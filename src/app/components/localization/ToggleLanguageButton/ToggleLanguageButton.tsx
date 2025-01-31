import React from 'react';
import cn from 'classnames';
import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../../../../ui-components/Button';
import styles from './styles.module.scss';
import { ToggleLanguageButtonProps } from './ToggleLanguageButtonProps';
import { getCurrentLanguage, invertLanguage } from '../../../i18nUtils';

export const ToggleLanguageButton: FunctionComponent<ToggleLanguageButtonProps> = (props) => {
    const { i18n } = useTranslation();
    const currentLanguage = getCurrentLanguage(i18n);

    const handleClick = async () => {
        await i18n.changeLanguage(invertLanguage(currentLanguage));
        console.log(i18n.language);
    };

    return <Button onClick={handleClick} className={cn(styles.button)} title={currentLanguage} />;
};
