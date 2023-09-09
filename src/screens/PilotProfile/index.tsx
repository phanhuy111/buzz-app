import { FlashList } from '@shopify/flash-list';
import { Text } from 'components';
import { HeaderNavigator } from 'components/Header';
import { InstagramVideo } from 'components/Video';
import React from 'react';
import { useIntl } from 'react-intl';
import { StyleSheet, View, ScrollView, ImageBackground } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from 'themes';
import { SCREEN_HEIGHT, SCREEN_WIDTH, horizontalScale, verticalScale } from 'utils';

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

const JobDetail = () => {
    const { formatMessage } = useIntl();
    const { top } = useSafeAreaInsets();

    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={styles.container}>
                <HeaderNavigator isGoBack={true} customStyle={[styles.customHeader, { top }]} />
                <ImageBackground
                    source={{ uri: 'https://picsum.photos/id/237/400/250' }}
                    style={styles.image}
                >
                    <View style={styles.imageContent}>
                        <FastImage
                            style={styles.avatar}
                            source={{ uri: 'https://picsum.photos/id/237/400/250' }}
                            resizeMode="contain"
                        />
                        <Text type="textItems" style={[styles.white]}>
                            {'JULY 21, 2023'}
                        </Text>
                        <Text type="headlineLLarge" style={[styles.white]}>
                            {'Buzz Ensign'}
                        </Text>
                        <View style={styles.section}>
                            <View style={styles.sectionInfo}>
                                <Text type="textItems" style={[styles.white]}>
                                    {formatMessage({
                                        defaultMessage: 'ARRIVAL LOCATION',
                                    })}
                                </Text>
                                <Text
                                    type="textHypeSmall"
                                    style={[styles.white, { maxWidth: 300 }]}
                                >
                                    {'Binghamton University, Binghamton, NY 13902'}
                                </Text>
                            </View>
                            <View style={styles.sectionInfo}>
                                <Text type="textItems" style={[styles.white]}>
                                    {formatMessage({
                                        defaultMessage: 'PRICE',
                                    })}
                                </Text>
                                <Text type="textHypeSmall" style={[styles.white]}>
                                    {'$500'}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.section1}>
                            <Text type="textItems" style={[styles.white]}>
                                {'ACTUAL PILOT SHOWN 48HRS BEFORE JOB'}
                            </Text>
                        </View>
                    </View>
                </ImageBackground>
                <View style={styles.content}>
                    <View>
                        <Text type="titleItems" style={styles.titleInfoSection}>
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
                        <Text type="titleItems" style={styles.titleInfoSection}>
                            {formatMessage({
                                defaultMessage: 'About Me',
                            })}
                        </Text>

                        <View style={styles.intructionSection}>
                            <Text type="bodySLarge" style={[styles.white]}>
                                {
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae orci id ligula varius commodo. Donec ex mauris, fermentum nec leo sollicitudin, finibus pulvinar ligula. Nulla rhoncus, metus non rhoncus hendrerit, nisi felis aliquet augue, nec gravida ligula ligula in lacus. Pellentesque mollis odio ac gravida scelerisque. Curabitur est neque, convallis at faucibus eu, lobortis ut ex. Etiam bibendum urna id tellus suscipit, sit amet pretium magna dictum. Sed quis mauris at risus sagittis sodales at nec ex. In leo ante, maximus vitae finibus vitae, rhoncus a nulla.'
                                }
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
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
        width: '100%',
        height: horizontalScale((SCREEN_HEIGHT * 68) / 100),
        resizeMode: 'cover',
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

export default JobDetail;
