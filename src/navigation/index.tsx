import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    DatePicker,
    Home,
    JobDetail,
    Locations,
    Notifications,
    PastJobs,
    PaymentOptions,
    PilotProfile,
    Search,
    Setting,
    TaxDocuments,
} from 'screens';

import React from 'react';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { DrawerCustom } from 'components';

import { horizontalScale } from 'utils';

import {
    DATE_PICKER,
    HOME,
    JOB_DETAIL,
    LOCATIONS,
    NOTIFICATIONS,
    PAST_JOB,
    PAYMENT_OPTIONS,
    PILOT_PROFILE,
    SEARCH,
    SETTING,
    TAX_DOCUMENTS,
} from 'constants/routeNames';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={HOME} component={Home} />
            <Stack.Screen
                options={{
                    gestureDirection: 'vertical',
                }}
                name={SEARCH}
                component={Search}
            />
            <Stack.Screen name={LOCATIONS} component={Locations} />
            <Stack.Screen name={DATE_PICKER} component={DatePicker} />
            <Stack.Screen name={PILOT_PROFILE} component={PilotProfile} />
        </Stack.Navigator>
    );
};

function ApplicationStack() {
    return (
        <>
            <NavigationContainer independent>
                <GestureHandlerRootView style={{ flex: 1 }}>
                    <StatusBar animated={true} barStyle={'light-content'} />
                    <Drawer.Navigator
                        drawerContent={props => {
                            return <DrawerCustom {...props} />;
                        }}
                        screenOptions={{
                            drawerType: 'front',
                            drawerPosition: 'right',
                            headerShown: false,
                            drawerStyle: {
                                width: horizontalScale(310),
                            },
                        }}
                    >
                        <Drawer.Screen name={HOME} component={HomeStack} />
                        <Drawer.Screen name={SETTING} component={Setting} />
                        <Drawer.Screen name={PAST_JOB} component={PastJobs} />
                        <Drawer.Screen name={PAYMENT_OPTIONS} component={PaymentOptions} />
                        <Drawer.Screen name={NOTIFICATIONS} component={Notifications} />
                        <Drawer.Screen name={TAX_DOCUMENTS} component={TaxDocuments} />
                        <Drawer.Screen name={JOB_DETAIL} component={JobDetail} />
                        <Drawer.Screen name={PILOT_PROFILE} component={PilotProfile} />
                    </Drawer.Navigator>
                </GestureHandlerRootView>
            </NavigationContainer>
        </>
    );
}

export default ApplicationStack;
