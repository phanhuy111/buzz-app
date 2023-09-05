import { ProductItem } from 'components';
import { RankItem } from 'components/RankItem';
import { Specialty } from 'components/Specialty';
import { useIntl } from 'react-intl';
import { StyleSheet, Text, View } from 'react-native';

const dataSample = {
    subTitle: 'Sargeant (PIlot)',
    title: 'Whiskey Norman',
    description: 'Lumenier QAV-PRO Lifter 9',
    price: 900,
};

const Home = () => {
    const { formatMessage } = useIntl();
    return (
        <View>
            <View style={styles.container}>
                <Text>{formatMessage({ defaultMessage: 'Home' })}</Text>
            </View>

            <View style={{ marginTop: 50, padding: 10 }}>
                <ProductItem data={dataSample} />
            </View>

            <View style={{ marginTop: 50, padding: 10 }}>
                <RankItem data={dataSample} />
            </View>

            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 10,
                    marginTop: 50,
                    padding: 10,
                }}
            >
                <Specialty data={dataSample} />
                <Specialty data={dataSample} />
            </View>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
