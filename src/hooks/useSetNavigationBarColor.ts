import * as React from 'react';
import { Platform, StatusBar } from 'react-native';

export default function useSetNavigationBarColor({ backgroundColor }: { backgroundColor: string }) {
    React.useEffect(() => {
        if (Platform.OS === 'android') {
            StatusBar.setBackgroundColor(backgroundColor);
        }
    }, [backgroundColor]);
}
