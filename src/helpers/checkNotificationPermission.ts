import notifee, { AuthorizationStatus } from '@notifee/react-native';

export const checkNotificationPermission = async () => {
    const settings = await notifee.getNotificationSettings();

    if (settings?.authorizationStatus === AuthorizationStatus.AUTHORIZED) {
        console.log('Notification permissions has been authorized');
        return true;
    }

    if (settings?.authorizationStatus === AuthorizationStatus.DENIED) {
        console.log('Notification permissions has been DENIED');
        return false;
    }

    return false;
};
