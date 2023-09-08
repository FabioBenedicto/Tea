import React, { useState } from "react";
import { SafeAreaView, View, Text, Image, TouchableOpacity, TextInput, Pressable, } from "react-native";

import { Fish, CaretLeft } from "phosphor-react-native";

import { styles } from "./styles";

export function ProfileScreen() {
    const [annotations, setAnnotations] = useState<string>();
    const [urgencyNumber, setUrgencyNumber] = useState<string>();

    return (
        <>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity>
                        <CaretLeft weight="bold" size={30} />
                    </TouchableOpacity>
                </View>
                <View style={styles.main}>
                <View style={styles.profile}>
                    <Image style={styles.profileImage} source={{ uri: 'https://icon-library.com/images/no-user-image-icon/no-user-image-icon-23.jpg' }} />
                    <Text style={styles.profileText}>Fábio Henrique Benedicto</Text>
                </View>


                    <Text style={styles.placeholderTextArea}>
                        Anotações
                    </Text>

                <TextInput 
                    style={styles.annotations}
                    multiline={true}
                    numberOfLines={8}
                    placeholder="Type something"
                    placeholderTextColor="grey"
                    value={annotations}
                    onChangeText={(value) => {setAnnotations(value);}}
                    underlineColorAndroid='transparent'
                    textAlignVertical="top"
                    />

                <View style={styles.textArea}>
                <TextInput 
                style={styles.urgencyNumber}
                value={urgencyNumber}
                onChangeText={(value) => {setUrgencyNumber(value);}}
                underlineColorAndroid='transparent'>
                </TextInput>
                <Text style={styles.placeholderInput}>Número de segurança</Text>
                </View>
                <Text style={styles.testinho}>O número de segurança é o contato que será acionando pelo botão de emergência</Text>
                
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Alterar</Text>
                </Pressable>
                </View>
            </SafeAreaView>
        </>
    )
}