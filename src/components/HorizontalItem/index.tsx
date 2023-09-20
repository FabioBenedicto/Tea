import React, { ReactNode, useState } from "react";
import { View, Text, Pressable } from "react-native";

import { styles } from "./styles";


export interface HorizontalListItemProps {
    index?: number | undefined;
    icon?: ReactNode | undefined;
    text?: String | undefined;
    onPress?: (index: number) => void | undefined;
    isHiding?: boolean | undefined;
}

export function HorizontalListItem({ index, icon, text, onPress, isHiding }: HorizontalListItemProps) {
    const [backgroundColor, setBackgroundColor] = useState<string>('#A3B1F1');

    const handlePressIn = () => {
        setBackgroundColor('#8C9EB9')
    }

    const handlePressOut = () => {
        setBackgroundColor('#A3B1F1')
    }

    const handleOnPress = () => {
        if (onPress && index) onPress(index);
    }

    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.innerContainer,
                {
                    backgroundColor: backgroundColor,
                    elevation: isHiding ? 0 : 6
                }
                ]}
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                onPress={handleOnPress}
            >
                {icon}
                <Text style={styles.text}>
                    {text}
                </Text>
            </Pressable>
        </View>
    )
}