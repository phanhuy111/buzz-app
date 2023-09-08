import { SafeAreaView } from 'hocs';
import { StyleProp, StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { homeBg } from 'assets/images';
import CalendarListScreen from 'components/Calendar';
import { HeaderNavigator } from 'components/Header';
import { Text } from 'components';
import Arrow from 'assets/icons/arrow.svg';
import { colors } from 'themes';
import { horizontalScale, verticalScale } from 'utils';

const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

const PastJobs = () => {
    return (
        <View style={styles.container}>
            <FastImage style={styles.bg} source={homeBg} resizeMode="stretch" />
            <SafeAreaView>
                <View style={styles.inner}>
                    <HeaderNavigator
                        isGoBack
                        customStyle={{
                            paddingHorizontal: verticalScale(20),
                        }}
                    />
                    <View style={styles.containerRow}>
                        <Text style={styles.text} type="labelLMedium">
                            {'Choose a Date'}
                        </Text>
                        <Text style={styles.text} type="headlineLarge">
                            {'July 14th'}
                        </Text>
                        <View style={[styles.containerRow, styles.row]}>
                            <Text style={styles.text} type="labelMedium">
                                {'10:00am'}
                            </Text>
                            <Arrow />
                            <Text style={styles.text} type="labelMedium">
                                {'6:00Pm'}
                            </Text>
                        </View>

                        <View style={[styles.statusRow, styles.row]}>
                            {days.map((value, index) => {
                                return (
                                    <View style={styles.status} key={index}>
                                        <Text style={[styles.text]} type="labelMMedium">
                                            {value}
                                        </Text>
                                    </View>
                                );
                            })}
                        </View>
                    </View>

                    <CalendarListScreen />
                </View>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inner: {
        flex: 1,
    },
    bg: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    containerRow: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: horizontalScale(5),
    },
    statusRow: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: horizontalScale(5),
        paddingHorizontal: horizontalScale(20),
        paddingVertical: horizontalScale(20),
    },
    row: {
        flexDirection: 'row',
        gap: horizontalScale(15),
    },
    text: {
        color: colors['white']['0'],
    },
    status: {
        paddingHorizontal: 10,
        paddingVertical: 0,
    },
}) as Record<string, StyleProp<any>>;

export default PastJobs;
