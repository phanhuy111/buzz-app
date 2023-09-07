import { Text } from 'components/Text';
import { View as ViewDefault, ImageBackground, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import { IPilots } from 'types';
import { buzzItemBg, logoBg, rankLine } from 'assets/images';
import { horizontalScale, verticalScale } from 'utils';
import { colors } from 'themes';

interface PropsRankItem {
    data?: IPilots;
}

export const RankItem = ({ data }: PropsRankItem) => {
    const rank = 3;

    return (
        <ViewDefault style={styles.wrapper}>
            <ImageBackground imageStyle={styles.imageLogoBg} source={buzzItemBg} resizeMode="cover">
                <ViewDefault style={styles.container}>
                    <ImageBackground style={styles.imageLogo} source={logoBg}>
                        {Array(rank)
                            .fill('')
                            .map(value => {
                                return (
                                    <FastImage
                                        style={{
                                            width: verticalScale(50),
                                            height: verticalScale(10),
                                            borderRadius: 35,
                                        }}
                                        source={rankLine}
                                        resizeMode={FastImage.resizeMode.contain}
                                    />
                                );
                            })}
                    </ImageBackground>

                    <ViewDefault style={styles.containerText}>
                        <Text style={styles.textTitle} type="titleItems">
                            {data?.title}
                        </Text>
                        <Text style={styles.text} type="textItems">
                            {data?.description}
                        </Text>
                    </ViewDefault>

                    <ViewDefault style={styles.containerPrice}>
                        <Text style={styles.textTitle} type="textHypeSmall">
                            {'$' + data?.price}
                        </Text>
                    </ViewDefault>
                </ViewDefault>
            </ImageBackground>
        </ViewDefault>
    );
};

export const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
    },
    imageLogoBg: {
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#0987E2',
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
        gap: 1,
        width: horizontalScale(70),
        height: horizontalScale(70),
    },
    containerText: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
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
}) as any;
