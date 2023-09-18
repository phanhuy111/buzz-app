import {
    Extrapolate,
    interpolate,
    interpolateColor,
    useAnimatedScrollHandler,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from 'react-native-reanimated';
import { colors } from 'themes';

export default function useImageScroll(heightImage: number) {
    const translationY = useSharedValue(0);

    const scrollHandler = useAnimatedScrollHandler({
        onScroll: event => {
            translationY.value = event.contentOffset.y;
        },
    });

    const styleBg = useAnimatedStyle(() => {
        if (translationY.value < 0) return {};
        return {
            transform: [
                {
                    scale: interpolate(
                        translationY.value,
                        [-heightImage, 0, heightImage],
                        [1.5, 1, 1.5],
                        Extrapolate.EXTEND,
                    ),
                },
                {
                    translateY: withSpring(
                        interpolate(
                            translationY.value,
                            [-heightImage, 0, heightImage],
                            [-heightImage * 0.6, 0, heightImage * 0.5],
                            Extrapolate.EXTEND,
                        ),
                        {
                            duration: 10,
                            velocity: 10000,
                        },
                    ),
                },
                {
                    translateY: withSpring(
                        interpolate(
                            translationY.value,
                            [-heightImage, 0, heightImage],
                            [heightImage * 0.3, 0, 0],
                            Extrapolate.EXTEND,
                        ),
                        {
                            duration: 10,
                            velocity: 10000,
                        },
                    ),
                },
            ],
        };
    });

    const styleHeader = useAnimatedStyle(() => {
        return {
            backgroundColor: interpolateColor(
                translationY.value,
                [0, 200],
                ['rgba(255,0,0,0.1)', colors?.black[1]],
            ),
        };
    });

    return { translationY, scrollHandler, styleBg, styleHeader };
}
