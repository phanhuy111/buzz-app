import { Text } from 'components';
import { View, ImageBackground, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import { IPilots } from 'types';
import { buzzItemBg, drone1 } from 'assets/images';
import { colors } from 'themes/Styles';
import { horizontalScale, moderateScale, verticalScale } from 'utils';
import { Button } from 'components/Button';
import { useIntl } from 'react-intl';

interface PropsPilotsItem {
    data?: IPilots;
}

export const PilotsItem = ({ data }: PropsPilotsItem) => {
    const { formatMessage } = useIntl();
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
                        <Text style={styles.text} type="robotoMono">
                            {data?.subTitle}
                        </Text>
                        <Text style={styles.textTitle} type="industryBold">
                            {data?.title}
                        </Text>
                        <Text style={styles.text} type="robotoMono">
                            {data?.description}
                        </Text>
                    </View>
                    {data?.isDetail ? (
                        <View style={styles.containerDetail}>
                            <Button
                                type="dark"
                                title={formatMessage({ defaultMessage: 'INFO' })}
                                onPress={() => {}}
                                font="robotoMono"
                            />
                            <Button
                                type="dark"
                                title={formatMessage({ defaultMessage: 'CANCEL' })}
                                onPress={() => {}}
                                font="robotoMono"
                            />
                        </View>
                    ) : (
                        <View style={styles.containerPrice}>
                            <Text style={styles.textTitle} type="textHypeSmall">
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
    wrapper: {
        display: 'flex',
    },
    imageLogoBg: {
        borderRadius: 5,
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: verticalScale(10),
        gap: horizontalScale(10),
    },
    imageLogo: {
        display: 'flex',
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
        display: 'flex',
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
