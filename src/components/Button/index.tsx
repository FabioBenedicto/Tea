import React, { useState, ReactNode } from "react";
import { View, Pressable, Text, } from "react-native";

import { styles } from "./styles";

export interface ButtonProps {
    children: ReactNode;
}

export function Button({ children }: ButtonProps) {
    const [backgroundColor, setBackgroundColor] = useState<string>('#FF8989');

    const handlePressIn = () => {
        setBackgroundColor('#E57A7A');
    }

    const handlePressOut = () => {
        setBackgroundColor('#FF8989');
    }

    return (
        <Pressable
            style={[styles.container, {backgroundColor}]}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
        >
            <Text style={styles.text}>
                {children}
            </Text>
        </Pressable>
    );
}