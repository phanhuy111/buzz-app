import { Text } from 'components/Text';
import { View, ImageBackground, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import { IPilots } from 'types';
import { buzzItemBg, logoBg, rankLine } from 'assets/images';
import { horizontalScale, verticalScale } from 'utils';
import { colors } from 'themes';
import { Button } from 'components/Button';
import { useIntl } from 'react-intl';

interface PropsLocationItem {
    data?: IPilots;
}

export const LocationItem = ({ data }: PropsLocationItem) => {
    const rank = 3;
    const { formatMessage } = useIntl();

    return (
        <View style={styles.wrapper}>
            <ImageBackground imageStyle={styles.imageLogoBg} source={buzzItemBg} resizeMode="cover">
                <View style={styles.container}>
                    <ImageBackground style={styles.imageLogo} source={logoBg}>
                        {Array(rank)
                            .fill('')
                            .map(value => {
                                return (
                                    <FastImage
                                        style={styles.rankImg}
                                        source={rankLine}
                                        resizeMode={FastImage.resizeMode.contain}
                                    />
                                );
                            })}
                    </ImageBackground>
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
                    <View style={styles.containerPrice}>
                        <Text style={styles.textTitle} type="rajdMdMedium">
                            {'$' + data?.price}
                        </Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

export const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
    },
    imageLogoBg: {
        borderRadius: 5,
        borderWidth: 2,
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: verticalScale(10),
        gap: horizontalScale(10),
    },
    imageLogo: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: verticalScale(70),
        height: verticalScale(70),
    },
    containerText: {
        display: 'flex',
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
    text: {
        color: colors['white']['1'],
    },
    textTitle: {
        color: colors['white']['0'],
    },
    rankImg: {
        width: verticalScale(50),
        height: verticalScale(10),
        borderRadius: 35,
    },
});
