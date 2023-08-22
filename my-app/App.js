import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>A Gata Mágica</Text>
      
      <Image
        source={require('./assets/Yuumi_0.jpg')}
        style={ styles.img }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f17ea1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 20,
    color: '#fff',
  },
  img: {
    height: 300,
    width: 300,
    marginTop: 30,
  }


});
