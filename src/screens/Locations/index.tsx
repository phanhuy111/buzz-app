import { useIntl } from 'react-intl';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';
import { verticalScale } from 'utils';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { HeaderNavigator } from 'components/Header';
import { customMapStyle } from './Locations.map';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, paddingHorizontalGlobal } from 'themes';
import { ScrollView } from 'react-native-gesture-handler';
import { LocationItem } from 'components/LocationItem';
import { Button } from 'components/Button';

const Locations = () => {
    const { formatMessage } = useIntl();
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
    const { top, bottom } = useSafeAreaInsets();

    return (
        <View style={styles.container}>
            <MapView
                style={[styles.map, { height: verticalScale(390) }]}
                region={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
                customMapStyle={customMapStyle}
                userInterfaceStyle="dark"
            ></MapView>
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
                    {[...Array(3)].map(() => (
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
        position: 'relative',
        backgroundColor: colors.black[0],
    },
    inner: {
        height: '100%',
        padding: 20,
    },
    map: {
        height: 390,
    },
    header: {
        width: '100%',
        paddingHorizontal: verticalScale(20),
        position: 'absolute',
    },
    locationList: {
        gap: 10,
    },
    button: {
        paddingBottom: verticalScale(10),
        ...paddingHorizontalGlobal,
    },
});
