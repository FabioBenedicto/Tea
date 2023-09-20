import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 120,

    },
    innerContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        elevation: 6,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        shadowOffset: {
          width: 0,
          height: 2,
        },
    },
    text: {
        fontFamily: 'Inter_500Medium',
        fontSize: 20,
        marginTop: 10,
    }
});