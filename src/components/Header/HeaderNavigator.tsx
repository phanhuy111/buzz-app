import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { horizontalScale, verticalScale } from 'utils';
import BuzzLogo from 'assets/icons/buzz-logo.svg';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FastImage from 'react-native-fast-image';
import { avatar } from 'assets/images';
import ArrowLeft from 'assets/icons/arrow-left.svg';
import { DrawerActions } from '@react-navigation/native';
import { colors } from 'themes';

interface IHeaderNavigatorProps {
    customStyle?: StyleProp<ViewStyle>;
    isGoBack?: boolean;
}

export const HeaderNavigator = (props: IHeaderNavigatorProps) => {
    const { customStyle: customStyle = {}, isGoBack = false } = props;
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

    const openDrawer = () => {
        navigation.dispatch(DrawerActions.openDrawer());
    };

    return (
        <View style={[styles.container, customStyle]}>
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
        </View>
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
