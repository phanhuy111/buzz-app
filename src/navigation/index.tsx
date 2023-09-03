import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  HOME,
  NOTIFICATIONS,
  PAST_JOB,
  PAYMENT_OPTIONS,
  SETTING,
  TAX_DOCUMENTS,
} from "constants/routeNames";
import { Home } from "screens";
import { StatusBar, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerCustom } from "components";
import { scale } from "utils";

const Drawer = createDrawerNavigator();

function ApplicationStack() {
  return (
    <NavigationContainer independent>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar animated={true} barStyle={"light-content"} />
        <Drawer.Navigator
          drawerContent={(props) => {
            return <DrawerCustom {...props} />;
          }}
          screenOptions={{
            drawerType: "front",
            drawerPosition: "right",
            headerShown: false,
            drawerStyle: {
              width: scale(310),
            },
          }}
        >
          <Drawer.Screen name={HOME} component={Home} />
          <Drawer.Screen name={SETTING} component={Home} />
          <Drawer.Screen name={PAST_JOB} component={Home} />
          <Drawer.Screen name={PAYMENT_OPTIONS} component={Home} />
          <Drawer.Screen name={NOTIFICATIONS} component={Home} />
          <Drawer.Screen name={TAX_DOCUMENTS} component={Home} />
        </Drawer.Navigator>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}

export default ApplicationStack;
