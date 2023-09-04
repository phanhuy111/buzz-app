import { ParamListBase, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import { scale, verticalScale } from "utils";
import BuzzLogo from "assets/icons/buzz-logo.svg";
import { TouchableOpacity } from "react-native-gesture-handler";
import FastImage from "react-native-fast-image";
import { avatar } from "assets/images";
import { DrawerActions } from "@react-navigation/native";

interface IHeaderNavigatorProps {
  style?: StyleProp<ViewStyle>;
}

export const HeaderNavigator = (props: IHeaderNavigatorProps) => {
  const { style: customStyle = {} } = props;
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View style={[styles.container, customStyle]}>
      <View style={[styles.left, customStyle]}></View>
      <BuzzLogo />
      <View style={[styles.right, customStyle]}>
        <TouchableOpacity style={styles.avatar} onPress={openDrawer}>
          <FastImage
            source={avatar}
            resizeMode="contain"
            style={styles.avatar}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: verticalScale(10),
    paddingVertical: verticalScale(10),
  },
  left: {
    width: scale(30),
    height: scale(30),
    justifyContent: "center",
    alignItems: "center",
  },
  right: {},
  avatar: {
    width: scale(30),
    height: scale(30),
    borderRadius: 100,
  },
});
