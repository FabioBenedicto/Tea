import React, { ReactNode, useState } from "react";
import { View, Text, TextInput, TextInputProps } from "react-native";

import Animated from "react-native-reanimated";

import { styles } from "./styles";

export interface TextInputTeaProps {
    icon: ReactNode;
    placeholder: string;
    value: string | undefined;
    onChangeText: (text: string) => void | undefined;
    secureTextEntry?: boolean | undefined;
}

export function TextInputTea({ icon, placeholder, value, onChangeText, secureTextEntry }: TextInputTeaProps) {
    const AnimatedText = Animated.createAnimatedComponent(Text);
    const [isFocused, setIsFocused] = useState<boolean>();

    const handleFocus = () => {
        setIsFocused(true);
    }

    const handleBlur = () => {
        if(value == ''){
            setIsFocused(false);
        } 
    }


    return (
        <View style={styles.container}>

            <View style={styles.icon}>
                {icon}
            </View>

            <View style={styles.innerContainer}>

                <TextInput
                    style={styles.textInput}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    cursorColor='#666666'
                    underlineColorAndroid='transparent'
                    onChangeText={onChangeText}
                    value={value}
                    secureTextEntry={secureTextEntry}
                />

                <Animated.Text
                    style={[
                        styles.placeHolder,
                        {
                            top: isFocused ? -20 : 6,
                        }
                    ]}
                >
                    {placeholder}
                </Animated.Text>

            </View>

        </View>
    )
}