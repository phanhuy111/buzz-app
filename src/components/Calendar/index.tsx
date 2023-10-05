import { RootState } from 'store';
import { setDate } from 'store/slices/selectDateSlice';

import React, { forwardRef, useCallback, useMemo, useState } from 'react';
import { StyleSheet, TextStyle, View } from 'react-native';
import { CalendarList, DateData } from 'react-native-calendars';
import { useDispatch, useSelector } from 'react-redux';

import { colors } from 'themes';

import { Text } from 'components/Text';

const RANGE_PAST = 12;
const RANGE_FUTURE = 24;
const minDate = '2022-06-05';
const nextWeekDate = '2022-07-14';
const nextMonthDate = '2022-08-05';

interface Props {
    horizontalView?: boolean;
    onCallback?: (day: string) => void;
}

const CalendarListScreen = (props: Props) => {
    const { date } = useSelector((state: RootState) => state.selectDate);
    const dispatch = useDispatch();

    const { horizontalView, onCallback } = props;
    const [selected, setSelected] = useState(date);

    const marked = useMemo(() => {
        return {
            [nextWeekDate]: {
                selected: selected === nextWeekDate,
                selectedTextColor: colors['purple'][0],
                marked: true,
            },
            [nextMonthDate]: {
                selected: selected === nextMonthDate,
                selectedTextColor: colors['purple'][0],
                marked: true,
            },
            [selected as string]: {
                selected: true,
                disableTouchEvent: true,
                selectedColor: colors['purple'][0],
                selectedTextColor: 'white',
                borderRadius: 15,
            },
        };
    }, [selected]);

    const onDayPress = useCallback((day: DateData) => {
        dispatch(setDate({ date: day.dateString }));
        setSelected(day.dateString);
        onCallback?.(day.dateString);
    }, []);

    return (
        <>
            <CalendarList
                testID={'calendarList'}
                current={date!}
                minDate={minDate}
                pastScrollRange={RANGE_PAST}
                futureScrollRange={RANGE_FUTURE}
                onDayPress={onDayPress}
                onDayLongPress={DateData => {
                    console.log(DateData);
                }}
                markedDates={marked}
                renderHeader={!horizontalView ? renderCustomHeader : undefined}
                calendarHeight={!horizontalView ? 360 : undefined}
                theme={!horizontalView ? (theme as any) : undefined}
                horizontal={horizontalView}
                pagingEnabled={horizontalView}
                staticHeader={horizontalView}
                hideDayNames={true}
                allowSelectionOutOfRange={true}
            />
        </>
    );
};

function renderCustomHeader(date: any) {
    const header = date.toString('MMMM yyyy');
    const [month, year] = header.split(' ');
    const textStyle: TextStyle = {
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 10,
        paddingBottom: 10,
        color: colors['white'][0],
        paddingRight: 5,
    };

    return (
        <View style={styles.header}>
            <Text style={[styles.month, textStyle]} type="indusMdMedium">{`${month}`}</Text>
            <Text style={[styles.year, textStyle]} type="indusMdMedium">
                {year}
            </Text>
        </View>
    );
}

export default forwardRef(CalendarListScreen);

const theme = {
    stylesheet: {
        calendar: {
            header: {
                dayHeader: {
                    fontWeight: '700',
                    color: colors['blue'][1],
                },
            },
        },
    },
    'stylesheet.day.basic': {
        today: {
            fontFamily: 'Rajdhani',
            borderColor: colors['blue'][1],
            borderWidth: 0.8,
            borderRadius: 10,
        },
        todayText: {
            fontFamily: 'Rajdhani',
            color: colors['white'][0],
            fontWeight: '900',
        },
    },
    'stylesheet.dot': {
        fontFamily: 'Rajdhani',
        borderColor: colors['blue'][1],
        borderWidth: 0.8,
    },
    textDayStyle: {
        fontSize: 18,
        fontFamily: 'Rajdhani',
        color: colors['white'][0],
        fontWeight: '600',
    },
    dotStyle: {
        backgroundColor: colors['gray'][2],
    },
    textInactiveColor: colors['gray'][1],
    textDisabledColor: colors['gray'][1],
    calendarBackground: colors['black'][2],
    marking: {},
};

const styles = StyleSheet.create({
    header: {
        justifyContent: 'center',
        flexDirection: 'row',
        width: '100%',
    },
    month: {
        marginLeft: 5,
    },
    year: {
        marginRight: 5,
    },
});
