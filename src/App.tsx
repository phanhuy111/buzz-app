import React, { useRef } from 'react';
import 'react-native-gesture-handler';
import analytics from '@react-native-firebase/analytics';
import ApplicationStack from 'navigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'store';
import { QueryClientProvider } from '@tanstack/react-query';
import { IntlConnectProvider } from 'contexts';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from 'navigation/RootNavigation';
import * as Sentry from '@sentry/react-native';
import Config from 'react-native-config';
import { queryClient } from './helpers/queryClient';

Sentry.init({
    dsn: 'https://c7d37f8f106fb89f75ec661055265f78@o4505667027861504.ingest.sentry.io/4505667028779008',
    tracesSampleRate: Config.API_TOKEN === 'dev' ? undefined : 1.0,
    environment: Config.API_TOKEN === 'dev' ? 'development' : 'production',
    debug: true,
    integrations: [new Sentry.ReactNativeTracing()],
});

const App = () => {
    const routeNameRef = useRef<any>(null);

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <QueryClientProvider client={queryClient}>
                    <NavigationContainer
                        ref={navigationRef}
                        onReady={() => {
                            routeNameRef.current = navigationRef?.getCurrentRoute?.()?.name;
                        }}
                        onStateChange={async () => {
                            const previousRouteName = routeNameRef.current;
                            const currentRouteName = navigationRef?.getCurrentRoute()?.name;
                            if (previousRouteName !== currentRouteName) {
                                routeNameRef.current = currentRouteName;
                                await analytics().logScreenView({
                                    screen_name: currentRouteName,
                                    screen_class: currentRouteName,
                                });
                            }
                        }}
                    >
                        <IntlConnectProvider>
                            <KeyboardProvider>
                                <ApplicationStack />
                            </KeyboardProvider>
                        </IntlConnectProvider>
                    </NavigationContainer>
                </QueryClientProvider>
            </PersistGate>
        </Provider>
    );
};

export default Sentry.wrap(App);
