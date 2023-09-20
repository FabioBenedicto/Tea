import React, { useState, useEffect } from "react";
import { View, Text, Linking, Dimensions } from "react-native";

import { Container } from "../../components/Container";
import { UrgencyButton } from "../../components/UrgencyButton";
import { VerticalItem } from "../../components/VerticalItem";
import { HorizontalListItem } from "../../components/HorizontalItem";

import { styles } from "./styles";

import { MagnifyingGlass, SmileyMeh, SmileyNervous, User } from 'phosphor-react-native'
import Animated, { useSharedValue, withTiming, Easing, interpolateColor, useAnimatedStyle, withSequence } from 'react-native-reanimated';

export function HomeScreen({ navigation, route }) {
    const [isHiding, setIsHiding] = useState<boolean>();
    const screenHeight = Dimensions.get('screen').height;
    const margin = useSharedValue<any>(0);
    const opacityTeste = useSharedValue<any>(0);
    const animatedValue = useSharedValue<any>(0);

    const handleUrgencyButtonPress = () => {
        const phoneNumber = '1234567890'
        const url = `tel:${phoneNumber}`;
        Linking.openURL(url);
    };

    const handleVerticalItemPress = () => {
        navigation.navigate('ProfileScreen');
        setNavigatedTo(true);
    }

    const handleHorizontalItemPress = (index: number) => {
        setIsHiding(true);
        margin.value = withTiming(-120, { duration: 400, easing: Easing.in(Easing.linear) });
        //opacity.value = withTiming(0, { duration: 400, easing: Easing.in(Easing.linear) });
        setTimeout(() => {
            navigation.navigate('TextScreen', index);
        }, 400);
    }

    /*const handleNavigateFromRegisterScreen = () => {
        margin.value = withTiming(0, { duration: 400, easing: Easing.out(Easing.linear) });
        opacity.value = withTiming(1, { duration: 400, easing: Easing.out(Easing.linear) })
    }*/

    const backgroundColorStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: interpolateColor(animatedValue.value, [0, 1], ['#FFFFFF', '#A3B1F1']), // Muda a cor de 0 para 1
        };
    });

    const handleNavigateFromRegisterScreen = () => {
        animatedValue.value = withTiming(1, { duration: 400, easing: Easing.inOut(Easing.ease) });
        setTimeout(() => {
            setIsHiding(true);
            //height.value = withTiming('100%', { duration: 4000, easing: Easing.inOut(Easing.ease) });
        }, 400);
        opacityTeste.value = withTiming(0, { duration: 400, easing: Easing.inOut(Easing.ease) });
        opacityTeste.value = 0;
    }

    useEffect(() => {
        if (route.params?.previousScreen) {
            handleNavigateFromRegisterScreen();
        }
    }, []);


    return (
        <Container backgroundColorStatusBar="#A3B1F1" backgroundColor="#FFF">
            <Animated.View style={[styles.innerContainer, backgroundColorStyle]}>

                <View style={styles.header}>
                    <Text style={styles.headerText}>
                        TEA
                    </Text>
                    <Text style={styles.headerSubtext}>
                        Transtorno do espectro autista
                    </Text>
                </View>

                <Animated.View style={[styles.containerAnimatedMargin, { marginTop: margin}]}>
                    <Animated.View style={[styles.containerAnimatedOpacity, { opacity: opacityTeste }]}>

                        <UrgencyButton
                            onPress={handleUrgencyButtonPress}
                            isHiding={isHiding}
                        />

                        <Text style={styles.title}>
                            Tipos de crises
                        </Text>

                        <View style={styles.HorizontalListContainer}>
                            <HorizontalListItem
                                index={1}
                                icon={<SmileyMeh size={40} weight="fill" />}
                                text='Light'
                                onPress={handleHorizontalItemPress}
                                isHiding={isHiding}
                            />
                            <HorizontalListItem
                                index={2}
                                icon={<SmileyNervous size={40} weight="fill" />}
                                text='Heavy'
                                onPress={handleHorizontalItemPress}
                                isHiding={isHiding}
                            />
                        </View>

                        <View style={styles.footer}>
                            <Text style={styles.title}>Outras Informações</Text>

                            <View style={styles.VerticalListContainer}>
                                <VerticalItem
                                    icon={<MagnifyingGlass size={40} weight="light" />}
                                    text="Como identificar"
                                    onPress={() => { }}
                                />

                                <VerticalItem
                                    icon={<User size={40} weight="light" />}
                                    text="Minhas informações"
                                    onPress={handleVerticalItemPress}
                                />

                            </View>
                        </View>

                    </Animated.View>
                </Animated.View>
            </Animated.View>
        </Container>
    );
}