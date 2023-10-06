import dayjs from 'dayjs';
import { SafeAreaView } from 'hocs';
import { RootState } from 'store';
import { resetAll } from 'store/sagas/resetAll';

import { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { StyleProp, StyleSheet, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useDispatch, useSelector } from 'react-redux';

import { colors } from 'themes';

import ArrowDown from 'assets/icons/arrow-down.svg';
import Arrow from 'assets/icons/arrow.svg';
import { homeBg } from 'assets/images';

import { Text } from 'components';
import { Button } from 'components/Button';
import CalendarListScreen from 'components/Calendar';
import { HeaderNavigator } from 'components/Header';
import { View } from 'components/View';

import { dayShortName, horizontalScale, verticalScale } from 'utils';

const DatePicker = () => {
    const { date, startTime, endTime } = useSelector((state: RootState) => state.selectDate);
    const dispatch = useDispatch();

    const { formatMessage } = useIntl();
    const [isDatePickerVisible, setDatePickerVisibility] = useState({
        start: false,
        end: false,
    });

    const [time, setTime] = useState({
        start: startTime,
        end: endTime,
    });

    const showDatePicker = (type: string | undefined) => {
        if (type === 'START') {
            return setDatePickerVisibility({ ...isDatePickerVisible, start: true });
        }
        return setDatePickerVisibility({ ...isDatePickerVisible, end: true });
    };

    const hideDatePicker = (type: string | undefined) => {
        if (type === 'START') {
            return setDatePickerVisibility({ ...isDatePickerVisible, start: false });
        }
        return setDatePickerVisibility({ ...isDatePickerVisible, end: false });
    };

    const handleConfirm = (type: string, timeParams: any) => {
        let convertedTime = dayjs(timeParams).format('HH:mm');
        if (type === 'START') {
            setTime({ ...time, start: convertedTime });
            return hideDatePicker(type);
        } else {
            setTime({ ...time, start: startTime, end: convertedTime });
            return hideDatePicker(type);
        }
    };

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
                        <Text style={styles.text} type="rajdhXsLight">
                            {formatMessage({ defaultMessage: 'Choose a Date' })}
                        </Text>
                        <Text style={styles.text} type="industryXLBold">
                            {dayjs(date).format('MMM D')}
                        </Text>
                        <View style={[styles.containerRow, styles.row]}>
                            <Text style={styles.text} type="rajdhSmMedium">
                                {time.start}
                            </Text>
                            <Arrow />
                            <Text style={styles.text} type="rajdhSmMedium">
                                {time.end}
                            </Text>
                        </View>

                        <View style={[styles.statusRow, styles.row]}>
                            {dayShortName.map((value, index) => {
                                return (
                                    <View style={styles.status} key={index}>
                                        <Text style={[styles.text]} type="rajdhXsBold">
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
            <View style={styles.footer}>
                <View style={styles.footerTimeSection}>
                    <View style={[styles.footerTime, { gap: 4 }]}>
                        <Text style={[styles.text]} type="robotoMonoXsLight">
                            {formatMessage({ defaultMessage: 'Start Time' })}
                        </Text>
                        <TouchableOpacity
                            onPress={() => showDatePicker('START')}
                            style={styles.pickerSection}
                        >
                            <Text type="rajdhMdLight" style={[styles.text, { flex: 1 }]}>
                                {time.start}
                            </Text>
                            <ArrowDown />
                        </TouchableOpacity>

                        <DateTimePickerModal
                            isVisible={isDatePickerVisible.start}
                            mode="time"
                            is24Hour={true}
                            onConfirm={time => handleConfirm('START', time)}
                            onCancel={() => hideDatePicker('START')}
                        />
                    </View>
                    <View style={[styles.footerTime, { gap: 4 }]}>
                        <Text style={[styles.text]} type="robotoMonoXsLight">
                            {formatMessage({ defaultMessage: 'End Time' })}
                        </Text>
                        <TouchableOpacity
                            onPress={() => showDatePicker('END')}
                            style={styles.pickerSection}
                        >
                            <Text type="rajdhMdLight" style={[styles.text, { flex: 1 }]}>
                                {time.end}
                            </Text>
                            <ArrowDown />
                        </TouchableOpacity>
                        <DateTimePickerModal
                            isVisible={isDatePickerVisible.end}
                            mode="time"
                            is24Hour={true}
                            onConfirm={time => handleConfirm('END', time)}
                            onCancel={() => hideDatePicker('END')}
                        />
                    </View>
                </View>
                <Button style={styles.button} onPress={() => {}} title="Save Date & Time" />
            </View>
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
        justifyContent: 'center',
        alignItems: 'center',
        gap: horizontalScale(5),
    },
    statusRow: {
        width: '100%',

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
    footer: {
        flex: 1,
        width: '100%',

        justifyContent: 'center',
        backgroundColor: colors['black'][0],
        position: 'absolute',
        bottom: 0,
        padding: horizontalScale(20),
        gap: 10,
    },
    footerTimeSection: {
        flexDirection: 'row',
        gap: 10,
    },
    footerTime: {
        flex: 1,
        flexDirection: 'column',
    },
    pickerSection: {
        // flex: 1,
        padding: horizontalScale(10),
        flexDirection: 'row',
        alignItems: 'center',
        // jus
        gap: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.20)',
        backgroundColor: colors['black'][4],
    },
    button: {
        width: '100%',
    },
}) as Record<string, StyleProp<any>>;

export default DatePicker;
