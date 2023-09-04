import Input from "components/DataEntry/Input";
import { useIntl } from "react-intl";
import { StyleSheet, View } from "react-native";
import Pin from "assets/icons/pin.svg";
import Calendar from "assets/icons/calendar.svg";
import KeyboardAwareScrollView from "components/KeyboardAwareScrollView";
import { verticalScale } from "utils";
import { LayoutDefault } from "components";

const Home = () => {
  const { formatMessage } = useIntl();
  return (
    <LayoutDefault>
      <KeyboardAwareScrollView>
        <View style={styles.inputs}>
          <Input
            leftInputComponent={<Pin width={25} />}
            placeholder={formatMessage({
              defaultMessage: "CHOOSE LOCATION",
            })}
          />
          <Input
            leftInputComponent={<Calendar width={25} />}
            placeholder={formatMessage({
              defaultMessage: "SELECT DATE",
            })}
          />
        </View>
      </KeyboardAwareScrollView>
    </LayoutDefault>
  );
};

export default Home;

const styles = StyleSheet.create({
  inputs: {
    gap: verticalScale(10),
  },
});
