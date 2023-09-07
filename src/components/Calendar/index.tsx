import { Text } from 'components/Text';
import React, { useState, useMemo, useCallback } from 'react';
import { StyleSheet, View, TextStyle } from 'react-native';
import { CalendarList, DateData } from 'react-native-calendars';
import { colors } from 'themes';

const RANGE = 24;
const initialDate = '2022-07-05';
const nextWeekDate = '2022-07-14';
const nextMonthDate = '2022-08-05';

interface Props {
    horizontalView?: boolean;
    onCallback?: (day: string) => void;
}

const CalendarListScreen = (props: Props) => {
    const { horizontalView, onCallback } = props;
    const [selected, setSelected] = useState(initialDate);
    const marked = useMemo(() => {
        return {
            [nextWeekDate]: {
                selected: selected === nextWeekDate,
                selectedTextColor: '#5E60CE',
                marked: true,
            },
            [nextMonthDate]: {
                selected: selected === nextMonthDate,
                selectedTextColor: '#5E60CE',
                marked: true,
            },
            [selected]: {
                selected: true,
                disableTouchEvent: true,
                selectedColor: '#5E617A',
                selectedTextColor: 'white',
                borderRadius: 15,
            },
        };
    }, [selected]);

    const onDayPress = useCallback((day: DateData) => {
        setSelected(day.dateString);
        onCallback?.(day.dateString);
    }, []);

    return (
        <>
            <CalendarList
                testID={'calendarList'}
                current={initialDate}
                pastScrollRange={RANGE}
                futureScrollRange={RANGE}
                onDayPress={onDayPress}
                markedDates={marked}
                renderHeader={!horizontalView ? renderCustomHeader : undefined}
                calendarHeight={!horizontalView ? 360 : undefined}
                theme={!horizontalView ? theme : undefined}
                horizontal={horizontalView}
                pagingEnabled={horizontalView}
                staticHeader={horizontalView}
                hideDayNames={true}
            />
        </>
    );
};

const theme = {
    stylesheet: {
        calendar: {
            header: {
                dayHeader: {
                    fontWeight: '700',
                    color: '#48BFE3',
                },
            },
        },
    },
    'stylesheet.day.basic': {
        today: {
            fontFamily: 'Rajdhani',
            borderColor: '#48BFE3',
            borderWidth: 0.8,
        },
        todayText: {
            fontFamily: 'Rajdhani',
            color: '#FFFFFF',
            fontWeight: '900',
        },
    },
    'stylesheet.dot': {
        fontFamily: 'Rajdhani',
        borderColor: '#48BFE3',
        borderWidth: 0.8,
    },
    textDayStyle: {
        fontSize: 18,
        fontFamily: 'Rajdhani',
        color: '#FFFFFF',
        fontWeight: '600',
    },
    dotStyle: {
        backgroundColor: '#5E617A',
    },
    textInactiveColor: '#111111',
    textDisabledColor: '#111111',
    calendarBackground: '#111111',
    marking: {},
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
            <Text style={[styles.month, textStyle]} type="titleLItems">{`${month}`}</Text>
            <Text style={[styles.year, textStyle]} type="titleLItems">
                {year}
            </Text>
        </View>
    );
}

export default CalendarListScreen;

const styles = StyleSheet.create({
    header: {
        display: 'flex',
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
