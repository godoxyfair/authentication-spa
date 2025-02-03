import React from 'react';
import { InformationDTO } from '../../../api/types';
import styles from './styles.module.scss';
import { useAppMediaQuery } from '../../../hooks/useAppMediaQuery';
import { InfoBlock } from './components/infoBlock/InfoBlock';

type Props = {
    item: InformationDTO;
};

/**
 * General project information component.
 */
export const ProjectBlock: React.FC<Props> = (props: Props) => {
    const { item } = props;
    const { isMobile } = useAppMediaQuery();

    return (
        <>
            <div className={styles.container}>
                <div className={styles.imagesContainer}>
                    {!isMobile ? (
                        item.images.map((img) => (
                            <div className={styles.gridContainer} key={img}>
                                <img alt='icon' src={img} />
                            </div>
                        ))
                    ) : (
                        <div className={styles.gridContainer} key={item.images[0]}>
                            <img alt='icon' src={item.images[0]} />
                        </div>
                    )}
                </div>
                <InfoBlock item={item} />
            </div>
            <div className={styles.emptyBlock} />
        </>
    );
};
