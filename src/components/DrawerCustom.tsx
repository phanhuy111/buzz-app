import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { DrawerActions } from "@react-navigation/native";
import { FlashList } from "@shopify/flash-list";
import { SafeAreaView } from "hocs";
import { useCallback } from "react";
import { useIntl } from "react-intl";
import { StyleSheet, Text, View } from "react-native";
import FastImage from "react-native-fast-image";
import {
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { colors } from "themes";
import { avatar } from "assets/images";
import Close from "assets/icons/close.svg";
import { moderateScale, scale, verticalScale } from "utils";
import { Button } from "./Button";
import {
  HOME,
  NOTIFICATIONS,
  PAST_JOB,
  PAYMENT_OPTIONS,
  SETTING,
  TAX_DOCUMENTS,
} from "constants/index";

export const DrawerCustom = (props: DrawerContentComponentProps) => {
  const { formatMessage } = useIntl();

  const data = [
    {
      title: formatMessage({ defaultMessage: "HOME" }),
      route: HOME,
    },
    {
      title: formatMessage({ defaultMessage: "SETTING" }),
      route: SETTING,
    },
    {
      title: formatMessage({ defaultMessage: "PAST JOBS" }),
      route: PAST_JOB,
    },
    {
      title: formatMessage({ defaultMessage: "PAYMENT OPTIONS" }),
      route: PAYMENT_OPTIONS,
    },
    {
      title: formatMessage({ defaultMessage: "NOTIFICATIONS" }),
      route: NOTIFICATIONS,
    },
    {
      title: formatMessage({ defaultMessage: "TAX DOCUMENTS" }),
      route: TAX_DOCUMENTS,
    },
  ];

  const onClose = () => {
    props.navigation.dispatch(DrawerActions.closeDrawer());
  };

  const renderItem = useCallback(({ item, index }: any) => {
    const onPress = () => {
      props.navigation.navigate(item.route);
      onClose();
    };

    return (
      <TouchableOpacity style={styles.item} onPress={onPress}>
        <Text style={styles.label}>{item?.title}</Text>
        <View style={styles.divider} />
      </TouchableOpacity>
    );
  }, []);

  const ItemSeparatorComponent = () => {
    return <View style={{ height: scale(16) }} />;
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.inner}>
          <View style={styles.header}>
            <View style={styles.headerInner}>
              <FastImage
                source={avatar}
                resizeMode="contain"
                style={styles.avatar}
              />
              <Text style={styles.name}>Janice Wells</Text>
            </View>
            <TouchableHighlight onPress={onClose}>
              <Close width={20} />
            </TouchableHighlight>
          </View>
          <FlashList
            data={data}
            renderItem={renderItem}
            estimatedItemSize={100}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => `${index}`}
            ItemSeparatorComponent={ItemSeparatorComponent}
          />
          <View style={styles.footer}>
            <Button
              title={formatMessage({ defaultMessage: "LOG OUT" })}
              onPress={onClose}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors?.black[1],
  },
  inner: {
    flex: 1,
    gap: verticalScale(20),
  },
  label: {
    fontFamily: "Rajdhani",
    color: colors.white[0],
    textTransform: "uppercase",
    fontSize: moderateScale(24),
    paddingBottom: verticalScale(20),
    fontWeight: "500",
  },
  item: {
    paddingHorizontal: verticalScale(20),
    justifyContent: "center",
  },
  divider: {
    borderStyle: "dashed",
    borderWidth: 0.9,
    borderColor: "rgba(255, 255, 255, 0.2)",
  },
  avatar: {
    width: scale(40),
    height: scale(40),
    borderRadius: 100,
  },
  name: {
    fontFamily: "Rajdhani",
    fontSize: moderateScale(24),
    fontWeight: "700",
    color: colors.white[0],
    textTransform: "uppercase",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: verticalScale(20),
    paddingVertical: verticalScale(10),
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: colors.white[0],
  },
  headerInner: {
    flexDirection: "row",
    alignItems: "center",
    gap: verticalScale(10),
  },
  footer: {
    paddingHorizontal: verticalScale(20),
    paddingBottom: verticalScale(10),
  },
});
