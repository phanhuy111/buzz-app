import { FlashList } from '@shopify/flash-list';
import { Text } from 'components';
import { HeaderNavigator } from 'components/Header';
import { SafeAreaView } from 'hocs';
import React from 'react';
import { useIntl } from 'react-intl';
import { StyleSheet, View, ScrollView, ImageBackground } from 'react-native';
import FastImage from 'react-native-fast-image';
import { colors } from 'themes';
import { SCREEN_HEIGHT, SCREEN_WIDTH, horizontalScale, verticalScale } from 'utils';

const DATA = [
    {
        title: 'First Item',
    },
    {
        title: 'Second Item',
    },
];

const TweetCell = ({ item }: { item: any }) => {
    // console.log('item.title', item.title);
    return (
        <View>
            <Text type="titleItems" style={styles.titleInfoSection}>
                {'About Me'}
            </Text>
        </View>
    );
};

const JobDetail = () => {
    const { formatMessage } = useIntl();

    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <HeaderNavigator isGoBack={true} customStyle={styles.customHeader} />
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
                                <Text type="textHypeSmall" style={[styles.white]}>
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

                        <View style={styles.intructionSection}>
                            <FlashList
                                horizontal={true}
                                renderItem={({ item }) => {
                                    return <TweetCell item={item} />;
                                }}
                                estimatedItemSize={50}
                                data={DATA}
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
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    customHeader: {
        zIndex: 2,
        paddingHorizontal: verticalScale(20),
        position: 'absolute',
        top: 0,
        flex: 1,
        width: horizontalScale((SCREEN_WIDTH * 90) / 100),
        display: 'flex',
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
        display: 'flex',
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
        display: 'flex',
        flexDirection: 'row',
        gap: horizontalScale(20),
    },
    section1: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
    },
    sectionInfo: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingVertical: horizontalScale(8),
    },
    intructionSection: {
        display: 'flex',
        flexDirection: 'column',
        paddingHorizontal: horizontalScale(20),
        gap: horizontalScale(10),
    },
    buttonEdit: {
        backgroundColor: colors['gray'][3],
    },
});

export default JobDetail;
