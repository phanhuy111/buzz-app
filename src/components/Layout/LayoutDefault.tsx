import { SafeAreaView } from "hocs";
import { StyleSheet, View } from "react-native";
import FastImage from "react-native-fast-image";
import { HeaderNavigator } from "../Header";
import { paddingHorizontalGlobal } from "themes";
import { homeBg } from "assets/images";

export const LayoutDefault = ({ children }: { children: React.ReactNode }) => {
  return (
    <View style={styles.container}>
      <FastImage style={styles.bg} source={homeBg} resizeMode="stretch" />
      <SafeAreaView>
        <View style={styles.inner}>
          <HeaderNavigator />
          {children}
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
    gap: 10,
    ...paddingHorizontalGlobal,
  },
  bg: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
