import React, { useState, useEffect } from "react";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

import { Container } from "../../components/Container";
import { MyTextInput } from "../../components/MyTextInput";
import { MySwitch } from "../../components/MySwitch";
import { MyButton } from "../../components/MyButton";

import { styles } from "./styles";

import { LockKey, User, CaretLeft, Envelope } from "phosphor-react-native";
import Animated, { Easing, useSharedValue, withTiming } from "react-native-reanimated";

export function RegisterScreen({ navigation, route }) {
    const [firstAndLastName, setFirstAndLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');
    const [arePasswordsVisible, setArePasswordsVisible] = useState<boolean>(false);
    const [backgroundColor, setBackgroundColor] = useState<string>('#A3B1F1');
    const innerContainerOpacity = useSharedValue<any>(0);

    const navigateToLoginScreen = () => {
        innerContainerOpacity.value = withTiming(0, { duration: 400, easing: Easing.in(Easing.ease) });
        setTimeout(() => {
            navigation.navigate('LoginScreen', { previousScreen: 'RegisterScreen' });
        }, 400);
    }

    const navigateFromLoginScreen = () => {
        innerContainerOpacity.value = withTiming(1, { duration: 400, easing: Easing.in(Easing.ease) });
    }

    useEffect(() => {
        if (route.params?.previousScreen == 'LoginScreen') {
            navigateFromLoginScreen();
        }
    }, [route]);

    return (
        <Container isKeyboardSupported>
            <Animated.View style={[styles.innerContainer, { opacity: innerContainerOpacity }]}>

                <Pressable
                    onPressIn={() => setBackgroundColor('#8C9EB9')}
                    onPressOut={() => {
                        setBackgroundColor('#A3B1F1');
                        navigateToLoginScreen();
                    }}
                    style={styles.back}>
                    <CaretLeft size={32} color={backgroundColor} weight="bold" />
                </Pressable>

                <View style={styles.header}>
                    <Text style={styles.headerText}>
                        Cadastrar-se
                    </Text>
                    <Text style={styles.headerSubtext}>
                        Insira seus dados, leia o texto no rodapé e pressione o botão.
                    </Text>
                </View>

                <View style={styles.main}>

                    <MyTextInput
                        icon={<User size={32} color="#A3B1F1" />}
                        placeholder="Nome e Sobrenome"
                        value={firstAndLastName}
                        onChangeText={(text: string) => setFirstAndLastName(text)}
                    />

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
                        secureTextEntry={!arePasswordsVisible}
                    />

                    <MyTextInput
                        icon={<LockKey size={32} color="#A3B1F1" />}
                        placeholder="Confirmar Senha"
                        value={passwordConfirmation}
                        onChangeText={(text: string) => setPasswordConfirmation(text)}
                        secureTextEntry={!arePasswordsVisible}
                    />

                    <MySwitch
                        value={arePasswordsVisible}
                        onValueChange={(value: boolean) => setArePasswordsVisible(value)}
                    />

                    <MyButton
                        text="Cadastrar"
                        onPress={navigateToLoginScreen}
                    />

                </View>

                <View style={styles.footer}>
                    <View style={styles.captionContainer}>
                        <Text style={styles.captionText}>Ao clicar em Cadastrar, aceito os </Text>
                        <TouchableOpacity>
                            <Text style={styles.captionTextHighlighted}>Termos e condições </Text>
                        </TouchableOpacity>
                        <Text style={styles.captionText}>e autorizo o uso dos meus dados de acordo com a </Text>
                        <TouchableOpacity>
                            <Text style={styles.captionTextHighlighted}>Declaração de privacidade</Text>
                        </TouchableOpacity>
                        <Text style={styles.captionText}>.</Text>
                    </View>
                </View>

            </Animated.View>
        </Container>
    )
}