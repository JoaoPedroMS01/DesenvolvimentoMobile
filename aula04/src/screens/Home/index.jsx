import { useState, useEffect } from "react"
import { View, Text, TouchableOpacity, StyleSheet, TextInput, FlatList, Button } from "react-native"
import { getTasks } from "../../services/tasksClient"
import Card from "../../components/Card"
import { styles } from "./styles"

export const Home = ({ navigation }) => {
    const [task, setTasks] = useState([])

    const fetchData = async () => {
        const taskList = await getTasks()
        setTasks(taskList)
      }
    
      useEffect(() => {
        fetchData()
      }, [])

    return (
        <View style={styles.container}>
            <FlatList
                data={task}
                renderItem={({item}) => <Card item={item}/>}
                keyExtractor={item => item.id}
            />
            <Button title="Detalhes" onPress={() => navigation.navigate('Detalhes')} />
        </View>
    )
}