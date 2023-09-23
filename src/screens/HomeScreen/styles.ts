import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

export const styles = StyleSheet.create({
    innerContainer: {
        flex: 1,
        backgroundColor: '#A3B1F1',
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40 + getStatusBarHeight(),
        marginBottom: 40,
    },
    headerText: {
        fontFamily: 'Inter_700Bold',
        fontSize: 34,
        color: '#333333',
    },
    headerSubtext: {
        fontFamily: 'Inter_400Regular',
        fontSize: 16,
        color: '#333333',
    },
    containerAnimatedMargin: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 40,
        backgroundColor: 'white',
        //borderTopLeftRadius: 24,
        //borderTopRightRadius: 24,
    },
    containerAnimatedOpacity: {
        flex: 1,
    },
    title: {
        marginBottom: 20,
        fontFamily: 'Inter_700Bold',
        fontSize: 20,
        color: '#333333',
    },
    HorizontalListContainer: {
        gap: 20,
        marginBottom: 40,
        flexDirection: 'row',
    },
    footer: {

    },
    VerticalListContainer: {
        gap: 20,
        marginBottom: 40,
    }
});