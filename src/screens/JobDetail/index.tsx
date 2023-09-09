import { Text } from 'components';
import { Button } from 'components/Button';
import { HeaderNavigator } from 'components/Header';
import { SafeAreaView } from 'hocs';
import React from 'react';
import { useIntl } from 'react-intl';
import { StyleSheet, View, ScrollView, ImageBackground } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from 'themes';
import { SCREEN_HEIGHT, SCREEN_WIDTH, horizontalScale, verticalScale } from 'utils';

const JobDetail = () => {
    const { formatMessage } = useIntl();
    const { top } = useSafeAreaInsets();

    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView>
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
                    </ImageBackground>
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
                                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae orci id ligula varius commodo. Donec ex mauris, fermentum nec leo sollicitudin, finibus pulvinar ligula. Nulla rhoncus, metus non rhoncus hendrerit, nisi felis aliquet augue, nec gravida ligula ligula in lacus. Pellentesque mollis odio ac gravida scelerisque. Curabitur est neque, convallis at faucibus eu, lobortis ut ex. Etiam bibendum urna id tellus suscipit, sit amet pretium magna dictum. Sed quis mauris at risus sagittis sodales at nec ex. In leo ante, maximus vitae finibus vitae, rhoncus a nulla.'
                                    }
                                </Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    customHeader: {
        flex: 1,
        zIndex: 2,
        paddingHorizontal: verticalScale(20),
        position: 'absolute',
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
