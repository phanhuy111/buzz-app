import { random } from 'lodash';

import { useIntl } from 'react-intl';
import { ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';

import { colors } from 'themes';

import { buzzItemBg, logoBg, rankLine } from 'assets/images';

import { Text } from 'components/Text';
import { View } from 'components/View';

import { horizontalScale, verticalScale } from 'utils';

import { IPilots } from 'types';

interface PropsLocationItem {
    data?: IPilots;
    onCb?: (item: string) => void;
}

const rank = random(1, 5);

export const LocationItem = ({ data, onCb }: PropsLocationItem) => {
    function handleSelectItem(id: string) {
        onCb?.(id);
    }

    return (
        <TouchableOpacity onPress={() => handleSelectItem(data?.id || '')}>
            <View style={styles.wrapper}>
                <ImageBackground
                    imageStyle={styles.imageLogoBg}
                    source={buzzItemBg}
                    resizeMode="cover"
                >
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
        </TouchableOpacity>
    );
};

export const styles = StyleSheet.create({
    wrapper: {},
    imageLogoBg: {
        borderRadius: 5,
        borderWidth: 2,
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
