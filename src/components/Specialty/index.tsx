import { ImageBackground, StyleSheet } from 'react-native';

import { colors } from 'themes';

import { Text } from 'components/Text';
import { View } from 'components/View';

import { verticalScale } from 'utils';

import { IPilots } from 'types';

interface PropsSpecialty {
    data?: IPilots;
}

export const Specialty = ({ data }: PropsSpecialty) => {
    return (
        <View style={styles.container}>
            <ImageBackground
                imageStyle={{ borderRadius: 5 }}
                style={{ width: verticalScale(210), height: verticalScale(120) }}
                source={{ uri: 'https://unsplash.it/400/400?image=1' }}
            >
                <View style={styles.containerText}>
                    <Text style={styles.textTitle} type="rajdhSmBold">
                        {data?.title}
                    </Text>
                </View>
            </ImageBackground>
        </View>
    );
};

export const styles = StyleSheet.create({
    container: {
        position: 'relative',
    },
    containerText: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: 10,
        left: 10,
    },
    text: {
        color: colors['white']['1'],
    },
    textTitle: {
        color: colors['white']['0'],
        // fontFamily: 'Rajdhani',
        // fontSize: moderateScale(14),
        // fontWeight: '700',
        // letterSpacing: 0.5,
        // lineHeight: 20,
    },
});
