import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { HOME } from "constants/routeNames";
import { Home } from "screens";

const Stack = createNativeStackNavigator();

function ApplicationStack() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={HOME} component={Home} />
      </Stack.Navigator>
    </GestureHandlerRootView>
  );
}

export default ApplicationStack;
