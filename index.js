/**
 * @format
 */
import messaging from "@react-native-firebase/messaging";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

import { AppRegistry } from "react-native";

import { name as appName } from "./app.json";
import App from "./src/App";

// Register background handler
function onMessageReceived(remoteMessage) {
    // notifee.displayNotification(message?.notification);
    console.log("Message handled in the background!", remoteMessage);
}

dayjs.extend(utc);

messaging().onMessage(onMessageReceived);
messaging().setBackgroundMessageHandler(onMessageReceived);

AppRegistry.registerComponent(appName, () => App);
