import React, { createContext, useContext, useMemo, useState } from 'react';
import type { ImageStyle } from 'react-native';

import type { ImageBoundingClientRect, LightBoxProps, TargetImageInfo } from './LightBox';
import { ActiveImageType, LightImageModal } from './LightImageModal';

export type AnimationParams = Pick<
    LightBoxProps,
    'onTap' | 'tapToClose' | 'onLongPress' | 'nativeHeaderHeight'
> & {
    layout: TargetImageInfo;
    position: ImageBoundingClientRect;
    style?: ImageStyle;
    imageElement: JSX.Element;
};

type LightBoxContextType = {
    show: (params: AnimationParams) => void;
    isPause: boolean;
    handlePlayVideo: () => void;
};

export const LightBoxContext = createContext<LightBoxContextType | null>(null);

export const LightBoxProvider: React.FC<{
    children: JSX.Element | JSX.Element[];
}> = ({ children }) => {
    const [isPause, setIsPause] = useState(true);
    const [activeImage, setActiveImage] = useState<ActiveImageType | null>(null);

    const handlePlayVideo = () => {
        setIsPause(e => !e);
    };

    const onClose = () => {
        setActiveImage(null);
        setIsPause(false);
    };

    const value = useMemo(
        () => ({
            show: ({ layout, position, imageElement, ...rest }: AnimationParams) => {
                setActiveImage({
                    layout,
                    imageElement,
                    position,
                    ...rest,
                });
            },
            isPause,
            handlePlayVideo,
        }),
        [],
    );

    return (
        <LightBoxContext.Provider value={value}>
            {children}
            {activeImage && <LightImageModal onClose={onClose} activeImage={activeImage} />}
        </LightBoxContext.Provider>
    );
};

export const useLightBox = () => {
    const lightBox = useContext(LightBoxContext);
    if (!lightBox) {
        console.error('Trying to use useLightBox without a LightBoxProvider');
    }
    return lightBox;
};
