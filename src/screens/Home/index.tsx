import Input from 'components/DataEntry/Input';
import { useIntl } from 'react-intl';
import { StyleSheet, View } from 'react-native';
import Pin from 'assets/icons/pin.svg';
import Calendar from 'assets/icons/calendar.svg';
import KeyboardAwareScrollView from 'components/KeyboardAwareScrollView';
import { paddingHorizontalGlobal } from 'themes';
import { verticalScale } from 'utils';
import { Specialty } from 'components/Specialty';
import { RankItem } from 'components/RankItem';
import { LayoutDefault, ProductItem } from 'components';

const dataSample = {
    subTitle: 'Sargeant (PIlot)',
    title: 'Whiskey Norman',
    description: 'Lumenier QAV-PRO Lifter 9',
    price: 900,
};

const Home = () => {
    const { formatMessage } = useIntl();
    return (
        <LayoutDefault>
            <KeyboardAwareScrollView style={styles.container}>
                <View style={styles.inputs}>
                    <Input
                        leftInputComponent={<Pin width={25} />}
                        placeholder={formatMessage({
                            defaultMessage: 'CHOOSE LOCATION',
                        })}
                    />
                    <Input
                        leftInputComponent={<Calendar width={25} />}
                        placeholder={formatMessage({
                            defaultMessage: 'SELECT DATE',
                        })}
                    />
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
            </KeyboardAwareScrollView>
        </LayoutDefault>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {},
    inputs: {
        gap: verticalScale(10),
    },
});
