import React, {
  ReactNode,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";
import { INPUT_THEME, colors } from "themes";
import { moderateScale, horizontalScale, verticalScale } from "utils";

interface InputProps extends TextInputProps {
  leftInputComponent?: ReactNode;
  rightInputComponent?: ReactNode;
  containerStyle?: ViewStyle;
  inputStyle?: ViewStyle;
}

export interface InputRef {
  focus: () => void;
}

const Input = forwardRef<InputRef, InputProps>((props, ref) => {
  useImperativeHandle(ref, () => ({ focus }));
  const {
    leftInputComponent,
    rightInputComponent,
    containerStyle,
    inputStyle,
  } = props;
  const inputRef = useRef<TextInput>(null);

  const focus = () => {
    inputRef.current?.focus();
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {leftInputComponent}
      <TextInput
        ref={inputRef}
        style={[styles.inputDefaultStyle, inputStyle]}
        placeholderTextColor={colors?.gray[0]}
        {...props}
      />
      {rightInputComponent}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    height: horizontalScale(50),
    borderRadius: 24,
    backgroundColor: colors.white[0],
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: verticalScale(15),
    gap: verticalScale(15),
  },
  flex: {
    flex: 1,
  },
  inputDefaultStyle: {
    flex: 1,
    fontSize: moderateScale(14),
    ...INPUT_THEME.textInput,
  },
});

export default Input;
