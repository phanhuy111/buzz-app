import Input from 'components/DataEntry/Input';
import { useIntl } from 'react-intl';
import { StyleSheet, View } from 'react-native';
import Pin from 'assets/icons/pin.svg';
import Calendar from 'assets/icons/calendar.svg';
import KeyboardAwareScrollView from 'components/KeyboardAwareScrollView';
import { verticalScale } from 'utils';
import { Specialty } from 'components/Specialty';
import { LayoutDefault, Text } from 'components';
import { colors } from 'themes';
import { Button } from 'components/Button';

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
            <>
                <KeyboardAwareScrollView style={styles.container}>
                    <View style={styles.inner}>
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
                        <Text type="industryBold" style={styles.title}>
                            {formatMessage({
                                defaultMessage: 'CHOOSE A SPECIALIZATION',
                            })}
                        </Text>
                        <View style={styles.specialtyList}>
                            <Specialty data={dataSample} />
                            <Specialty data={dataSample} />
                        </View>
                    </View>
                </KeyboardAwareScrollView>
                <View style={styles.button}>
                    <Button
                        title={formatMessage({ defaultMessage: 'FIND DRONE PILOT' })}
                        onPress={() => {}}
                        type="accent"
                    />
                </View>
            </>
        </LayoutDefault>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inner: {
        gap: verticalScale(20),
    },
    inputs: {
        gap: verticalScale(10),
    },
    title: {
        marginTop: verticalScale(10),
        textAlign: 'center',
        color: colors.white[0],
    },
    specialtyList: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
    },
    button: {
        paddingBottom: verticalScale(10),
    },
});
