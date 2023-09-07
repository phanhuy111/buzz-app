import { Text } from 'components/Text';
import { View as ViewDefault, ImageBackground, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import { IPilots } from 'types';
import { buzzItemBg } from 'assets/images';
import { colors } from 'themes/Styles';
import { horizontalScale, verticalScale } from 'utils';

interface PropsPilotsItem {
    data?: IPilots;
}

export const PilotsItem = ({ data }: PropsPilotsItem) => {
    return (
        <ViewDefault style={styles.wrapper}>
            <ImageBackground imageStyle={styles.imageLogoBg} source={buzzItemBg} resizeMode="cover">
                <ViewDefault style={styles.container}>
                    <FastImage
                        style={{
                            width: verticalScale(70),
                            height: verticalScale(70),
                            borderRadius: 35,
                        }}
                        source={{
                            uri: 'https://unsplash.it/400/400?image=1',
                            priority: FastImage.priority.high,
                        }}
                        resizeMode={FastImage.resizeMode.contain}
                    />

                    <ViewDefault style={styles.containerText}>
                        <Text style={styles.text} type="textItems">
                            {data?.subTitle}
                        </Text>
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
