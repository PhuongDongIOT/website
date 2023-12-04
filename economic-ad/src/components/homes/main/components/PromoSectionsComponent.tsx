import dynamic from 'next/dynamic';
import { useState } from 'react';

import { logger } from '~utils/logger.utils';

const PromoSections = dynamic(() => import('~stories/PromoSections'), { ssr: false });
const ShoppingCarts = dynamic(() => import('~stories/ShoppingCarts'), { ssr: false });

export function PromoSectionsComponent() {
    const [ isShow, setIsShow ] = useState<boolean>(false);

    const onClickSetState = (): void => {
        logger.info('Open modal cart')
        setIsShow((prev: boolean) => !prev);
    };

    return (
        <>
            <PromoSections onClick={() => onClickSetState()}/>
            <ShoppingCarts isShow={isShow} onClick={() => onClickSetState()}/>
        </>
    )
}
