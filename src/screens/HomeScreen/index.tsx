import React, { useState, useEffect } from "react";
import { View, Text, Linking, Dimensions } from "react-native";

import { Container } from "../../components/Container";
import { UrgencyButton } from "../../components/UrgencyButton";
import { VerticalItem } from "../../components/VerticalItem";
import { HorizontalListItem } from "../../components/HorizontalItem";

import { styles } from "./styles";

import { MagnifyingGlass, SmileyMeh, SmileyNervous, User } from 'phosphor-react-native'
import Animated, { useSharedValue, withTiming, Easing, interpolateColor, useAnimatedStyle, withSequence } from 'react-native-reanimated';
import { getStatusBarHeight } from "react-native-status-bar-height";

export function HomeScreen({ navigation, route }) {
    const [isHiding, setIsHiding] = useState<boolean>(false);
    const [height, setHeight] = useState<number>(0);
    const InnerContainerOpacity = useSharedValue<any>(0);
    const mainMargin = useSharedValue<any>(0);
    const mainBorderRadius = useSharedValue<any>(24);
    const innerMainOpacity = useSharedValue<any>(1);
    const mainTranslateY = useSharedValue<any>(0);

    const handleUrgencyButtonPress = () => {
        const phoneNumber = '1234567890'
        const url = `tel:${phoneNumber}`;
        Linking.openURL(url);
    };

    const teste = useAnimatedStyle(() => ({
        marginTop: mainMargin.value,
        borderTopLeftRadius: mainBorderRadius.value,
        borderTopRightRadius: mainBorderRadius.value,
        transform: [{translateY: mainTranslateY.value}]
    }));

    const navigateToTextScreen = (index: number) => {
        mainMargin.value = withTiming(-(150 + getStatusBarHeight()), { duration: 200, easing: Easing.ease });
        mainBorderRadius.value = withTiming(0, { duration: 200, easing: Easing.ease });
        setTimeout(() => {
            setIsHiding(true);
            innerMainOpacity.value = withTiming(0, { duration: 200, easing: Easing.ease });
            setTimeout(() => {
                navigation.navigate('TextScreen', { previousScreen: 'HomeScreen' });
            }, 200);
        }, 200);
    }

    const navigateFromTextScreen = () => {
        mainMargin.value = withTiming(0, { duration: 400, easing: Easing.ease });
        mainBorderRadius.value = withTiming(24, { duration: 400, easing: Easing.ease });
        setTimeout(() => {
            setIsHiding(true);
            innerMainOpacity.value = withTiming(1, { duration: 200, easing: Easing.ease });
        }, 400);
    }

    const navigateFromLoginScreen = () => {
        mainTranslateY.value = Dimensions.get('window').height -(150 + getStatusBarHeight());
        InnerContainerOpacity.value = 0;
        InnerContainerOpacity.value = withTiming(1, { duration: 400, easing: Easing.ease });
        setTimeout(() => {
            innerMainOpacity.value = 0;
            mainTranslateY.value = withTiming(0, { duration: 400, easing: Easing.ease });
            setTimeout(() => {
                setIsHiding(true);
                innerMainOpacity.value = withTiming(1, { duration: 400, easing: Easing.ease });
            }, 400);
        }, 400);
    }

    const navigateToProfileScreen = () => {
        navigation.navigate('ProfileScreen', { previousScreen: 'HomeScreen' });
        mainMargin.value = 0;
        innerMainOpacity.value = 0;
        mainTranslateY.value = 0;
    }

    useEffect(() => {
        if (route.params?.previousScreen == 'TextScreen') {
            navigateFromTextScreen();
        } else if (route.params?.previousScreen == 'LoginScreen') {
            navigateFromLoginScreen();
        }
    }, [route]);


    return (
        <Container backgroundColor="#FFF">
            <Animated.View style={[styles.innerContainer, { opacity: InnerContainerOpacity }]}>

                <View style={styles.header}>
                    <Text style={styles.headerText}>
                        TEA
                    </Text>
                    <Text style={styles.headerSubtext}>
                        Transtorno do espectro autista
                    </Text>
                </View>

                    <Animated.View style={[styles.containerAnimatedMargin, teste]}>
                        <Animated.View style={[styles.containerAnimatedOpacity, { opacity: innerMainOpacity }]}>

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
                                    onPress={() => { navigateToTextScreen(1) }}
                                    isHiding={isHiding}
                                />
                                <HorizontalListItem
                                    index={2}
                                    icon={<SmileyNervous size={40} weight="fill" />}
                                    text='Heavy'
                                    onPress={() => { navigateToTextScreen(2) }}
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
                                        onPress={navigateToProfileScreen}
                                    />

                                </View>
                            </View>

                        </Animated.View>
                    </Animated.View>
            </Animated.View>
        </Container>
    );
}