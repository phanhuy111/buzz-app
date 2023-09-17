import * as Keychain from 'react-native-keychain';

export const saveKeychain = ({
    accessToken,
    refreshToken,
}: {
    accessToken: string;
    refreshToken: string;
}) => {
    const saveAccessToken = Keychain.setInternetCredentials(
        'access_token',
        'access_token',
        accessToken,
    );
    const saveRefreshToken = Keychain.setInternetCredentials(
        'refresh_token',
        'refresh_token',
        refreshToken,
    );
    Promise.all([saveAccessToken, saveRefreshToken]).catch(err => {
        console.error('[saveKeychain]', err);
    });
};

export const removeKeychain = (cbSuccess?: () => void, cbError?: () => void) => {
    const removeAccessToken = Keychain.resetInternetCredentials('access_token');
    const removeRefreshToken = Keychain.resetInternetCredentials('refresh_token');
    Promise.all([removeAccessToken, removeRefreshToken])
        .then(() => {
            cbSuccess?.();
        })
        .catch(err => {
            cbError?.();
            console.error('[removeKeychain]', err);
        });
};
