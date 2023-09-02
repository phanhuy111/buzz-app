/**
 * @format
 */

import { AppRegistry } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import App from './src/App';
import { name as appName } from './app.json';

// Register background handler
function onMessageReceived(remoteMessage) {
  // notifee.displayNotification(message?.notification);
  console.log('Message handled in the background!', remoteMessage);
}

messaging().onMessage(onMessageReceived);
messaging().setBackgroundMessageHandler(onMessageReceived);

AppRegistry.registerComponent(appName, () => App);
