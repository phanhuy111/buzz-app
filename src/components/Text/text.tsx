import { ComponentType } from 'react';
import { TextProps } from 'react-native';
import { NativeText } from 'react-native/Libraries/Text/TextNativeComponent';

export const TextElement = NativeText as ComponentType<TextProps>;
