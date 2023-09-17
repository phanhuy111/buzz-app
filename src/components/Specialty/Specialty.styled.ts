import { StyleProp, StyleSheet, ViewStyle } from 'react-native';

import { colors } from 'themes';

import { moderateScale } from 'utils/metrics';

export const styles = StyleSheet.create({
    container: {
        position: 'relative',
    },
    containerText: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: 10,
        left: 10,
    },
    text: {
        color: colors['white']['1'],
    },
    textTitle: {
        color: colors['white']['0'],
        // fontFamily: 'Rajdhani',
        // fontSize: moderateScale(14),
        // fontWeight: '700',
        // letterSpacing: 0.5,
        // lineHeight: 20,
        // textTransform: 'uppercase',
    },
}) as any;
