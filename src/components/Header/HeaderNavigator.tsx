import { ParamListBase, useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { Platform, StatusBar, StyleProp, StyleSheet, ViewStyle } from 'react-native';
import FastImage from 'react-native-fast-image';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Animated, { SharedValue } from 'react-native-reanimated';

import { colors } from 'themes';

import ArrowLeft from 'assets/icons/arrow-left.svg';
import BuzzLogo from 'assets/icons/buzz-logo.svg';
import { avatar } from 'assets/images';

import { View } from 'components/View';

import { horizontalScale, verticalScale } from 'utils';

interface IHeaderNavigatorProps {
    customStyle?: StyleProp<ViewStyle>;
    isGoBack?: boolean;
    animatedHeaderStyle?: StyleProp<ViewStyle>;
}

export const HeaderNavigator = (props: IHeaderNavigatorProps) => {
    const { animatedHeaderStyle = {}, customStyle: customStyle = {}, isGoBack = false } = props;
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

    const openDrawer = () => {
        navigation.dispatch(DrawerActions.openDrawer());
    };

    return (
        <Animated.View style={[styles.container, animatedHeaderStyle, customStyle]}>
            <View style={[styles.left]}>
                {isGoBack && (
                    <TouchableOpacity
                        style={styles.arrowLeft}
                        onPress={() => {
                            navigation.goBack();
                        }}
                    >
                        <ArrowLeft />
                    </TouchableOpacity>
                )}
            </View>
            <BuzzLogo />
            <View style={[styles.right]}>
                <TouchableOpacity style={styles.avatar} onPress={openDrawer}>
                    <FastImage source={avatar} resizeMode="contain" style={styles.avatar} />
                </TouchableOpacity>
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: verticalScale(10),
    },
    left: {
        width: horizontalScale(30),
        height: horizontalScale(30),
        justifyContent: 'center',
        alignItems: 'center',
    },
    right: {},
    avatar: {
        width: horizontalScale(30),
        height: horizontalScale(30),
        borderRadius: 100,
    },
    arrowLeft: {
        backgroundColor: colors.white[0],
        paddingHorizontal: 7,
        paddingVertical: 8,
        borderRadius: 100,
    },
});
