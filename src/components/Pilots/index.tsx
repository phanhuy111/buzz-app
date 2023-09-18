import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { useIntl } from 'react-intl';
import { ImageBackground, StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image';

import { colors } from 'themes/Styles';

import { buzzItemBg, drone1 } from 'assets/images';

import { Text } from 'components';
import { Button } from 'components/Button';

import { horizontalScale, moderateScale, verticalScale } from 'utils';

import { PILOT_PROFILE } from 'constants/routeNames';

import { IPilots } from 'types';

interface PropsPilotsItem {
    data?: IPilots;
}

export const PilotsItem = ({ data }: PropsPilotsItem) => {
    const { formatMessage } = useIntl();
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

    function navigatePilotDetail(index: string) {
        navigation.navigate(PILOT_PROFILE, {});
    }

    return (
        <View style={styles.wrapper}>
            <ImageBackground imageStyle={styles.imageLogoBg} source={buzzItemBg} resizeMode="cover">
                <View style={styles.container}>
                    <FastImage
                        style={styles.droneImg}
                        source={drone1}
                        resizeMode={FastImage.resizeMode.contain}
                    />
                    <View style={styles.containerText}>
                        <Text style={styles.text} type="robotoMonoXsLight">
                            {data?.subTitle}
                        </Text>
                        <Text style={styles.textTitle} type="indusMdBold">
                            {data?.title}
                        </Text>
                        <Text style={styles.text} type="robotoMonoXsLight">
                            {data?.description}
                        </Text>
                    </View>
                    {data?.isDetail ? (
                        <View style={styles.containerDetail}>
                            <Button
                                type="dark"
                                title={formatMessage({ defaultMessage: 'INFO' })}
                                onPress={() => navigatePilotDetail(data?.title)}
                                font="robotoMonoXsLight"
                            />
                            <Button
                                type="dark"
                                title={formatMessage({ defaultMessage: 'CANCEL' })}
                                onPress={() => {}}
                                font="robotoMonoXsLight"
                            />
                        </View>
                    ) : (
                        <View style={styles.containerPrice}>
                            <Text style={styles.textTitle} type="rajdMdMedium">
                                {'$' + data?.price}
                            </Text>
                        </View>
                    )}
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {},
    imageLogoBg: {
        borderRadius: 5,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: verticalScale(10),
        gap: horizontalScale(10),
    },
    imageLogo: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: horizontalScale(1),
        width: verticalScale(70),
        height: verticalScale(70),
    },
    containerText: {
        flex: 1,
        flexDirection: 'column',
        gap: 5,
    },
    containerPrice: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerDetail: {
        flexDirection: 'column',
        gap: 5,
    },
    text: {
        color: colors['white']['1'],
        fontSize: moderateScale(18),
    },
    textTitle: {
        color: colors['white']['0'],
        fontSize: moderateScale(18),
    },
    droneImg: {
        width: verticalScale(70),
        height: verticalScale(70),
        borderRadius: 35,
    },
});
