import { SafeAreaView } from "hocs";

import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import FastImage from "react-native-fast-image";

import { paddingHorizontalGlobal } from "themes";

import { homeBg } from "assets/images";

import { HeaderNavigator } from "../Header";

export const LayoutDefault = ({
    children,
    innerStyle,
    headerStyle,
    isGoBack,
}: {
    children: React.ReactNode;
    innerStyle?: StyleProp<ViewStyle>;
    headerStyle?: StyleProp<ViewStyle>;
    isGoBack?: boolean;
}) => {
    return (
        <View style={styles.container}>
            <FastImage style={styles.bg} source={homeBg} resizeMode="stretch" />
            <SafeAreaView>
                <View style={[styles.inner, innerStyle]}>
                    <HeaderNavigator isGoBack={isGoBack} customStyle={headerStyle} />
                    {children}
                </View>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inner: {
        flex: 1,
        gap: 10,
        ...paddingHorizontalGlobal,
    },
    bg: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
});
