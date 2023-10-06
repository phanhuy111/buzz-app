import { ImageBackground, StyleSheet } from 'react-native';

import { colors } from 'themes';

import { Text } from 'components/Text';
import { View } from 'components/View';

import { horizontalScale, verticalScale } from 'utils';

import { IPilots } from 'types';

interface PropsSpecialty {
    data?: IPilots;
}

export const Specialty = ({ data }: PropsSpecialty) => {
    return (
        <ImageBackground
            style={styles.container}
            imageStyle={styles.images}
            source={{ uri: 'https://unsplash.it/400/400?image=1' }}
        >
            <View style={styles.containerText}>
                <Text style={styles.textTitle} type="rajdhSmBold">
                    {data?.title}
                </Text>
            </View>
        </ImageBackground>
    );
};

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
    images: {
        position: 'relative',
        flex: 1,
        width: '100%',
        height: horizontalScale(120),
        borderRadius: 5,
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
    },
});
