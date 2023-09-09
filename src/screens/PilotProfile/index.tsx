import { FlashList } from '@shopify/flash-list';
import { Text } from 'components';
import { HeaderNavigator } from 'components/Header';
import { InstagramVideo } from 'components/Video';
import React from 'react';
import { useIntl } from 'react-intl';
import { StyleSheet, View, ScrollView } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from 'themes';
import { SCREEN_WIDTH, horizontalScale, transitionSharedElement, verticalScale } from 'utils';
import { RouteProp, useRoute } from '@react-navigation/native';
import Animated, {
    Extrapolate,
    interpolate,
    useAnimatedScrollHandler,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    withTiming,
} from 'react-native-reanimated';
import { drone1 } from 'assets/images';

const DATA = [
    {
        title: 'First Item',
    },
    {
        title: 'Second Item',
    },
    {
        title: 'Second Item',
    },
    {
        title: 'Second Item',
    },
];

const ImageCell = ({ item }: { item: any }) => {
    return (
        <InstagramVideo
            source={
                'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_5MB.mp4?a=234234'
            }
        />
    );
};

const PilotProfile = () => {
    const { formatMessage } = useIntl();
    const { top } = useSafeAreaInsets();
    const { params } = useRoute() as any;
    const translationY = useSharedValue(0);

    const scrollHandler = useAnimatedScrollHandler({
        onScroll: event => {
            translationY.value = event.contentOffset.y;
        },
    });

    const styleBg = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateY: translationY.value,
                },
                {
                    scale: withSpring(
                        interpolate(translationY.value, [0, 1], [1, 0], Extrapolate.EXTEND),
                        {
                            duration: 10,
                            velocity: 10000,
                        },
                    ),
                },
            ],
        };
    });

    return (
        <Animated.ScrollView
            scrollEventThrottle={16}
            onScroll={scrollHandler}
            showsVerticalScrollIndicator={false}
            style={styles.container}
        >
            <HeaderNavigator isGoBack={true} customStyle={[styles.customHeader, { top }]} />
            <View style={styles.image}>
                <Animated.View style={[styles.containerBg]}>
                    <Animated.Image
                        style={[styles.bg, styleBg]}
                        source={{ uri: 'https://picsum.photos/id/237/400/250' }}
                        resizeMode={FastImage.resizeMode.cover}
                    />
                    <View style={styles.imageContent}>
                        <FastImage style={styles.avatar} source={drone1} resizeMode="contain" />
                        <Text type="rajdhXsLight" style={[styles.white]}>
                            {'JULY 21, 2023'}
                        </Text>
                        <Text type="industryXXLBold" style={[styles.white]}>
                            {'Buzz Ensign'}
                        </Text>
                        <View style={styles.section}>
                            <View style={styles.sectionInfo}>
                                <Text type="rajdhXsLight" style={[styles.white]}>
                                    {formatMessage({
                                        defaultMessage: 'ARRIVAL LOCATION',
                                    })}
                                </Text>
                                <Text type="rajdMdMedium" style={[styles.white, { maxWidth: 300 }]}>
                                    {'Binghamton University, Binghamton, NY 13902'}
                                </Text>
                            </View>
                            <View style={styles.sectionInfo}>
                                <Text type="rajdhXsLight" style={[styles.white]}>
                                    {formatMessage({
                                        defaultMessage: 'PRICE',
                                    })}
                                </Text>
                                <Text type="rajdMdMedium" style={[styles.white]}>
                                    {'$500'}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.section1}>
                            <Text type="rajdhXsLight" style={[styles.white]}>
                                {'ACTUAL PILOT SHOWN 48HRS BEFORE JOB'}
                            </Text>
                        </View>
                    </View>
                </Animated.View>
            </View>

            <View style={styles.content}>
                <View>
                    <Text type="indusMdBold" style={styles.titleInfoSection}>
                        {formatMessage({
                            defaultMessage: 'Sample Work',
                        })}
                    </Text>

                    <View style={styles.sampleSection}>
                        <FlashList
                            horizontal={true}
                            renderItem={({ item }) => {
                                return <ImageCell item={item} />;
                            }}
                            estimatedItemSize={100}
                            data={DATA}
                            ItemSeparatorComponent={() => (
                                <View style={{ width: horizontalScale(10) }}></View>
                            )}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>

                <View>
                    <Text type="indusMdBold" style={styles.titleInfoSection}>
                        {formatMessage({
                            defaultMessage: 'About Me',
                        })}
                    </Text>

                    <View style={styles.intructionSection}>
                        <Text type="arialMdLight" style={[styles.white]}>
                            {
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae orci id ligula varius commodo. Donec ex mauris, fermentum nec leo sollicitudin, finibus pulvinar ligula. Nulla rhoncus, metus non rhoncus hendrerit, nisi felis aliquet augue, nec gravida ligula ligula in lacus. Pellentesque mollis odio ac gravida scelerisque. Curabitur est neque, convallis at faucibus eu, lobortis ut ex. Etiam bibendum urna id tellus suscipit, sit amet pretium magna dictum. Sed quis mauris at risus sagittis sodales at nec ex. In leo ante, maximus vitae finibus vitae, rhoncus a nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae orci id ligula varius commodo. Donec ex mauris, fermentum nec leo sollicitudin, finibus pulvinar ligula. Nulla rhoncus, metus non rhoncus hendrerit, nisi felis aliquet augue, nec gravida ligula ligula in lacus. Pellentesque mollis odio ac gravida scelerisque. Curabitur est neque, convallis at faucibus eu, lobortis ut ex. Etiam bibendum urna id tellus suscipit, sit amet pretium magna dictum. Sed quis mauris at risus sagittis sodales at nec ex. In leo ante, maximus vitae finibus vitae, rhoncus a nulla.'
                            }
                        </Text>
                    </View>
                </View>
            </View>
        </Animated.ScrollView>
    );
};

const styles = StyleSheet.create({
    customHeader: {
        zIndex: 2,
        paddingHorizontal: verticalScale(20),
        position: 'absolute',
        flex: 1,
        width: horizontalScale((SCREEN_WIDTH * 90) / 100),

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: verticalScale(10),
    },
    containerBg: {
        flex: 1,
    },
    bg: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    container: {
        flex: 1,
        backgroundColor: colors['white'][0],
    },
    white: {
        color: colors['white'][0],
    },
    avatar: {
        width: horizontalScale(100),
        height: horizontalScale(100),
        borderRadius: 200,
    },
    image: {
        position: 'relative',
        height: verticalScale(450),
    },
    imageContent: {
        position: 'absolute',
        padding: horizontalScale(20),
        bottom: 0,
    },
    content: {
        paddingVertical: horizontalScale(10),
        flex: 1,

        backgroundColor: colors['black'][1],
        gap: horizontalScale(10),
    },
    titleInfoSection: {
        paddingTop: horizontalScale(15),
        paddingBottom: horizontalScale(10),
        paddingHorizontal: horizontalScale(20),
        color: colors['white'][0],
        textTransform: 'uppercase',
    },
    section: {
        flexDirection: 'row',
        gap: horizontalScale(20),
    },
    section1: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
    },
    sectionInfo: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingVertical: horizontalScale(8),
    },
    intructionSection: {
        flexDirection: 'column',
        paddingHorizontal: horizontalScale(20),
        gap: horizontalScale(10),
    },
    sampleSection: {
        paddingHorizontal: horizontalScale(20),
    },
    buttonEdit: {
        backgroundColor: colors['gray'][3],
    },
});

export default PilotProfile;
