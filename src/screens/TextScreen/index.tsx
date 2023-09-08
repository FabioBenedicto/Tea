import React, { memo, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Animated, { Easing, useSharedValue, withTiming } from "react-native-reanimated";
import { CaretLeft } from "phosphor-react-native";

import { styles } from "./styles";

export const TextScreen = memo(function Screen({ navigation, route }) {

    const marginTop = useSharedValue<any>(0);
    const opacity = useSharedValue<any>(0);

    useEffect(()=> {
        opacity.value = withTiming(1, {duration: 100, easing: Easing.in(Easing.linear)})
    }, [])

    const backAnimation = () => {
        navigation.navigate('HomeScreen');
    }

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.innerContainer, {marginTop: marginTop}]}>
                <Animated.View style={[{flex: 1}, {opacity: opacity}]}>
                <TouchableOpacity onPress={backAnimation} style={styles.backContainer}>
                    <CaretLeft weight="bold" size={30} />
                </TouchableOpacity>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Grau de TEA</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, eveniet suscipit! Aperiam, maiores officia impedit harum cum voluptatum ratione et cumque qui enim ab voluptates adipisci provident, vitae deleniti beatae.
                    </Text>
                </View>
                <Text>{route.params}oi</Text>
                </Animated.View>
            </Animated.View>
        </View>
    );
});