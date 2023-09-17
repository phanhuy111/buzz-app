import { StyleProp, StyleSheet, View } from "react-native";

import { colors } from "themes";

import { horizontalScale } from "utils";

const PastJobs = () => {
    return <View style={styles.container}>{"PastJobs"}</View>;
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
        justifyContent: "center",
        alignItems: "center",
        gap: horizontalScale(5),
    },
    statusRow: {
        width: "100%",

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

        justifyContent: "center",
        backgroundColor: colors["black"][0],
        position: "absolute",
        bottom: 0,
        padding: horizontalScale(20),
    },
    button: {
        width: "100%",
    },
}) as Record<string, StyleProp<any>>;

export default PastJobs;
