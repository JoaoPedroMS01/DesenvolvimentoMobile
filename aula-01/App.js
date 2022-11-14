import React, { useState } from "react"
import { Text, View, ScrollView, Button, TouchableOpacity, TextInput, Image } from "react-native"
import Gatinho from "./components/Gatinho"
import { styles } from "./styles"
import reactLogo from "./assets/tiny_logo.png"
import angularLogo from './assets/angular_logo.webp'

export default function App() {
  const [nome, setNome] = useState('')
  const [isTrue, setIsTrue] = useState(false)

  const handlePress = () => {
    setIsTrue(!isTrue)
  }

  return (
    // <View style={styles.container}>
    //   {/* <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
    //     style={{ width: 50, height: 50 }}
    //   />
    //   <Image source={require('./assets/tiny_logo.png')} style={{ width: 50, height: 50 }} /> */}
    //   {isTrue ? <Image source={reactLogo} style={{width: 50, height: 50}}/> : <Image source={angularLogo} style={{width: 50, height: 50}}/>}
    //   <Text style={styles.texto}>Hello World!</Text>
    //   <Gatinho nome='Fubá' />
    //   <Text style={styles.texto}>Input: {nome}</Text>
    //   <Text style={styles.texto}> {isTrue ? 'É verdadeiro' : 'É falso'}</Text>
    //   <TextInput
    //     style={{ backgroundColor: '#fff', marginBottom: 20, width: '80%' }}
    //     placeholder='Digite o nome do Gatinho'
    //     onChangeText={setNome}
    //     value={nome}
    //   />
    //   <Button onPress={handlePress} title='Clique Aqui' color='#215491' />
    //   <TouchableOpacity onPress={() => handlePress()} style={styles.botao}>
    //     <Text style={styles.texto}>TouchableOpacity</Text>
    //   </TouchableOpacity>
    // </View>
    <>
      <View style={styles.container1}>
        {/* <Text style={styles.texto}>FLEXBOX</Text> */}
        <View style={styles.superior}></View>
        <View style={styles.superior}></View>
        <View style={styles.superior}></View>
      </View>
      <View style={styles.container2}>
        {/* <Text style={styles.texto}>FLEXBOX</Text> */}
        <View style={styles.meio1}></View>
        <View style={styles.meio1}></View>
        <View style={styles.meio1}></View>
      </View>
      <View style={styles.container3}>
        {/* <Text style={styles.texto}>FLEXBOX</Text> */}
        <View style={styles.meio2}></View>
        <View style={styles.meio2}></View>
        <View style={styles.meio2}></View>
      </View>
    </>
  )
}