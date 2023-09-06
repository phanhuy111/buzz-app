import * as React from "react";
import { Platform, StatusBar} from "react-native";

export default function useSetNavigationBarColor() {
  const backgroundColor = "";

  React.useEffect(() => {
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor(backgroundColor);
    }
  }, [backgroundColor]);
}
