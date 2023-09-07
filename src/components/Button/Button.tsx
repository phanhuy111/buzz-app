import { Text } from 'components';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { buttonTypes } from 'themes';
import { moderateScale, verticalScale } from 'utils';

interface IButton {
    onPress: () => void;
    title: string;
    type?: 'accent' | 'dark';
    style?: StyleProp<ViewStyle>;
    font?: string;
}

export const Button = ({ onPress, title, type = 'accent', style, ...props }: IButton) => {
    return (
        <TouchableHighlight
            style={[
                styles.button,
                { backgroundColor: buttonTypes?.[type]?.backgroundColor },
                style,
            ]}
            onPress={onPress}
            {...props}
        >
            <Text
                style={[styles.buttonText, { color: buttonTypes?.[type]?.color }]}
                type={props.font || ''}
            >
                {title}
            </Text>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    button: {
        padding: verticalScale(14),
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    buttonText: {
        fontFamily: 'Industry-Bold',
        fontSize: moderateScale(16),
    },
});
