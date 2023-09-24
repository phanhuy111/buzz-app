import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { useRef } from 'react';
import { useIntl } from 'react-intl';
import { StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import { ScrollView } from 'react-native-gesture-handler';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { colors, paddingHorizontalGlobal } from 'themes';

import { markerMap } from 'assets/images';

import { Text } from 'components';
import { Button } from 'components/Button';
import { HeaderNavigator } from 'components/Header';
import { LocationItem } from 'components/LocationItem';
import { View } from 'components/View';

import { verticalScale } from 'utils';

import { customMapStyle } from './Locations.map';

const Locations = () => {
    const markerRef = useRef<any>(null);
    const { formatMessage } = useIntl();
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
    const { top, bottom } = useSafeAreaInsets();

    const onRegionChangeComplete = () => {
        if (markerRef && markerRef.current && markerRef.current.showCallout) {
            markerRef.current.showCallout();
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.mapWrapper}>
                <MapView
                    style={[styles.map]}
                    region={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                    customMapStyle={customMapStyle}
                    userInterfaceStyle="dark"
                    provider={PROVIDER_GOOGLE}
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
            </View>
            <HeaderNavigator
                isGoBack
                customStyle={[
                    styles.header,
                    {
                        top: top,
                    },
                ]}
            />
            <ScrollView style={styles.inner}>
                <View style={styles.locationList}>
                    {[...Array(5)].map(() => (
                        <LocationItem
                            data={{
                                title: 'BUZZ AIRMAN',
                                subTitle: 'Cinematography',
                                description: 'BASIC EXPERIENCE',
                                image: '',
                                price: 500,
                            }}
                        />
                    ))}
                </View>
            </ScrollView>
            <View style={[styles.button, { bottom }]}>
                <Button
                    title={formatMessage({ defaultMessage: 'FIND DRONE PILOT' })}
                    onPress={() => {}}
                    type="accent"
                />
            </View>
        </View>
    );
};

export default Locations;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black[0],
    },
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
