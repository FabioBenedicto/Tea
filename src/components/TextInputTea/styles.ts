import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        position: "relative",
        marginBottom: 40,
        flexDirection: 'row', 
        alignItems: 'center',
    },
    icon: {
        marginRight: 8,
        alignSelf: "flex-end",
    },
    innerContainer: {
        position: 'relative', 
        flex: 1
    },
    textInput: {
        width: '100%',
        height: 40,
        borderBottomWidth: 2,
        borderColor: '#A3B1F1',
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