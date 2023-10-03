import useImageScroll from 'hooks/useImageScroll';
import { customMapStyle } from 'screens/Locations/Locations.map';

import React from 'react';
import { useIntl } from 'react-intl';
import { StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Animated from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { colors, paddingHorizontalGlobal } from 'themes';

import { drone1 } from 'assets/images';
import { markerMap } from 'assets/images';

import { Text } from 'components';
import { Button } from 'components/Button';
import { HeaderNavigator } from 'components/Header';
import { View } from 'components/View';

import { SCREEN_HEIGHT, horizontalScale, verticalScale } from 'utils';

const heightImage = horizontalScale((SCREEN_HEIGHT * 68) / 100);
const gapLongitude = 0.002;
const gapLatitude = 0.0003;

const JobDetail = () => {
    const { formatMessage } = useIntl();
    const { top } = useSafeAreaInsets();
    const { scrollHandler, styleBg, styleHeader } = useImageScroll(heightImage);

    const paddingTop = top === 0 ? verticalScale(10) : top;

    return (
        <>
            <HeaderNavigator
                animatedHeaderStyle={styleHeader}
                isGoBack={true}
                customStyle={[styles.customHeader, { paddingTop }]}
            />
            <Animated.ScrollView
                scrollEventThrottle={16}
                onScroll={scrollHandler}
                showsVerticalScrollIndicator={false}
                style={styles.container}
            >
                <View style={styles.image}>
                    <Animated.View style={[styles.containerBg, { height: heightImage }]}>
                        <MapView
                            style={[styles.map]}
                            region={{
                                latitude: 37.78825 - gapLongitude,
                                longitude: -122.4324 - gapLatitude,
                                latitudeDelta: 0.015,
                                longitudeDelta: 0.0121,
                            }}
                            customMapStyle={customMapStyle}
                            userInterfaceStyle="dark"
                            provider={PROVIDER_GOOGLE}
                            pitchEnabled={false}
                            rotateEnabled={false}
                            zoomEnabled={false}
                            scrollEnabled={false}
                        >
                            <Marker
                                coordinate={{
                                    latitude: 37.78825,
                                    longitude: -122.4324,
                                }}
                                key={'active'}
                            >
                                <View style={styles.callout}>
                                    <View style={styles.marker}>
                                        <Text style={styles.markerTitle} type="indusMdBold">
                                            BINGHAMTON UNIVERSITY
                                        </Text>
                                        <Text style={styles.markerTitle} type="robotoMonoXsLight">
                                            35 Pilots Available
                                        </Text>
                                    </View>
                                    <FastImage
                                        source={markerMap}
                                        resizeMode="contain"
                                        style={styles.flag}
                                    />
                                </View>
                            </Marker>
                        </MapView>
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
                                    <Text
                                        type="rajdMdMedium"
                                        style={[styles.white, { maxWidth: 300 }]}
                                    >
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
                                defaultMessage: 'Arrival Instructions',
                            })}
                        </Text>

                        <View style={styles.intructionSection}>
                            <Text type="arialMdLight" style={[styles.white]}>
                                {
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae orci id ligula varius commodo. Donec ex mauris, fermentum nec leo sollicitudin, finibus pulvinar ligula. '
                                }
                            </Text>
                            <Button
                                style={styles.buttonEdit}
                                title={formatMessage({
                                    defaultMessage: 'Edit Instructions',
                                })}
                                onPress={() => {}}
                            />
                        </View>
                    </View>

                    <View>
                        <Text type="indusMdBold" style={styles.titleInfoSection}>
                            {formatMessage({
                                defaultMessage: 'Job Details',
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
        </>
    );
};

const styles = StyleSheet.create({
    customHeader: {
        flex: 1,
        zIndex: 2,
        paddingHorizontal: verticalScale(20),
        position: 'absolute',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    container: {
        flex: 1,
        backgroundColor: colors['black'][1],
    },
    white: {
        color: colors['white'][0],
    },
    bg: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    containerBg: {
        flex: 1,
    },
    avatar: {
        width: horizontalScale(100),
        height: horizontalScale(100),
        borderRadius: 200,
    },
    image: {
        position: 'relative',
        width: '100%',
        height: heightImage,
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
    buttonEdit: {
        backgroundColor: colors['gray'][3],
    },

    /////////

    inner: {
        height: '100%',
        padding: 20,
        zIndex: 1,
        backgroundColor: '#000',
    },
    map: {
        height: '110%',
    },
    header: {
        width: '100%',
        paddingHorizontal: verticalScale(20),
        position: 'absolute',
    },
    locationList: {
        gap: 10,
        paddingBottom: verticalScale(65),
    },
    button: {
        zIndex: 1,
        paddingBottom: verticalScale(10),
        ...paddingHorizontalGlobal,
    },
    marker: {
        backgroundColor: colors.black?.[0],
        padding: verticalScale(10),
        borderRadius: 5,
        alignItems: 'center',
        gap: 2,
    },
    markerTitle: {
        color: colors.white[0],
    },
    markerDesc: {
        color: colors.gray[1],
    },
    callout: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    flag: {
        flex: 1,
        width: verticalScale(20),
        height: verticalScale(30),
    },
    mapWrapper: {
        height: verticalScale(345),
    },
});

export default JobDetail;
