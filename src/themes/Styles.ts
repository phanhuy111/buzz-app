import { Platform, StyleProp, TextStyle } from "react-native";

import { moderateScale, verticalScale } from "utils";

export const INPUT_THEME = {
    textInput: {
        color: "#27272A",
        fontFamily: "Rajdhani",
        fontWeight: "500",
        fontSize: moderateScale(18),
    } as TextStyle,
};

export const BOX_SHADOW = {
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 3,
};

export const paddingHorizontalGlobal = {
    paddingHorizontal: verticalScale(20),
};

// xs(10-13)-sm(14-17)-md(18-22)-lg(23-26)-xl(27-30)-xxl(31-36)

export const fontConfig = {
    fontFamily: Platform.select({
        web: "Rajdhani",
        ios: "Rajdhani",
        default: "Rajdhani",
    }),
    industryXXLBold: {
        fontFamily: "Industry-Bold",
        fontSize: moderateScale(36),
        fontWeight: "700",
        lineHeight: 48,
        letterSpacing: 0,
        textTransform: "uppercase",
    },
    industryXLBold: {
        fontFamily: "Industry-Bold",
        fontSize: moderateScale(30),
        fontWeight: "700",
        lineHeight: 48,
        letterSpacing: 0,
    },
    rajdMdMedium: {
        fontFamily: "Rajdhani",
        fontSize: moderateScale(22),
        fontWeight: "500",
        letterSpacing: 0,
        lineHeight: 32,
    },
    indusMdBold: {
        fontFamily: "Industry-Bold",
        fontSize: moderateScale(18),
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 20,
    },
    indusMdMedium: {
        fontFamily: "Rajdhani",
        fontSize: moderateScale(18),
        fontWeight: "500",
        letterSpacing: 0,
        lineHeight: 20,
    },
    arialMdLight: {
        fontFamily: "Arial",
        fontSize: moderateScale(16),
        fontWeight: "400",
        letterSpacing: 0,
    },
    rajdhSmBold: {
        fontFamily: "Rajdhani",
        fontSize: moderateScale(14),
        fontWeight: "700",
        lineHeight: 20,
    },
    rajdhSmMedium: {
        fontFamily: "Rajdhani",
        fontSize: moderateScale(12),
        fontWeight: "500",
    },
    rajdhXsBold: {
        fontFamily: "Rajdhani",
        fontSize: moderateScale(12),
        fontWeight: "700",
    },
    rajdhXsLight: {
        fontFamily: "Rajdhani",
        fontSize: moderateScale(10),
        fontWeight: "400",
        lineHeight: 20,
    },
    robotoMonoXsLight: {
        fontFamily: "RobotoMono-Medium",
        fontSize: moderateScale(10),
        fontWeight: "400",
        lineHeight: 12,
    },
} as Record<string, StyleProp<any>>;

export const colors: Record<string, { [key: number]: string }> = {
    white: {
        0: "rgba(255, 255, 255, 1)",
        1: "rgba(255, 255, 255, 0.60)",
    },
    black: {
        0: "rgba(0, 0, 0, 1)",
        1: "rgba(34, 34, 34, 1)",
        2: "rgba(45, 45, 45, 1)",
        3: "#111111",
        4: "#231F20",
    },
    gray: {
        0: "rgba(0, 0, 0, 0.3)",
        1: "rgba(78, 78, 78, 1)",
        2: "#5E617A",
        3: "#4E4E4E",
    },
    blue: {
        0: "rgba(9, 135, 226, 1)",
        1: "#48BFE3",
    },
    purple: {
        0: "#5E60CE",
    },
};

export const buttonTypes = {
    accent: {
        color: colors.white[0],
        backgroundColor: colors.blue[0],
    },
    dark: {
        color: colors.white[0],
        backgroundColor: colors.gray[1],
    },
};
