import { SafeAreaView } from "hocs";

import { useState } from "react";
import { useIntl } from "react-intl";
import { StyleProp, StyleSheet, TouchableHighlight, View } from "react-native";
import FastImage from "react-native-fast-image";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { colors } from "themes";

import ArrowDown from "assets/icons/arrow-down.svg";
import Arrow from "assets/icons/arrow.svg";
import { homeBg } from "assets/images";

import { Text } from "components";
import { Button } from "components/Button";
import CalendarListScreen from "components/Calendar";
import { HeaderNavigator } from "components/Header";

import { dayShortName, horizontalScale, verticalScale } from "utils";

const DatePicker = () => {
    const { formatMessage } = useIntl();

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date: any) => {
        console.warn("A date has been picked: ", date);
        hideDatePicker();
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
                            {formatMessage({ defaultMessage: "Choose a Date" })}
                        </Text>
                        <Text style={styles.text} type="industryXLBold">
                            {"July 14th"}
                        </Text>
                        <View style={[styles.containerRow, styles.row]}>
                            <Text style={styles.text} type="rajdhSmMedium">
                                {"10:00am"}
                            </Text>
                            <Arrow />
                            <Text style={styles.text} type="rajdhSmMedium">
                                {"6:00Pm"}
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
                    <TouchableHighlight onPress={() => showDatePicker()} style={styles.footerTime}>
                        <View>
                            <Text style={[styles.text]} type="rajdhXsBold">
                                {formatMessage({ defaultMessage: "Start Time" })}
                            </Text>
                            <View style={styles.pickerSection}>
                                <Text type="">{"10:00 AM"}</Text>
                                <ArrowDown />
                            </View>
                            <DateTimePickerModal
                                isVisible={isDatePickerVisible}
                                mode="time"
                                onConfirm={handleConfirm}
                                onCancel={hideDatePicker}
                            />
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => showDatePicker()} style={styles.footerTime}>
                        <View>
                            <Text style={[styles.text]} type="rajdhXsBold">
                                {formatMessage({ defaultMessage: "End Time" })}
                            </Text>
                            <View style={styles.pickerSection}>
                                <Text type="">{"10:00 AM"}</Text>
                                <ArrowDown />
                            </View>
                            <DateTimePickerModal
                                isVisible={isDatePickerVisible}
                                mode="time"
                                onConfirm={handleConfirm}
                                onCancel={hideDatePicker}
                            />
                        </View>
                    </TouchableHighlight>
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
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    containerRow: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: horizontalScale(5),
    },
    statusRow: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: horizontalScale(5),
        paddingHorizontal: horizontalScale(20),
        paddingVertical: horizontalScale(20),
    },
    row: {
        flexDirection: "row",
        gap: horizontalScale(15),
    },
    text: {
        color: colors["white"]["0"],
    },
    status: {
        paddingHorizontal: 10,
        paddingVertical: 0,
    },
    footer: {
        flex: 1,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        backgroundColor: colors["black"][0],
        position: "absolute",
        bottom: 0,
        padding: horizontalScale(20),
        gap: 10,
    },
    footerTimeSection: {
        flexDirection: "row",
        gap: 10,
    },
    footerTime: {
        flex: 1,
        flexDirection: "column",
    },
    pickerSection: {
        flex: 1,
        padding: horizontalScale(10),
        flexDirection: "row",
        gap: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "rgba(255, 255, 255, 0.20)",
        backgroundColor: colors["black"][4],
    },
    button: {
        width: "100%",
    },
}) as Record<string, StyleProp<any>>;

export default DatePicker;
