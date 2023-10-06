import { zodResolver } from '@hookform/resolvers/zod';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useFormSchema } from 'hooks/useFormSchema';
import { z } from 'zod';

import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import { useIntl } from 'react-intl';
import { StyleSheet } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import { colors } from 'themes';

import Calendar from 'assets/icons/calendar.svg';
import Pin from 'assets/icons/pin.svg';

import { LayoutDefault, Text } from 'components';
import { Button } from 'components/Button';
import Input from 'components/DataEntry/Input';
import KeyboardAwareScrollView from 'components/KeyboardAwareScrollView';
import { Specialty } from 'components/Specialty';
import { View } from 'components/View';

import { horizontalScale, verticalScale } from 'utils';

import { DATE_PICKER, LOCATIONS } from 'constants/index';

const dataSample = {
    id: '1',
    subTitle: 'Sargeant (PIlot)',
    title: 'Whiskey Norman',
    image: '',
    description: 'Lumenier QAV-PRO Lifter 9',
    price: 900,
};

const Search = () => {
    const { formatMessage } = useIntl();
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

    function findDronePilot() {}

    return (
        <LayoutDefault isGoBack>
            <>
                <KeyboardAwareScrollView style={styles.container}>
                    <View style={styles.inner}>
                        <View style={styles.inputs}>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate(LOCATIONS);
                                }}
                            >
                                <View pointerEvents="none">
                                    <Input
                                        leftInputComponent={<Pin width={25} />}
                                        placeholder={formatMessage({
                                            defaultMessage: 'CHOOSE LOCATION',
                                        })}
                                    />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate(DATE_PICKER);
                                }}
                            >
                                <View pointerEvents="none">
                                    <Input
                                        leftInputComponent={<Calendar width={25} />}
                                        placeholder={formatMessage({
                                            defaultMessage: 'SELECT DATE',
                                        })}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <Text type="indusMdBold" style={styles.title}>
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
                        onPress={findDronePilot}
                        type="accent"
                    />
                </View>
            </>
        </LayoutDefault>
    );
};

export default Search;

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
        alignContent: 'center',
        gap: horizontalScale(10),
    },
    button: {
        paddingBottom: verticalScale(10),
    },
});
