import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

export const styles = StyleSheet.create({
    innerContainer: {
        flex: 1,
        paddingHorizontal: 24,
        backgroundColor: '#FFFFFF',
        paddingTop: getStatusBarHeight(),
    },
    header: {
        marginTop: 40,
        marginBottom: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontFamily: 'Inter_700Bold',
        fontSize: 32,
        color: '#333333',
    },
    headerSubtext: {
        fontFamily: 'Inter_400Regular',
        fontSize: 16,
        color: '#666666',
    },
    main: {
        gap: 40,
        marginBottom: 40,
    },
    footer: {
        gap: 20,
        marginBottom: 40,
    },
    captionContainer: {
        alignItems: 'center',
    },
    captionText: {
        fontFamily: 'Inter_400Regular',
        fontSize: 16,
        color: '#666666'
    },
    captionSubtext: {
        fontFamily: 'Inter_700Bold',
        fontSize: 16,
        color: '#333333'
    },
});