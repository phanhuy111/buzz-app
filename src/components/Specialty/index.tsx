import { Text } from 'components/Text';
import { View as ViewDefault, ImageBackground } from 'react-native';
import { IProduct } from 'types';
import { styles } from './Specialty.styled';
import { verticalScale } from 'utils';

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
                    <Text style={styles.textTitle} type="textBoldItems">
                        {data?.title}
                    </Text>
                </ViewDefault>
            </ImageBackground>
        </ViewDefault>
    );
};
