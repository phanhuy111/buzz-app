import type Animated from 'react-native-reanimated';
import { useSharedValue } from 'react-native-reanimated';

export const clamp = (value: number, lowerBound: number, upperBound: number) => {
    'worklet';
    return Math.min(Math.max(lowerBound, value), upperBound);
};

export const rubberBandClamp = (x: number, coeff: number, dim: number) => {
    'worklet';

    return (1.0 - 1.0 / ((x * coeff) / dim + 1.0)) * dim;
};
export const withRubberBandClamp = (
    x: number,
    coeff: number,
    dim: number,
    limits: [number, number],
) => {
    'worklet';
    let clampedX = clamp(x, limits[0], limits[1]);
    let diff = Math.abs(x - clampedX);
    let sign = clampedX > x ? -1 : 1;

    return clampedX + sign * rubberBandClamp(diff, coeff, dim);
};

export interface Vector<T = number> {
    x: T;
    y: T;
}

export const useVector = (x1 = 0, y1?: number): Vector<Animated.SharedValue<number>> => {
    const x = useSharedValue(x1);
    const y = useSharedValue(y1 ?? x1);
    return { x, y };
};
