import React, { ReactNode, useEffect } from "react";
import { View, Text } from "react-native";

import Animated, {useSharedValue, interpolate, Extrapolate} from "react-native-reanimated";

import { styles } from "./styles";

export interface VerticalListItemProps{
    icon: ReactNode;
    text: String;
    index: number;
    scrollY: any;
}

export function VerticalListItem({index, icon, text, scrollY}: VerticalListItemProps){

    const opacity = useSharedValue(1);
    const ITEM_HEIGHT = 100;

    const translateY = interpolate(
        scrollY.value,
        [index * ITEM_HEIGHT, (index + 1) * ITEM_HEIGHT],
        [0, ITEM_HEIGHT],
        Extrapolate.CLAMP
      );

    useEffect(()=> {
        console.log(translateY);
    }, [translateY])

      opacity.value = interpolate(translateY, [0, ITEM_HEIGHT], [1, 0], Extrapolate.CLAMP);

    return(
        <Animated.View style={[styles.container, {opacity: opacity}]}>
        <View>
            {icon}
        </View>
        <Text>
            {text}
        </Text>
    </Animated.View>
    )
}