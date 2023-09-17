import { ComponentProps, forwardRef } from 'react';
import { Text as TextType } from 'react-native';

import { fontConfig } from 'themes/Styles';

import { TextElement } from './text';

export type TextProps = ComponentProps<typeof TextElement>;

export type Props = {
    type: string;
} & Pick<
    TextProps,
    | 'onPress'
    | 'onLayout'
    | 'onTextLayout'
    | 'children'
    | 'selectable'
    | 'id'
    | 'role'
    | 'numberOfLines'
    | 'ellipsizeMode'
    | 'style'
>;

/**
 * Note: You can wrap <Text> in a <View> with a background color
 * to verify if the text is rendered correctly and if Capsize is working well.
 */
export const Text = forwardRef<TextType, Props>(
    (
        {
            type,
            //original Props
            onPress,
            onLayout,
            onTextLayout,
            children,
            selectable,
            id,
            role,
            numberOfLines,
            ellipsizeMode,
            ...props
        },
        ref,
    ) => {
        return (
            <TextElement
                id={id}
                onPress={onPress}
                selectable={selectable}
                onLayout={onLayout}
                onTextLayout={onTextLayout}
                role={role}
                numberOfLines={numberOfLines}
                ellipsizeMode={ellipsizeMode}
                {...props}
                style={[props.style, { ...fontConfig[type] }]}
            >
                {children}
            </TextElement>
        );
    },
);

Text.displayName = 'Text';
