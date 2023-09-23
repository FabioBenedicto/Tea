import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, } from "react-native";

import { Container } from "../../components/Container";
import { MyTextInput } from "../../components/MyTextInput";
import { MySwitch } from "../../components/MySwitch";
import { MyButton } from "../../components/MyButton";

import { styles } from "./styles";

import { Envelope, LockKey } from "phosphor-react-native";
import Animated, { useSharedValue, withTiming, Easing, } from "react-native-reanimated";


export function LoginScreen({ navigation, route }) {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
    const innerContainerOpacity = useSharedValue<any>(1);


    const navigateToHomeScreen = () => {
        innerContainerOpacity.value = withTiming(0, { duration: 400, easing: Easing.in(Easing.ease) });
        setTimeout(() => {
            navigation.navigate('HomeScreen', { previousScreen: 'LoginScreen' });
        }, 400);
    }

    const navigateToRegisterScreen = () => {
        innerContainerOpacity.value = withTiming(0, { duration: 400, easing: Easing.in(Easing.ease) });
        setTimeout(() => {
            navigation.navigate('RegisterScreen', { previousScreen: 'LoginScreen' });
        }, 400);
    }

    const navigateFromRegisterScreen = () => {
        innerContainerOpacity.value = withTiming(1, { duration: 400, easing: Easing.in(Easing.ease) });
    }

    useEffect(() => {
        if (route.params?.previousScreen == 'RegisterScreen') {
            navigateFromRegisterScreen();
        }
        if (route.params?.previousScreen == 'ProfileScreen') {
            navigateFromRegisterScreen();
        }
    }, [route]);

    return (
        <Container backgroundColor="#FFF" isKeyboardSupported>
            <Animated.View style={[styles.innerContainer, { opacity: innerContainerOpacity }]}>

                <View style={styles.header}>
                    <Text style={styles.headerText}>
                        Entrar
                    </Text>
                    <Text style={styles.headerSubtext}>
                        Insira seus dados e pressione o botão
                    </Text>
                </View>

                <View style={styles.main}>

                    <MyTextInput
                        icon={<Envelope size={32} color="#A3B1F1" />}
                        placeholder="E-mail"
                        value={email}
                        onChangeText={(text: string) => setEmail(text)}
                    />

                    <MyTextInput
                        icon={<LockKey size={32} color="#A3B1F1" />}
                        placeholder="Senha"
                        value={password}
                        onChangeText={(text: string) => setPassword(text)}
                        secureTextEntry={!isPasswordVisible}
                    />

                    <MySwitch
                        value={isPasswordVisible}
                        onValueChange={(value: boolean) => setIsPasswordVisible(value)}
                    />

                    <MyButton
                        text="Entrar"
                        onPress={navigateToHomeScreen}
                    />

                </View>

                <View style={styles.footer}>

                    <View style={styles.captionContainer}>
                        <Text style={styles.captionText}>
                            Ainda não tem conta?
                        </Text>
                        <TouchableOpacity onPress={navigateToRegisterScreen}>
                            <Text style={styles.captionSubtext}>
                                Cadastrar-se
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.captionContainer}>
                        <Text style={styles.captionText}>
                            Esqueceu a senha?
                        </Text>
                        <TouchableOpacity onPress={navigateToRegisterScreen}>
                            <Text style={styles.captionSubtext}>
                                Recuperar
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </Animated.View>
        </Container>
    )
}