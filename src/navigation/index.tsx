import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
    DATE_PICKER,
    HOME,
    LOCATIONS,
    JOB_DETAIL,
    NOTIFICATIONS,
    PAST_JOB,
    PAYMENT_OPTIONS,
    SEARCH,
    SETTING,
    TAX_DOCUMENTS,
    PILOT_PROFILE,
} from 'constants/routeNames';
import {
    DatePicker,
    Home,
    Locations,
    Notifications,
    PastJobs,
    PaymentOptions,
    Search,
    Setting,
    TaxDocuments,
    JobDetail,
    PilotProfile,
} from 'screens';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerCustom } from 'components';
import { horizontalScale } from 'utils';

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
