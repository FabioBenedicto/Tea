import React, { useEffect, useRef, useState } from "react";
import { useHeaderHeight } from "@react-navigation/elements";
import {
    SafeAreaView,
    View,
    Text,
    Pressable,
    TextInput,
    Switch,
    Platform,
    Keyboard,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    ScrollView
} from "react-native";

import Animated, { useSharedValue, Easing, withTiming } from "react-native-reanimated";

import { User, LockKey } from "phosphor-react-native";

import { styles } from "./styles";
import { TextInputTea } from "../components/TextInputTea";

export function RegisterScreen() {
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [backgroundColor, setBackgroundColor] = useState<string>('#FF8989');
    const [isVisible, setIsVisible] = useState<boolean>();

    const AnimatedText = Animated.createAnimatedComponent(Text);
    const PlaceholderEmailBottom = useSharedValue<any>(8);
    const PlaceholderPasswordBottom = useSharedValue<any>(8);

    const textInputEmailRef = useRef<TextInput>(null);
    const textInputPasswordRef = useRef<TextInput>(null);

    const movePlaceholderUp = (sharedValue: any, ref: any) => {
        sharedValue.value = withTiming(40, { duration: 100, easing: Easing.linear });
        ref.current?.focus();
    }

    const movePlaceholderDown = (sharedValue: any, value: string | undefined) => {
        if (!value) {
            sharedValue.value = withTiming(10, { duration: 100, easing: Easing.linear });
        }
    }

    const headerHeight = useHeaderHeight();

    useEffect(() => {
        console.log(email);
    }, [email]);

    return (
        <SafeAreaView style={styles.containerWithBackground}>
            <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <ScrollView>
                    <View style={styles.innerContainer}>

                        <View style={styles.header}>
                            <Text style={styles.headerText}>Entrar</Text>
                        </View>

                        <View style={styles.main}>

                            <TextInputTea 
                            icon={<LockKey size={36} style={styles.textInputIcon} color="#A3B1F1" />}
                            placeholder="Teste"
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            />


                            <Pressable
                                style={styles.textInputContainer}
                                onPress={() => { movePlaceholderUp(PlaceholderPasswordBottom, textInputPasswordRef); }}
                            >
                                <LockKey size={36} style={styles.textInputIcon} color="#A3B1F1" />
                                <View style={styles.textInputWithPlaceholder}>
                                    <TextInput
                                        ref={textInputPasswordRef}
                                        onFocus={() => { movePlaceholderUp(PlaceholderPasswordBottom, textInputPasswordRef) }}
                                        onBlur={() => { movePlaceholderDown(PlaceholderPasswordBottom, password); }}
                                        style={[styles.textInput]}
                                        value={password}
                                        onChangeText={(value) => { setPassword(value); }}
                                        underlineColorAndroid='transparent'
                                        cursorColor='#666666'
                                        secureTextEntry={isVisible ? false : true}
                                    >

                                    </TextInput>
                                    <AnimatedText style={[styles.textInputPlaceholder, { bottom: PlaceholderPasswordBottom, }]}>Senha</AnimatedText>
                                </View>
                            </Pressable>

                            <Pressable
                                style={styles.textInputContainer}
                                onPress={() => { movePlaceholderUp(PlaceholderPasswordBottom, textInputPasswordRef); }}
                            >
                                <LockKey size={36} style={styles.textInputIcon} color="#A3B1F1" />
                                <View style={styles.textInputWithPlaceholder}>
                                    <TextInput
                                        ref={textInputPasswordRef}
                                        onFocus={() => { movePlaceholderUp(PlaceholderPasswordBottom, textInputPasswordRef) }}
                                        onBlur={() => { movePlaceholderDown(PlaceholderPasswordBottom, password); }}
                                        style={[styles.textInput]}
                                        value={password}
                                        onChangeText={(value) => { setPassword(value); }}
                                        underlineColorAndroid='transparent'
                                        cursorColor='#666666'
                                        secureTextEntry={isVisible ? false : true}
                                    >

                                    </TextInput>
                                    <AnimatedText style={[styles.textInputPlaceholder, { bottom: PlaceholderPasswordBottom, }]}>Senha</AnimatedText>
                                </View>
                            </Pressable>

                            <Pressable
                                style={styles.textInputContainer}
                                onPress={() => { movePlaceholderUp(PlaceholderPasswordBottom, textInputPasswordRef); }}
                            >
                                <LockKey size={36} style={styles.textInputIcon} color="#A3B1F1" />
                                <View style={styles.textInputWithPlaceholder}>
                                    <TextInput
                                        ref={textInputPasswordRef}
                                        onFocus={() => { movePlaceholderUp(PlaceholderPasswordBottom, textInputPasswordRef) }}
                                        onBlur={() => { movePlaceholderDown(PlaceholderPasswordBottom, password); }}
                                        style={[styles.textInput]}
                                        value={password}
                                        onChangeText={(value) => { setPassword(value); }}
                                        underlineColorAndroid='transparent'
                                        cursorColor='#666666'
                                        secureTextEntry={isVisible ? false : true}
                                    >

                                    </TextInput>
                                    <AnimatedText style={[styles.textInputPlaceholder, { bottom: PlaceholderPasswordBottom, }]}>Senha</AnimatedText>
                                </View>
                            </Pressable>

                            <Pressable
                                style={styles.textInputContainer}
                                onPress={() => { movePlaceholderUp(PlaceholderPasswordBottom, textInputPasswordRef); }}
                            >
                                <LockKey size={36} style={styles.textInputIcon} color="#A3B1F1" />
                                <View style={styles.textInputWithPlaceholder}>
                                    <TextInput
                                        ref={textInputPasswordRef}
                                        onFocus={() => { movePlaceholderUp(PlaceholderPasswordBottom, textInputPasswordRef) }}
                                        onBlur={() => { movePlaceholderDown(PlaceholderPasswordBottom, password); }}
                                        style={[styles.textInput]}
                                        value={password}
                                        onChangeText={(value) => { setPassword(value); }}
                                        underlineColorAndroid='transparent'
                                        cursorColor='#666666'
                                        secureTextEntry={isVisible ? false : true}
                                    >

                                    </TextInput>
                                    <AnimatedText style={[styles.textInputPlaceholder, { bottom: PlaceholderPasswordBottom, }]}>Senha</AnimatedText>
                                </View>
                            </Pressable>

                            <Pressable
                                style={styles.textInputContainer}
                                onPress={() => { movePlaceholderUp(PlaceholderPasswordBottom, textInputPasswordRef); }}
                            >
                                <LockKey size={36} style={styles.textInputIcon} color="#A3B1F1" />
                                <View style={styles.textInputWithPlaceholder}>
                                    <TextInput
                                        ref={textInputPasswordRef}
                                        onFocus={() => { movePlaceholderUp(PlaceholderPasswordBottom, textInputPasswordRef) }}
                                        onBlur={() => { movePlaceholderDown(PlaceholderPasswordBottom, password); }}
                                        style={[styles.textInput]}
                                        value={password}
                                        onChangeText={(value) => { setPassword(value); }}
                                        underlineColorAndroid='transparent'
                                        cursorColor='#666666'
                                        secureTextEntry={isVisible ? false : true}
                                    >

                                    </TextInput>
                                    <AnimatedText style={[styles.textInputPlaceholder, { bottom: PlaceholderPasswordBottom, }]}>Senha</AnimatedText>
                                </View>
                            </Pressable>

                            <Pressable
                                style={styles.textInputContainer}
                                onPress={() => { movePlaceholderUp(PlaceholderEmailBottom, textInputEmailRef); }}
                            >
                                <User
                                    size={36}
                                    color="#A3B1F1"
                                    style={styles.textInputIcon}
                                />
                                <View style={styles.textInputWithPlaceholder}>
                                    <TextInput
                                        ref={textInputEmailRef}
                                        onFocus={() => { movePlaceholderUp(PlaceholderEmailBottom, textInputEmailRef); }}
                                        onBlur={() => { movePlaceholderDown(PlaceholderEmailBottom, email); }}
                                        style={[styles.textInput]}
                                        value={email}
                                        onChangeText={(value) => { setEmail(value); }}
                                        cursorColor='#666666'
                                        underlineColorAndroid='transparent'>
                                    </TextInput>
                                    <AnimatedText style={[styles.textInputPlaceholder, { bottom: PlaceholderEmailBottom, }]}>E-mail</AnimatedText>
                                </View>
                            </Pressable>

                            <TextInputTea 
                            icon={<LockKey size={36} style={styles.textInputIcon} color="#A3B1F1" />}
                            placeholder="Teste"
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            />

                        </View>

                        <View style={styles.footer}>
                            <Pressable onPressIn={() => { setBackgroundColor('#E57A7A') }} onPressOut={() => { setBackgroundColor('#FF8989'); }} style={[styles.button, { backgroundColor: backgroundColor }]}>
                                <Text style={styles.buttonText}>
                                    Entrar
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                    </ScrollView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}