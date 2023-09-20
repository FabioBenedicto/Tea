import React, { useEffect } from "react";
import { View, Text, Pressable } from "react-native";

import { Container } from "../../components/Container";

import { styles } from "./styles";

import { CaretLeft } from "phosphor-react-native";

import { useNavigation } from "@react-navigation/native";
import Animated, { Easing, useSharedValue, withTiming } from "react-native-reanimated";

export function TextScreen({ route }){

    const marginTop = useSharedValue<any>(0);
    const opacity = useSharedValue<any>(0);

    const navigation = useNavigation();

    useEffect(() => {
        opacity.value = withTiming(1, { duration: 100, easing: Easing.in(Easing.linear) })
    }, [])

    const handleBackPress = () => {
        navigation.navigate('HomeScreen');
    }

    return (
        <Container>
            <Animated.View style={[styles.innerContainer, { marginTop: marginTop }]}>
                <Animated.View style={[{ flex: 1 }, { opacity: opacity }]}>

                    <View style={styles.header}>
                        <Pressable onPressOut={handleBackPress} style={styles.back}>
                            <CaretLeft size={32} color="#A3B1F1" weight="bold" />
                        </Pressable>
                    </View>

                    <View style={styles.main}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.titleText}>Título</Text>
                        </View>

                        <View style={styles.textContainer}>
                            <Text style={styles.text}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, eveniet suscipit! Aperiam, maiores officia impedit harum cum voluptatum ratione et cumque qui enim ab voluptates adipisci provident, vitae deleniti beatae.
                            </Text>
                            <Text style={styles.text}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est commodi sit officiis vel quo maxime, perferendis numquam inventore. A consectetur natus unde odio reprehenderit animi. Provident quam officia labore atque?
                            </Text>
                            <Text style={styles.text}>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, excepturi modi nemo a totam rem cumque soluta beatae magni est quidem accusantium pariatur sequi animi minus maxime reprehenderit. Doloremque, suscipit?
                            </Text>
                        </View>
                    </View>

                    <Text>{route.params}oi</Text>

                </Animated.View>
            </Animated.View>
        </Container>
    );
}