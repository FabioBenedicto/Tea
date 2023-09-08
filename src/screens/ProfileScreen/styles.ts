import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    header: {
        backgroundColor: '#A3B1F1',
        height: 120,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: 'center',
    },
    main: {
        paddingHorizontal: 24,
        marginTop: -40,
    },
    profile:{
        alignItems: 'center',
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60, 
        marginBottom: 10, 
    },
    profileText: {
        fontFamily: 'Inter_700Bold',
        fontSize: 20,
        color: '#333333',
        marginBottom: 40,
    },
    annotations: {
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        borderWidth: 2,
        borderColor: '#A3B1F1',
        borderRadius: 10,
        padding: 8,
        marginBottom: 40,
        fontSize: 16,
    },
    textArea: {
        position: "relative",
    },
    urgencyNumber: {
        width: '100%',
        height: 40,
        backgroundColor: 'white',
        borderBottomWidth: 2,
        borderColor: '#A3B1F1',
        fontSize: 16,

    },
    placeholderTextArea: {
        fontFamily: 'Inter_700Bold',
        fontSize: 16,
        marginBottom: 10,
    },
    placeholderInput: {
        position: 'absolute',
        top: -20,
        fontFamily: 'Inter_700Bold',
        fontSize: 16,
    },
    testinho: {
        fontFamily: 'Inter_400Regular',
        fontSize: 12,
    },
    button: {
        backgroundColor: '#FF8989',
        height: 60,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: 'Inter_700Bold',
        fontSize: 24,
    }
});