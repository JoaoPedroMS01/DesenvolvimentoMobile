import { View } from 'react-native';
import { styles } from './styles';

export default function App() {
  return (
    <>
      <View style={styles.container1}></View>
      <View style={styles.container2}>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
      </View>
      <View style={styles.container3}>
        <View style={styles.box3}></View>
        <View style={styles.box4}></View>
      </View>
      <View style={styles.container4}></View>
      <View style={styles.container5}>
        <View style={styles.box5}></View>
        <View style={styles.box5}></View>
        <View style={styles.box5}></View>
      </View>
      <View style={styles.container5}>
        <View style={styles.box5}></View>
        <View style={styles.box5}></View>
        <View style={styles.box5}></View>
      </View>
      <View style={styles.container6}></View>
    </>
  );
}