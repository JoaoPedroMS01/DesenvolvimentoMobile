import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    titulo: {
        fontSize: 36
    },
    botao: {
        backgroundColor: 'blue',
        borderRadius: 15,
        padding: 16,
        width: '80%'
    },
    botaoTexto: {
        color: 'white',
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 24
    }
})