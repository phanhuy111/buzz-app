import { SharedTransition, withSpring } from 'react-native-reanimated';

export const dayShortName = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

export const transitionSharedElement = SharedTransition.custom(values => {
    'worklet';
    return {
        height: withSpring(values.targetHeight),
        width: withSpring(values.targetWidth),
    };
});
