import { SafeAreaView } from "hocs";
import { useIntl } from "react-intl";
import { StyleSheet, Text, View } from "react-native";

const Home = () => {
  const { formatMessage } = useIntl();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>{formatMessage({ defaultMessage: "Home" })}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
