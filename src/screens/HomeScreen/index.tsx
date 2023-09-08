import React, { useState, useRef, useEffect } from "react";
import { SafeAreaView, View, Text, ScrollView, TouchableOpacity, FlatList, Linking, ColorValue, Pressable } from "react-native";
import { useIsFocused, useNavigation } from "@react-navigation/native";

import Animated, { useSharedValue, withTiming, Easing, useAnimatedScrollHandler } from 'react-native-reanimated';

import { MagnifyingGlass, UsersThree, SmileyMeh, SmileyNervous } from 'phosphor-react-native'

import { styles } from "./styles";
import { VerticalListItem } from "../../components/VerticalListItem";
import { HorizontalListItem } from "../../components/HorizontalListItem";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { setStatusBarHidden, setStatusBarStyle, setStatusBarTranslucent } from "expo-status-bar";

export function HomeScreen() {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const [navigatedTo, setNavigatedTo] = useState(false);

    const margin = useSharedValue<any>(-20);
    const opacity = useSharedValue<any>(1);
    const scrollY = useSharedValue(0);

    const [background1, setBackground1] = useState('#A3B1F1');
    const [background2, setBackground2] = useState('#A3B1F1');
    const [background3, setBackground3] = useState('#A3B1F1');
    const [background4, setBackground4] = useState('#A3B1F1');

    const [background, setBackground] = useState('#FF8989');

    const handleCallPress = () => {
        const phoneNumber = '1234567890'
        const url = `tel:${phoneNumber}`;
        Linking.openURL(url);
    };

    const handleNavigateTo = (id: Number) => {
        margin.value = withTiming(-(120 + getStatusBarHeight()), { duration: 400, easing: Easing.out(Easing.linear) });
        opacity.value = withTiming(0, { duration: 400, easing: Easing.out(Easing.linear) });
        /*setTimeout(() => {
            navigation.navigate('TextScreen', id);
            setNavigatedTo(true);
        }, 400);*/
    }

    const handleNavigateFrom = () => {
        margin.value = withTiming(0, { duration: 400, easing: Easing.out(Easing.linear) });
        opacity.value = withTiming(1, { duration: 400, easing: Easing.out(Easing.linear) })
    }

    useEffect(() => {
        if (isFocused && navigatedTo) {
            handleNavigateFrom();
        }
    }, [isFocused, navigatedTo]);


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView onScroll={(event) => {
                console.log(event.nativeEvent.contentOffset.y);
                if (event.nativeEvent.contentOffset.y <= 120) {
                    setStatusBarHidden(false, 'none')
                } else {
                    setStatusBarHidden(true, 'none')
                }
            }} contentContainerStyle={{ flexGrow: 1, }} bounces={false} showsVerticalScrollIndicator={false}>

                <View style={styles.header}>
                    <Text style={styles.headerTitle}>TEA</Text>
                    <Text style={styles.headerSubtitle}>Transtorno do espectro autista </Text>
                </View>

                <Animated.View style={[styles.containerAnimatedMargin, { marginTop: margin }]}>
                    <Animated.View style={[styles.containerAnimatedOpacity, { opacity: opacity }]}>


                        <Pressable
                            onPressIn={() => {
                                setBackground('#E57A7A')
                            }}
                            onPressOut={() => {
                                setBackground('#FF8989');
                                handleCallPress();
                            }}
                            style={[
                                styles.urgencyButton,
                                { backgroundColor: background }
                            ]}
                        >
                            <Text style={styles.urgencyButtonText}>
                                URGÊNCIA
                            </Text>
                        </Pressable>

                        <Text style={styles.title}>Tipos de crises</Text>

                        <View style={styles.listContainer}>
                            <HorizontalListItem index={1} onPress={handleNavigateTo} text='Light' icon={<SmileyMeh size={40} weight="regular" />} />
                            <HorizontalListItem index={2} onPress={handleNavigateTo} text='Heavy' icon={<SmileyNervous size={40} weight="regular" />} />
                        </View>


                        <Text style={styles.title}>Informações adicionais</Text>

                        <View style={styles.footer}>
                            <View style={styles.footerItem}>
                                <View style={styles.footerItemIconBackground}>
                                    <MagnifyingGlass size={40} weight="light" />
                                </View>
                                <Text style={styles.footerItemText}>Como identificar</Text>
                            </View>
                            <View style={styles.footerItem}>
                                <View style={styles.footerItemIconBackground}>
                                    <UsersThree size={40} weight="light" />
                                </View>
                                <Text style={styles.footerItemText}>Sobre nós</Text>
                            </View>
                        </View>

                    </Animated.View>
                </Animated.View>

            </ScrollView>
        </SafeAreaView>
    );
}