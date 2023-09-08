import React, { ReactNode, useState } from "react";
import { View, Text, TouchableOpacity  } from "react-native";

import Animated from "react-native-reanimated";

import { styles } from "./styles";


export interface HorizontalListItemProps {
    children?: ReactNode;
    index: number;
    icon: ReactNode;
    text: String;
    onPress: (index: number)=>void;
    onPressInColor: string;
}

export function HorizontalListItem({ index, icon, text, onPress }: HorizontalListItemProps) {
    const [backgroundColor, setBackgroundColor] = useState<string>('#A3B1F1');
    return (
        <Animated.View style={styles.container}>
            <TouchableOpacity 
            activeOpacity={1}
            onPressIn={() => setBackgroundColor('#8C9EB9')}
            onPressOut={()=> setBackgroundColor('#A3B1F1')}
            //onPress(index);
            style={[styles.touchable, {backgroundColor,}]}
            >
                {icon}
                <Text style={styles.text}>
                    {text}
                </Text>
            </TouchableOpacity>
        </Animated.View>
    )
}