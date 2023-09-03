import Input from 'components/DataEntry/Input';
import { SafeAreaView } from 'hocs';
import { useIntl } from 'react-intl';
import { StyleSheet, View } from 'react-native';
import Pin from 'assets/icons/pin.svg';
import Calendar from 'assets/icons/calendar.svg';
import { homeBg } from 'assets/images';
import KeyboardAwareScrollView from 'components/KeyboardAwareScrollView';
import FastImage from 'react-native-fast-image';
import { paddingHorizontalGlobal } from 'themes';
import { HeaderNavigator } from 'components/Header/HeaderNavigator';
import { verticalScale } from 'utils';
import { Specialty } from 'components/Specialty';
import { RankItem } from 'components/RankItem';
import { ProductItem } from 'components';

const dataSample = {
    subTitle: 'Sargeant (PIlot)',
    title: 'Whiskey Norman',
    description: 'Lumenier QAV-PRO Lifter 9',
    price: 900,
};

const Home = () => {
    const { formatMessage } = useIntl();
    return (
        <View style={styles.container}>
            <FastImage style={styles.bg} source={homeBg} resizeMode="stretch" />
            <SafeAreaView>
                <View style={styles.inner}>
                    <HeaderNavigator />
                    <KeyboardAwareScrollView style={styles.body}>
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
                </View>
            </SafeAreaView>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inner: {
        flex: 1,
        gap: 10,
        ...paddingHorizontalGlobal,
    },
    bg: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    body: {},
    inputs: {
        gap: verticalScale(10),
    },
});
