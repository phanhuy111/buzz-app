import { extend } from "lodash";
import { StyleSheet, Text, View } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { colors } from "themes";
import { moderateScale, verticalScale } from "utils";

interface IButton {
  onPress: () => void;
  title: string;
}

export const Button = ({ onPress, title, ...props }: IButton) => {
  return (
    <TouchableHighlight style={styles.button} onPress={onPress} {...props}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: verticalScale(14),
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: colors.gray[1],
    borderRadius: 10,
  },
  buttonText: {
    fontFamily: "Industry-Bold",
    fontSize: moderateScale(16),
    color: colors.white[0],
  },
});
