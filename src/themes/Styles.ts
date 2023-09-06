import { Platform, StyleProp, TextStyle } from 'react-native';
import { moderateScale } from 'utils';

export const INPUT_THEME = {
    textInput: {
        color: '#27272A',
        fontFamily: 'Rajdhani',
        fontWeight: '500',
        fontSize: moderateScale(18),
    } as TextStyle,
};

export const BOX_SHADOW = {
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 3,
};

export const paddingHorizontalGlobal = {
    paddingHorizontal: moderateScale(20),
};

export const fontConfig = {
    fontFamily: Platform.select({
        web: 'Rajdhani',
        ios: 'Rajdhani',
        default: 'Rajdhani',
    }),
    headlineLarge: {
        fontFamily: 'Rajdhani',
        fontSize: moderateScale(32),
        fontWeight: '700',
        lineHeight: 48,
        color: '#27272A',
        letterSpacing: 0,
    },
    headlineMedium: {
        fontFamily: 'Rajdhani',
        fontSize: moderateScale(28),
        fontWeight: '700',
        letterSpacing: 0,
        lineHeight: 32,
    },
    headlineSmall: {
        fontFamily: 'Rajdhani',
        fontSize: moderateScale(24),
        fontWeight: '400',
        letterSpacing: 0,
        lineHeight: 32,
    },
    textSmall: {
        fontFamily: 'Rajdhani',
        fontSize: moderateScale(22),
        fontWeight: '400',
        letterSpacing: 0,
        lineHeight: 32,
    },
    textHypeSmall: {
        fontFamily: 'Rajdhani',
        fontSize: moderateScale(22),
        fontWeight: '500',
        letterSpacing: 0,
        lineHeight: 32,
    },
    labelMedium: {
        fontFamily: 'Rajdhani',
        fontSize: moderateScale(12),
        fontWeight: '500',
        letterSpacing: 0,
    },
    labelLarge: {
        fontFamily: 'Rajdhani',
        fontSize: moderateScale(14),
        fontWeight: '500',
        lineHeight: 21,
        color: '#27272A',
    },
    titleLarge: {
        fontFamily: 'Rajdhani',
        fontSize: moderateScale(20),
        fontWeight: '700',
        letterSpacing: 0,
        lineHeight: 28,
    },
    bodyLarge: {
        fontFamily: 'Rajdhani',
        fontSize: moderateScale(16),
        fontWeight: '700',
        color: '#27272A',
        letterSpacing: 0,
    },
    titleItems: {
        fontFamily: 'Rajdhani',
        fontSize: moderateScale(18),
        fontWeight: '700',
        letterSpacing: 0,
        lineHeight: 20,
    },
    textItems: {
        fontFamily: 'Rajdhani',
        fontSize: moderateScale(10),
        fontWeight: '400',
        letterSpacing: 0.5,
        lineHeight: 20,
        textTransform: 'uppercase',
    },
    textBoldItems: {
        fontFamily: 'Rajdhani',
        fontSize: moderateScale(14),
        fontWeight: '700',
        letterSpacing: 0.5,
        lineHeight: 20,
        textTransform: 'uppercase',
    },
} as Record<string, StyleProp<any>>;

export const colors: Record<string, { [key: number]: string }> = {
    white: {
        0: 'rgba(255, 255, 255, 1)',
        1: 'rgba(255, 255, 255, 0.60)',
    },
    black: {
        0: 'rgba(0, 0, 0, 1)',
        1: 'rgba(34, 34, 34, 1)',
    },
    gray: {
        0: 'rgba(0, 0, 0, 0.3)',
        1: 'rgba(78, 78, 78, 1)',
    },
};
