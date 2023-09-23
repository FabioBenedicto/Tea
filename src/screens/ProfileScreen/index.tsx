import React, { useState, useEffect, ReactNode } from "react";
import { View, Text, Image, TouchableOpacity, TextInput, Pressable, } from "react-native";

import { Fish, CaretLeft, Phone, SignOut, Cat, Horse, FishSimple, Dog, Butterfly, Bird } from "phosphor-react-native";

import { styles } from "./styles";
import { MyTextInput } from "../../components/MyTextInput";
import { Container } from "../../components/Container";
import { TextArea } from "../../components/TextArea";
import { MyButton } from "../../components/MyButton";

import Animated, { Easing, useSharedValue, withTiming } from "react-native-reanimated";

export function ProfileScreen({ navigation, route }) {
    const [notes, setNotes] = useState<string>();
    const [urgencyNumber, setUrgencyNumber] = useState<string>();
    const innerContainerOpacity = useSharedValue(0);
    const mainOpacity = useSharedValue(0);
    const headerTranslateY = useSharedValue(-112);

    const handleNotes = (text: string) => {
        setNotes(text);
    }

    const navigateToLoginScreen = () => {
        mainOpacity.value = withTiming(0, { duration: 200, easing: Easing.in(Easing.ease) });
        setTimeout(() => {
            headerTranslateY.value = withTiming(-112, { duration: 200, easing: Easing.in(Easing.ease) });
            setTimeout(() => {
                navigation.navigate('LoginScreen', { previousScreen: 'ProfileScreen' });
            }, 200);
        }, 200);
    }

    const navigateToHomeScreen = () => {
        navigation.navigate('HomeScreen', { previousScreen: 'ProfileScreen' });
    }

    const navigateFromHomeScreen = () => {
        innerContainerOpacity.value = 1;
        headerTranslateY.value = withTiming(0, { duration: 400, easing: Easing.in(Easing.ease) });
        setTimeout(() => {
            mainOpacity.value = withTiming(1, { duration: 400, easing: Easing.in(Easing.ease) });
        }, 400);
    }

    const gereteIcon = () => {
        const number = Math.floor(Math.random() * (5));
        switch(number) {
            case 0:
                setIcon(<Bird size={50} color="#000000" />);
                break;
            case 1: 
            setIcon( <Butterfly size={50} color="#000000" />)
            break;
            case 2:
                setIcon( <Cat size={50} color="#000000" />)
                break;
            case 3:
                setIcon( <Dog size={50} color="#000000" />)
                break;
            case 4: 
                setIcon( <FishSimple size={50} color="#000000" />)
                break;
            case 5:
                setIcon( <Horse size={50} color="#000000" />)
                break;
        } 
    }

    const [icon, setIcon] = useState<ReactNode>();

    useEffect(() => {
        if (route.params?.previousScreen == 'HomeScreen') {
            navigateFromHomeScreen();
        } else {
            innerContainerOpacity.value = 1;
            mainOpacity.value = 1;
            headerTranslateY.value = 0;
            gereteIcon();
        }
    }, [route])



    return (
        <Container backgroundColor="#FFF">
            <Animated.View style={[styles.innerContainer, { opacity: innerContainerOpacity }]}>

                <Animated.View style={[styles.header, { transform: [{ translateY: headerTranslateY }] }]}>
                    <TouchableOpacity onPressOut={navigateToHomeScreen}>
                        <CaretLeft weight="bold" size={32} color="#333333" />
                    </TouchableOpacity>

                </Animated.View>

                <Animated.View style={[styles.main, { opacity: mainOpacity }]}>

                    <View style={styles.profile}>                        
                    <TouchableOpacity onPressOut={gereteIcon} style={{width: 100, height: 100, borderRadius: 50, backgroundColor: '#ECECEC', justifyContent: 'center', alignItems: 'center'}}>
                            {icon}
                        </TouchableOpacity>
                        <Text style={styles.profileText}>Fábio Henrique Benedicto</Text>
                        <Text style={styles.profileSubtext}>fabiobenedicto@outlook.com</Text>
                        <TouchableOpacity onPressOut={navigateToLoginScreen} style={styles.signOutContainer}>
                            <Text style={styles.signOutText}>Sair</Text>
                            <SignOut weight="bold" size={16} color="#FF8989" />
                        </TouchableOpacity>
                    </View>

                    <TextArea
                        value={notes}
                        onChangeText={handleNotes}
                        placeholder="Digite suas anotações"
                    />

                    <MyTextInput
                        icon={<Phone size={32} color="#A3B1F1" />}
                        placeholder="Número de segurança"
                        value={urgencyNumber}
                        onChangeText={(text) => { setUrgencyNumber(text) }}
                    />

                    <View style={styles.subtext}>
                        <Text style={styles.testinho}>O número de segurança é o contato ao qual você será redirecionado quando pressionar o botão de emergência</Text>
                    </View>

                    <MyButton text="Alterar" onPress={() => { }} />

                </Animated.View>

            </Animated.View>
        </Container>
    )
}