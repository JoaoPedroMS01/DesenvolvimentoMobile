import { View, Text, Image } from "react-native";
import { styles } from "./styles";

export default function App() {
  return (
    <>
      <View style={styles.container1}>
        <View style={styles.containerSeta}>
          <Image style={styles.seta} source={require('../assets/seta.png')}></Image>
        </View>
        <View style={styles.containerImagem}>
          <Image style={styles.imagemPlaylist} source={require('../assets/imagem_playlist.jpeg')}></Image>
        </View>
      </View>
      <View style={styles.containerTexto}>
        <Text style={styles.texto}>Sua mixtape semanal cheia de novas descobertas e pérolas
          musicais escolhidas só pra você. Atualiza toda segunda.
        </Text>
      </View>
      <View style={styles.containerInfo1}>
        <Text style={styles.texto2}>Feito para 𝗖𝗮𝗿𝗹𝗼𝘀</Text>
        <View style={styles.containerDuracao}>
          <Text style={styles.duracao}>2h16min</Text>
        </View>
      </View>
      <View style={styles.containerInfo2}>
        <View style={styles.containerIcones}>
          <Image style={styles.icones} source={require('../assets/coracao.png')}></Image>
          <Image style={styles.icones} source={require('../assets/download.png')}></Image>
          <Image style={styles.icones} source={require('../assets/menu.png')}></Image>
        </View>
        <View style={styles.containerPlay}>
          <Image style={styles.play} source={require('../assets/play.png')}></Image>
        </View>
      </View>
      <View style={styles.containerMusicas}>
        <Image style={styles.capa} source={require('../assets/capa-donda.jpeg')}></Image>
        <View style={styles.infoMusica}>
          <Text style={styles.texto3}>Hurricane</Text>
          <Text style={styles.texto4}>Kanye West</Text>
        </View>
        <Image style={styles.menuMusica} source={require('../assets/menu.png')}></Image>
      </View>
      <View style={styles.containerMusicas}>
        <Image style={styles.capa} source={require('../assets/capa-iyrtitl.jpeg')}></Image>
        <View style={styles.infoMusica}>
          <Text style={styles.texto3}>Legend</Text>
          <Text style={styles.texto4}>Drake</Text>
        </View>
        <Image style={styles.menuMusica} source={require('../assets/menu.png')}></Image>
      </View>
      <View style={styles.containerMusicas}>
        <Image style={styles.capa} source={require('../assets/capa-iowa.jpeg')}></Image>
        <View style={styles.infoMusica}>
          <Text style={styles.texto3}>Disasterpiece</Text>
          <Text style={styles.texto4}>Slipknot</Text>
        </View>
        <Image style={styles.menuMusica} source={require('../assets/menu.png')}></Image>
      </View>
      <View style={styles.containerMusicas}>
        <Image style={styles.capa} source={require('../assets/capa-tlop.jpeg')}></Image>
        <View style={styles.infoMusica}>
          <Text style={styles.texto3}>Real Friends</Text>
          <Text style={styles.texto4}>Kanye West</Text>
        </View>
        <Image style={styles.menuMusica} source={require('../assets/menu.png')}></Image>
      </View>
    </>
  )
}