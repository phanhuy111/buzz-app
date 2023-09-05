import { Text } from 'components/Text';
import { View as ViewDefault, ImageBackground } from 'react-native';
import FastImage from 'react-native-fast-image';
import { IProduct } from 'types';
import { styles } from './ProductItem.styled';
import { buzzItemBg } from 'assets/images';

interface PropsProductItem {
    data?: IProduct;
}

export const ProductItem = ({ data }: PropsProductItem) => {
    return (
        <ViewDefault style={styles.wrapper}>
            <ImageBackground imageStyle={styles.imageLogoBg} source={buzzItemBg} resizeMode="cover">
                <ViewDefault style={styles.container}>
                    <FastImage
                        style={{ width: 70, height: 70, borderRadius: 35 }}
                        source={{
                            uri: 'https://unsplash.it/400/400?image=1',
                            priority: FastImage.priority.high,
                        }}
                        resizeMode={FastImage.resizeMode.contain}
                    />

                    <ViewDefault style={styles.containerText}>
                        <Text style={styles.text} type="textItems">
                            {data?.subTitle}
                        </Text>
                        <Text style={styles.textTitle} type="titleItems">
                            {data?.title}
                        </Text>
                        <Text style={styles.text} type="textItems">
                            {data?.description}
                        </Text>
                    </ViewDefault>

                    <ViewDefault style={styles.containerPrice}>
                        <Text style={styles.textTitle} type="textHypeSmall">
                            {'$' + data?.price}
                        </Text>
                    </ViewDefault>
                </ViewDefault>
            </ImageBackground>
        </ViewDefault>
    );
};
