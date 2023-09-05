import { Text } from 'components/Text';
import { View as ViewDefault, ImageBackground } from 'react-native';
import FastImage from 'react-native-fast-image';
import { IProduct } from 'types';
import { styles } from './RankItem.styled';
import { buzzItemBg, logoBg, rankLine } from 'assets/images';

interface PropsRankItem {
    data?: IProduct;
}

export const RankItem = ({ data }: PropsRankItem) => {
    const rank = 3;

    return (
        <ViewDefault style={styles.wrapper}>
            <ImageBackground imageStyle={styles.imageLogoBg} source={buzzItemBg} resizeMode="cover">
                <ViewDefault style={styles.container}>
                    <ImageBackground style={styles.imageLogo} source={logoBg}>
                        {Array(rank)
                            .fill('')
                            .map(value => {
                                return (
                                    <FastImage
                                        style={{ width: 50, height: 10, borderRadius: 35 }}
                                        source={rankLine}
                                        resizeMode={FastImage.resizeMode.contain}
                                    />
                                );
                            })}
                    </ImageBackground>

                    <ViewDefault style={styles.containerText}>
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
