import React, { useState } from "react";
import { View, TextInput } from 'react-native';

import Animated from "react-native-reanimated";

import { styles } from "./styles";
import { Placeholder } from "phosphor-react-native";

export interface TextAreaProps {
  value?: string | undefined;
  onChangeText?: (text: string) => void | undefined;
  placeholder?: string | undefined;
}

export function TextArea({
  value,
  onChangeText,
  placeholder
}: TextAreaProps) {

  const [isFocused, setIsFocused] = useState<boolean>();

  const handleFocus = () => {
    setIsFocused(true);
}

const handleBlur = () => {
    if(!value){
        setIsFocused(false);
    } 
}

  return (
    <View style={styles.container}>

    <TextInput
      style={[styles.textInput, {zIndex: isFocused ? 0 : 1}]}
      onFocus={handleFocus}
      onBlur={handleBlur}
      multiline={true}
      numberOfLines={8}
      value={value}
      onChangeText={onChangeText}
      underlineColorAndroid='transparent'
      textAlignVertical="top"
    />


        <Animated.Text
            style={[
                styles.placeHolder,
                {
                    top: isFocused ? -12 : 6,
                    fontSize: isFocused ? 16 : 20,
                }
            ]}
        >
            {placeholder}
        </Animated.Text>

</View>
  );
}