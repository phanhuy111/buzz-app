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

export const DrawerCustom = (props: DrawerContentComponentProps) => {
  const { formatMessage } = useIntl();

  const data = [
    {
      title: formatMessage({ defaultMessage: "SETTING" }),
    },
    {
      title: formatMessage({ defaultMessage: "PAST JOBS" }),
    },
    {
      title: formatMessage({ defaultMessage: "PAYMENT OPTIONS" }),
    },
    {
      title: formatMessage({ defaultMessage: "NOTIFICATIONS" }),
    },
    {
      title: formatMessage({ defaultMessage: "TAX DOCUMENTS" }),
    },
  ];

  const onClose = () => {
    props.navigation.dispatch(DrawerActions.closeDrawer());
  };

  const renderItem = useCallback(({ item, index }: any) => {
    const onPress = () => {
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
            <TouchableHighlight style={styles.button} onPress={onClose}>
              <Text style={styles.buttonText}>Log out</Text>
            </TouchableHighlight>
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
    gap: 10,
  },
  label: {
    fontFamily: "Rajdhani",
    color: colors.white[0],
    textTransform: "uppercase",
    fontSize: moderateScale(24),
    paddingBottom: verticalScale(20),
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
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: "space-between",
  },
  headerInner: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  footer: {
    paddingHorizontal: verticalScale(20),
  },
  button: {
    padding: 14,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: colors.gray[1],
    borderRadius: 10,
  },
  buttonText: {
    fontFamily: "Rajdhani",
    fontSize: moderateScale(24),
    fontWeight: "700",
    color: colors.white[0],
  },
});
