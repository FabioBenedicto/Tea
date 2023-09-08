import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerWithBackground: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    innerContainer: {
        flex: 1,
        paddingHorizontal: 24,
    },
    header: {
        marginVertical: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontFamily: 'Inter_700Bold',
        fontSize: 34,
        color: '#333333',
    },
    main: {
        marginBottom: 40,
    },
    textInputContainer: {
        position: "relative",
        marginBottom: 40,
        flexDirection: 'row', 
        alignItems: 'center',
    },
    textInputIcon: {
        marginRight: 8,
        alignSelf: "flex-end",
    },
    textInputWithPlaceholder: {
        position: 'relative', 
        flex: 1
    },
    textInput: {
        width: '100%',
        height: 40,
        backgroundColor: '#FFF',
        borderBottomWidth: 2,
        borderColor: '#A3B1F1',
        fontSize: 20,
    },
    textInputPlaceholder: {
        position: 'absolute',
        fontFamily: 'Inter_500Medium',
        fontSize: 20,
        color: '#666666',
    },
    passwordVisibility: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 10,
        alignItems: 'center',
    },
    passwordVisibilityText: {
        fontFamily: 'Inter_500Medium',
        fontSize: 16,
        color: '#333333',
    },
    signIn: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        marginBottom: 10,
    },
    siginFirstText: {
        fontFamily: 'Inter_400Regular',
        fontSize: 16,
        color: '#666666'
    },
    siginSecondText: {
        fontFamily: 'Inter_700Bold',
        fontSize: 16,
        color: '#333333'
    },
    forgotPassword: {
        
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        // /marginBottom: 10,
    },
    forgotPasswordSubtext: {
        fontFamily: 'Inter_400Regular',
        fontSize: 16,
        color: '#666666'
    },
    forgotPasswordText: {
        fontFamily: 'Inter_700Bold',
        fontSize: 16,
        color: '#333333'
    },
    button: {
        backgroundColor: '#FF8989',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 40,
    },
    buttonText: {
        fontFamily: 'Inter_700Bold',
        fontSize: 24,
        color: '#333333',
    },
    footer: {
    }
});