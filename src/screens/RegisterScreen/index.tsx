import React, { useState, useEffect } from "react";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

import { Container } from "../../components/Container";
import { MyTextInput } from "../../components/MyTextInput";
import { MySwitch } from "../../components/MySwitch";
import { MyButton } from "../../components/MyButton";

import { styles } from "./styles";

import { LockKey, User, CaretLeft } from "phosphor-react-native";
import Animated, { Easing, useSharedValue, withTiming } from "react-native-reanimated";

export function RegisterScreen({ navigation, route }) {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordConfirm, setPasswordConfirm] = useState<string>('');
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

    const opacity = useSharedValue<any>(0);

    const handleGoBack = () => {
        opacity.value = withTiming(0, { duration: 400, easing: Easing.in(Easing.ease) });
        setTimeout(() => {
            navigation.navigate('LoginScreen', { previousScreen: 'LoginScreen' });
        }, 400);
    }

    const hadleGoHomeScreen = () => {
        navigation.navigate('HomeScreen', { previousScreen: 'RegisterScreen' });
    }

    const handleChangeName = (text: string) => {
        setName(text);
    }

    const handleChangeEmail = (text: string) => {
        setEmail(text);
    }

    const handleChangePassword = (text: string) => {
        setPassword(text);
    }

    const handleChangePasswordConfirm = (text: string) => {
        setPasswordConfirm(text);
    }

    const handleChangeVisibility = (value: boolean) => {
        setIsPasswordVisible(value);
    }

    const handleNavigateFromAnyScreen = () => {
        opacity.value = withTiming(1, { duration: 400, easing: Easing.in(Easing.ease) });
    }

    useEffect(() => {
        if (route.params?.previousScreen) {
            handleNavigateFromAnyScreen();
        }
    }, []);

    return (
        <Container backgroundColor="#FFF">
            <Animated.View style={[styles.innerContainer, { opacity: opacity }]}>

                <Pressable onPressOut={handleGoBack} style={styles.back}>
                    <CaretLeft size={32} color="#A3B1F1" weight="bold" />
                </Pressable>

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
                        placeholder="Nome e Sobrenome"
                        value={name}
                        onChangeText={handleChangeName}
                    />

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

                    <MyTextInput
                        icon={<LockKey size={32} color="#A3B1F1" />}
                        placeholder="Confirmar Senha"
                        value={passwordConfirm}
                        onChangeText={handleChangePasswordConfirm}
                        secureTextEntry={!isPasswordVisible}
                    />

                    <MySwitch
                        value={isPasswordVisible}
                        onValueChange={handleChangeVisibility}
                    />

                    <MyButton
                        text="Cadastrar"
                        onPress={hadleGoHomeScreen}
                    />

                </View>

                <View style={styles.footer}>
                    <Text style={styles.captionText}>
                        Ao clicar em Cadastrar, aceito os
                        <TouchableOpacity>
                            <Text style={styles.highlightedCaptionText}>Termos e condições</Text>
                        </TouchableOpacity>{' '}
                        e autorizo o uso dos meus dados de acordo com a
                        <TouchableOpacity>
                            <Text style={styles.highlightedCaptionText}>Declaração de privacidade</Text>
                        </TouchableOpacity>{' '}
                        .
                    </Text>
                </View>

            </Animated.View>
        </Container>
    )
}