import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";

import { Container } from "../../components/Container";
import { MyTextInput } from "../../components/MyTextInput";
import { MySwitch } from "../../components/MySwitch";
import { MyButton } from "../../components/MyButton";

import { styles } from "./styles";

import { User, LockKey } from "phosphor-react-native";
import Animated, { Easing, useSharedValue, withTiming } from "react-native-reanimated";


export function LoginScreen({ navigation, route }) {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

    const opacity = useSharedValue<any>(1);

    const handleChangeEmail = (text: string) => {
        setEmail(text);
    }

    const handleChangePassword = (text: string) => {
        setPassword(text);
    }

    const handleChangeIsPasswordVisible = (value: boolean) => {
        setIsPasswordVisible(value);
    }


    const handleNavigateToHomeScreen = () => {
        opacity.value = withTiming(0, { duration: 400, easing: Easing.in(Easing.ease) });
        setTimeout(() => {
            navigation.navigate('HomeScreen', { previousScreen: 'LoginScreen' });
        }, 400);
    }

    const handleNavigateToRegisterScreen = () => {
        opacity.value = withTiming(0, { duration: 400, easing: Easing.in(Easing.ease) });
        setTimeout(() => {
            navigation.navigate('RegisterScreen', { previousScreen: 'LoginScreen' });
        }, 400);
    }

    const handleNavigateFromAnyScreen = () => {
        opacity.value = withTiming(1, { duration: 400, easing: Easing.in(Easing.ease) });
    }

    useEffect(() => {
        console.log(route);
        if(route.params?.previousScreen){
            handleNavigateFromAnyScreen();
        }
    }, [route]);

    return (
        <Container backgroundColor="#FFF" backgroundColorStatusBar="#FFF">
            <Animated.View style={[styles.innerContainer, { opacity: opacity }]}>

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
                        icon={<User size={32} color="#A3B1F1" />}
                        placeholder="E-mail"
                        value={email}
                        onChangeText={handleChangeEmail}
                    />

                    <MyTextInput
                        icon={<LockKey size={32} color="#A3B1F1" />}
                        placeholder="Senha"
                        value={password}
                        onChangeText={handleChangePassword}
                        secureTextEntry={!isPasswordVisible}
                    />

                    <MySwitch
                        value={isPasswordVisible}
                        onValueChange={handleChangeIsPasswordVisible}
                    />

                    <MyButton
                        text="Entrar"
                        onPress={handleNavigateToHomeScreen}
                    />

                </View>

                <View style={styles.footer}>

                    <View style={styles.captionContainer}>
                        <Text style={styles.captionLeftText}>
                            Ainda não tem conta?
                        </Text>
                        <TouchableOpacity onPress={handleNavigateToRegisterScreen}>
                            <Text style={styles.captionRightText}>
                                Cadastrar
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.captionContainer}>
                        <Text style={styles.captionLeftText}>
                            Esqueceu a senha?
                        </Text>
                        <TouchableOpacity onPress={handleNavigateToRegisterScreen}>
                            <Text style={styles.captionRightText}>
                                Recuperar
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </Animated.View>
        </Container>

    )
}