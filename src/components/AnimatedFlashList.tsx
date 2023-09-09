/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FlashList, FlashListProps } from "@shopify/flash-list";

import { Ref, forwardRef } from "react";
import Animated from "react-native-reanimated";

const FlashListWithEventThrottle = forwardRef<Ref<FlashList<any>>, FlashListProps<any>>(
    (props, ref) => (
        <FlashList
            {...props}
            scrollEventThrottle={16}
            // @ts-ignore
            ref={ref}
        />
    ),
);

export const AnimatedFlashList = Animated.createAnimatedComponent(FlashListWithEventThrottle);
