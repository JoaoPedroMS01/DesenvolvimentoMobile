import { View, Text, Button, TextInput } from "react-native"
import { styles } from "./styles"
import Icon from 'react-native-vector-icons/MaterialIcons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState, useContext } from "react"
import AuthContext from "../../contexts/AuthContext"
import { login } from "../../services/auth"

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { loginContext } = useContext(AuthContext)
    
    const handleLogin = async () => {
        if (username != '' && password != '') {
            loginContext()
        }
    }

    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <TextInput placeholder="INSIRA SEU LOGIN" onChangeText={setUsername} value={username}/>
            <TextInput placeholder="INSIRA SUA SENHA" onChangeText={setPassword} value={password}/>
            <Button title='ENTRAR' onPress={() => handleLogin()} />
        </View>
    )
}

export default Login