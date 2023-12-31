import { StyleSheet, Platform } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

export const styles = StyleSheet.create({
    innerContainer: {
        flex: 1,
        paddingHorizontal: 24,
    },
    header: {
        backgroundColor: '#A3B1F1',
        marginHorizontal: -24,
        paddingTop: 40 + getStatusBarHeight(),
        paddingBottom: 40,
        paddingHorizontal: 24,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    signOutContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    signOutText: {
        fontSize: 16,
        color: '#FF8989',
    },
    main: {
        marginTop: -40,
        gap: 40,
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
    },
    profileSubtext: {
        fontFamily: 'Inter_400Regular',
        fontSize: 16,
        color: '#666666',
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
        color: "#666666"
    },
    placeholderInput: {
        position: 'absolute',
        top: -20,
        fontFamily: 'Inter_700Bold',
        fontSize: 16,
    },
    subtext: {
        marginTop: -30,
    },
    testinho: {
        fontFamily: 'Inter_400Regular',
        fontSize: 12,
        textAlign: 'center',
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