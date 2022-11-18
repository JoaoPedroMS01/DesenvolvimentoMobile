import { Text, TouchableOpacity, StyleSheet, View } from 'react-native'
import { styles } from './styles'

const Detalhes = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>DETALHES</Text>
            <TouchableOpacity style={styles.botao} onPress={() => navigation.goBack()}>
                <Text style={styles.botaoTexto}>IR PARA HOME</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Detalhes