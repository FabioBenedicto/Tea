import React, { ReactNode, useState } from "react";
import { Pressable, Text, } from "react-native";

import { styles } from "./styles";

export interface MyButtonProps {
    text?: ReactNode | undefined;
    onPress?: () => void | undefined;
}

export function MyButton({ text, onPress }: MyButtonProps) {
    const [backgroundColor, setBackgroundColor] = useState<string>('#FF8989');

    const handleOnPressIn = () => {
        setBackgroundColor('#E57A7A');
    }

    const handleOnPressOut = () => {
        setBackgroundColor('#FF8989');
    }

    return (
        <Pressable
            style={[styles.container, {backgroundColor}]}
            onPressIn={handleOnPressIn}
            onPressOut={handleOnPressOut}
            onPress={onPress}
        >
            <Text style={styles.text}>
                {text}
            </Text>
        </Pressable>
    );
}