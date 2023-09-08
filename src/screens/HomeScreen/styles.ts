import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#A3B1F1',
    },
    header: {
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle: {
        fontFamily: 'Inter_700Bold',
        fontSize: 34,
        color: '#333333',
    },
    headerSubtitle: {
        fontFamily: 'Inter_400Regular',
        fontSize: 16,
        color: '#333333',
    },
    containerAnimatedMargin: {
        flex: 1,
        paddingHorizontal: 40,
        paddingTop: 40,
        backgroundColor: 'white',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
    },
    containerAnimatedOpacity: {
        flex: 1,
    },
    urgencyButton: {
        height: 100,
        borderRadius: 10,
        marginBottom: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF8989',
        elevation: 6,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },
    urgencyButtonText: {
        fontFamily: 'Inter_500Medium',
        fontSize: 36,
        color: '#333333',

    },
    title: {
        fontFamily: 'Inter_700Bold',
        fontSize: 20,
        color: '#333333',
        marginBottom: 10,
    },
    listContainer: {
        flexDirection: 'row',
        gap: 20,
        marginBottom: 40,
    },
    item: {
        width: 80,
        height: 80,
        backgroundColor: '#A3B1F1',
        borderRadius: 10,
        marginRight: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    lineContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 40,
    },
    arrowLeft: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 5,
        borderRightWidth: 5,
        borderBottomWidth: 10,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'black',
        transform: [{ rotate: '270deg' }],
    },
    line: {
        width: '100%',
        backgroundColor: 'black',
        borderBottomWidth: 1,
    },
    arrowRight: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 5,
        borderRightWidth: 5,
        borderBottomWidth: 10,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'black',
        transform: [{ rotate: '90deg' }],
    },
    footer: {
        gap: 24,
        paddingTop: 24
    },
    footerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    footerItemIconBackground: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#A3B1F1',
    },
    footerItemText: {
        fontSize: 20,
        fontFamily: 'Inter_400Regular',
    }
});