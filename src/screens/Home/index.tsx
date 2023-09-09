import Input from 'components/DataEntry/Input';
import { useIntl } from 'react-intl';
import { StyleSheet, View } from 'react-native';
import Search from 'assets/icons/search.svg';
import KeyboardAwareScrollView from 'components/KeyboardAwareScrollView';
import { verticalScale } from 'utils';
import { LayoutDefault, PilotsItem, Text } from 'components';
import { colors, paddingHorizontalGlobal } from 'themes';
import { RankItem } from 'components/RankItem';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { SEARCH } from 'constants/index';

const Home = () => {
    const { formatMessage } = useIntl();
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

    return (
        <LayoutDefault
            innerStyle={{
                paddingHorizontal: 0,
            }}
            headerStyle={{
                paddingHorizontal: verticalScale(20),
            }}
        >
            <>
                <View style={styles.container}>
                    <View style={styles.inner}>
                        <View style={styles.inputs}>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate(SEARCH);
                                }}
                            >
                                <View pointerEvents="none">
                                    <Input
                                        leftInputComponent={<Search width={25} />}
                                        placeholder={formatMessage({
                                            defaultMessage: 'SEARCH FOR A DRONE PILOT',
                                        })}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <KeyboardAwareScrollView style={styles.body}>
                            <View style={styles.droneList}>
                                <Text type="indusMdBold" style={styles.title}>
                                    {formatMessage({
                                        defaultMessage: 'NEXT',
                                    })}
                                </Text>
                                <PilotsItem
                                    data={{
                                        title: 'WHISKEY',
                                        subTitle: 'TOMORROW',
                                        description: '$500',
                                        image: '',
                                        isDetail: true,
                                    }}
                                />
                            </View>
                            {/* <View style={styles.droneList}>
                                <Text type="indusMdBold" style={styles.title}>
                                    {formatMessage({
                                        defaultMessage: 'UPCOMING',
                                    })}
                                </Text>
                                <RankItem
                                    data={{
                                        title: 'WHISKEY',
                                        subTitle: 'Tomorrow',
                                        description: '$500',
                                        image: '',
                                        isDetail: true,
                                    }}
                                />
                            </View> */}
                        </KeyboardAwareScrollView>
                    </View>
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
        ...paddingHorizontalGlobal,
    },
    body: {
        paddingTop: 5,
        height: '100%',
        backgroundColor: colors.black[0],
        paddingHorizontal: verticalScale(10),
    },
    droneList: {
        gap: 10,
    },
    title: {
        marginTop: verticalScale(10),
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
