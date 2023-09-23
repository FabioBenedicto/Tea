import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        alignItems: 'center',
        borderBottomWidth: 2,
        borderColor: '#A3B1F1',
    },
    icon: {
        marginRight: 8,
    },
    innerContainer: {
        position: 'relative', 
        flex: 1,
    },
    textInput: {
        width: '100%',
        height: 40,
        fontSize: 20,
        zIndex: 1,
    },
    placeHolder: {
        position: 'absolute',
        fontFamily: 'Inter_500Medium',
        fontSize: 20,
        color: '#666666',
    },
});