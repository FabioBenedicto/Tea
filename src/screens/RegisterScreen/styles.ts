import { StyleSheet, Platform } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

export const styles = StyleSheet.create({
    innerContainer: {
        flex: 1,
        paddingHorizontal: 24,
    },
    back: {
        marginTop: 24,
        justifyContent: 'center',
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 80,
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
        marginBottom: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    captionText: {
        fontFamily: 'Inter_400Regular',
        fontSize: 12,
        color: '#666666',
    },
    highlightedCaptionText: {
        fontFamily: 'Inter_700Bold',
        fontSize: 12,
        color: '#333333',
    }
});