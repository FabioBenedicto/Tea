import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput, Pressable, } from "react-native";

import { Fish, CaretLeft, Phone } from "phosphor-react-native";

import { styles } from "./styles";
import { MyTextInput } from "../../components/MyTextInput";
import { Container } from "../../components/Container";
import { TextArea } from "../../components/TextArea";
import { MyButton } from "../../components/MyButton";
import { setStatusBarHidden } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

export function ProfileScreen() {
    const [notes, setNotes] = useState<string>();
    const [urgencyNumber, setUrgencyNumber] = useState<string>();
    const navigation = useNavigation();

    const handleNotes = (text: string) => {
        setNotes(text);
    }

    const handleNavigateToHomeScreen = () => {
        navigation.navigate('HomeScreen');
    }

    return (
        <Container backgroundColor="#FFF">
            <View style={styles.innerContainer}>
            
                <View style={styles.header}>
                    <TouchableOpacity onPressOut={handleNavigateToHomeScreen}>
                        <CaretLeft weight="bold" size={30} />
                    </TouchableOpacity>
                </View>

                <View style={styles.main}>

                    <View style={styles.profile}>
                        <Image style={styles.profileImage} source={{ uri: 'https://icon-library.com/images/no-user-image-icon/no-user-image-icon-23.jpg' }} />
                        <Text style={styles.profileText}>Fábio Henrique Benedicto</Text>
                        <Text style={styles.profileSubtext}>fabiobenedicto@outlook.com</Text>
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
                        <Text style={styles.testinho}>O número de segurança é o contato que será acionando pelo botão de emergência</Text>
                    </View>

                    <MyButton text="Alterar" onPress={() => { }} />

                </View>

            </View>
        </Container>
    )
}