import { StyleProp, Text as TextDefault, TextProps, ViewStyle } from "react-native";

import { fontConfig } from "themes";

interface Props extends TextProps {
    type: string;
}

export const Text = ({ type, ...props }: Props) => {
    const { children } = props;

    return (
        <TextDefault {...props} style={[props.style, { ...fontConfig[type] }]}>
            {children}
        </TextDefault>
    );
};
