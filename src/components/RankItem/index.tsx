import { ParamListBase, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { useIntl } from "react-intl";
import { ImageBackground, StyleSheet, View } from "react-native";
import FastImage from "react-native-fast-image";

import { colors } from "themes";

import { buzzItemBg, logoBg, rankLine } from "assets/images";

import { Button } from "components/Button";
import { Text } from "components/Text";

import { horizontalScale, verticalScale } from "utils";

import { JOB_DETAIL } from "constants/routeNames";

import { IPilots } from "types";

interface PropsRankItem {
    data?: IPilots;
}

export const RankItem = ({ data }: PropsRankItem) => {
    const rank = 3;
    const { formatMessage } = useIntl();
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

    function navigateDetail() {
        navigation.navigate(JOB_DETAIL);
    }

    return (
        <View style={styles.wrapper}>
            <ImageBackground imageStyle={styles.imageLogoBg} source={buzzItemBg} resizeMode="cover">
                <View style={styles.container}>
                    <ImageBackground style={styles.imageLogo} source={logoBg}>
                        {Array(rank)
                            .fill("")
                            .map(value => {
                                return (
                                    <FastImage
                                        style={styles.rankImg}
                                        source={rankLine}
                                        resizeMode={FastImage.resizeMode.contain}
                                    />
                                );
                            })}
                    </ImageBackground>
                    <View style={styles.containerText}>
                        <Text style={styles.textTitle} type="indusMdBold">
                            {data?.title}
                        </Text>
                        <Text style={styles.text} type="robotoMono">
                            {data?.description}
                        </Text>
                    </View>
                    {data?.isDetail ? (
                        <View style={styles.containerDetail}>
                            <Button
                                type="dark"
                                title={formatMessage({ defaultMessage: "INFO" })}
                                onPress={() => navigateDetail()}
                                font="robotoMonoXsLight"
                            />
                            <Button
                                type="dark"
                                title={formatMessage({ defaultMessage: "CANCEL" })}
                                onPress={() => {}}
                                font="robotoMonoXsLight"
                            />
                        </View>
                    ) : (
                        <View style={styles.containerPrice}>
                            <Text style={styles.textTitle} type="rajdMdMedium">
                                {"$" + data?.price}
                            </Text>
                        </View>
                    )}
                </View>
            </ImageBackground>
        </View>
    );
};

export const styles = StyleSheet.create({
    wrapper: {},
    imageLogoBg: {
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#0987E2",
    },
    container: {
        flexDirection: "row",
        alignItems: "center",
        padding: verticalScale(10),
        gap: horizontalScale(10),
    },
    imageLogo: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: verticalScale(70),
        height: verticalScale(70),
    },
    containerText: {
        flex: 1,
        flexDirection: "column",
    },
    containerPrice: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: colors["white"]["1"],
    },
    textTitle: {
        color: colors["white"]["0"],
    },
    containerDetail: {
        gap: 5,
    },
    rankImg: {
        width: verticalScale(50),
        height: verticalScale(10),
        borderRadius: 35,
    },
});
