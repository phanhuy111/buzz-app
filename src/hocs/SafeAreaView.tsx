import React, { FunctionComponent } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type SafeAreaViewProps = {
    disableBottomSafeArea?: boolean;
    disableTopSafeArea?: boolean;
    disableSidesSafeArea?: boolean;
    children: JSX.Element | null;
};

export const SafeAreaView: FunctionComponent<SafeAreaViewProps> = (props: SafeAreaViewProps) => {
    const {
        disableBottomSafeArea = false,
        disableTopSafeArea = false,
        disableSidesSafeArea = false,
        children,
    } = props;

    const insets = useSafeAreaInsets();

    const style: StyleProp<ViewStyle> = {};

    if (!disableBottomSafeArea) {
        style.marginBottom = insets.bottom;
    }

    if (!disableTopSafeArea) {
        style.marginTop = insets.top;
    }

    if (!disableSidesSafeArea) {
        style.marginRight = insets.right;
        style.marginLeft = insets.left;
    }

    return <View style={[{ flex: 1 }, style]}>{children}</View>;
};
