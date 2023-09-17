import { ImageBackground, View as ViewDefault } from 'react-native';

import { Text } from 'components/Text';

import { verticalScale } from 'utils';

import { IProduct } from 'types';

import { styles } from './Specialty.styled';

interface PropsSpecialty {
    data?: IProduct;
}

export const Specialty = ({ data }: PropsSpecialty) => {
    return (
        <ViewDefault style={styles.container}>
            <ImageBackground
                imageStyle={{ borderRadius: 5 }}
                style={{ width: verticalScale(170), height: verticalScale(100) }}
                source={{ uri: 'https://unsplash.it/400/400?image=1' }}
            >
                <ViewDefault style={styles.containerText}>
                    <Text style={styles.textTitle} type="rajdhSmBold">
                        {data?.title}
                    </Text>
                </ViewDefault>
            </ImageBackground>
        </ViewDefault>
    );
};
