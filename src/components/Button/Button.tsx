import { StyleSheet, Text } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { buttonTypes, colors } from 'themes';
import { moderateScale, verticalScale } from 'utils';

interface IButton {
    onPress: () => void;
    title: string;
    type?: 'accent' | 'dark';
}

export const Button = ({ onPress, title, type = 'accent', ...props }: IButton) => {
    return (
        <TouchableHighlight
            style={[styles.button, { backgroundColor: buttonTypes?.[type]?.backgroundColor }]}
            onPress={onPress}
            {...props}
        >
            <Text style={[styles.buttonText, { color: buttonTypes?.[type]?.color }]}>{title}</Text>
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
