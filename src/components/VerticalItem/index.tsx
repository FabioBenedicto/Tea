import React, { ReactNode, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Pressable } from "react-native";

import Animated, { useSharedValue, interpolate, Extrapolate } from "react-native-reanimated";

import { styles } from "./styles";

export interface VerticalItemProps {
    icon?: ReactNode | undefined;
    text?: string | undefined;
    onPress?: () => void | undefined;
}

export function VerticalItem({ icon, text, onPress }: VerticalItemProps) {
    const [isPressed, setIsPressed] = useState<boolean>();

    const handlePressIn = () => {
        setIsPressed(true);
    }

    const handlePressOut = () => {
        setIsPressed(false);
        
    }
    
    const handlePress = () => {
        if(onPress) onPress();
    }

    return (
        <Pressable 
        style={[styles.container, {transform: isPressed ? [{scale: 1.02}] : []}]}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut} 
        onPress={handlePress}
        >
            <View style={styles.IconContainer}>
                {icon}
            </View>
            <Text style={styles.text}>
                {text}
            </Text>
        </Pressable>
    )
}