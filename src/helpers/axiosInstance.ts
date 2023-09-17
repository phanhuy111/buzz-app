import * as Sentry from '@sentry/react-native';
import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { redistributionToken } from 'services';

import Config from 'react-native-config';
import * as Keychain from 'react-native-keychain';

import { resetAllCache } from 'utils';
import { removeKeychain } from 'utils/keychain';

export const BASE_URL = `${Config.DOMAIN}/index.php/rest/V1`;
export const BASE_GO_URL = `${Config.DOMAIN}/go/v1`;

type ErrorResponse = {
    message: string;
    data?: any;
    status?: number;
};

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const handleError = (error: ErrorResponse) => {
    if (error.status !== 403) {
        Sentry.setExtra('error', error);
        Sentry.captureException(error);
    }

    return Promise.reject(error);
};

axiosInstance.interceptors.request.use(
    async config => {
        // Do something before request is sent
        const accessToken = await Keychain.getInternetCredentials('access_token');

        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken.password}`;
        }

        return config;
    },
    (error: AxiosError) => {
        // Do something with request error
        return Promise.reject(error);
    },
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    },
    async (error: AxiosError) => {
        if (error.response) {
            const originalRequest = error.config as InternalAxiosRequestConfig & { retry: boolean };

            // The request was made and the server responded with a 403 status code
            // which means access_token is expired, so we try to get a new access_token
            // from the refresh_token and retry request
            if (error.response.status === 403 && !originalRequest.retry) {
                originalRequest.retry = true;

                const refreshToken = (await Keychain.getInternetCredentials('refresh_token')) as {
                    password: string;
                };

                if (refreshToken.password) {
                    await redistributionToken(refreshToken?.password)
                        .then(data => {
                            originalRequest.retry = false;
                            Keychain.setInternetCredentials(
                                'access_token',
                                'access_token',
                                data?.access_token,
                            );
                            Keychain.setInternetCredentials(
                                'refresh_token',
                                'refresh_token',
                                data?.refresh_token,
                            );

                            axios.defaults.headers.Authorization = `Bearer ${data?.access_token}`;
                        })
                        .catch(() => {
                            originalRequest.retry = false;
                            removeKeychain(() => {
                                resetAllCache();
                            });
                        });
                }

                return axiosInstance(originalRequest);
            }

            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            return handleError({
                message: error.message,
                status: error.response.status,
                data: error.response.data,
            });
        }
        if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            return handleError({
                message: `No response received (${error.message})`,
            });
        }
        // Something happened in setting up the request that triggered an Error
        return handleError({
            message: `Unknown error (${error.message})`,
        });
    },
);

export default axiosInstance;
