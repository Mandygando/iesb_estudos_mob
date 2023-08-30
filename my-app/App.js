import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import MinMax from './components/Semana01/MinMax';
import MinMaxCal from './components/Semana01/MinMaxCal';
import NumeroAleatorio from './components/Semana03/NumeroAleatorio';
import NumeroAleatorio2 from './components/Semana03/NumeroAleatorio2';
import DigiteSeuNome from './components/Semana03/DigiteSeuNome';
import Contador from './components/Semana03/Contador';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>A Gata Mágica</Text>




      <Image
        source={require('./assets/Yuumi_0.jpg')}
        style={styles.img}
      />
      {/* <MinMax min="10" max="20" /> */}
      {/* <MinMaxCal /> */}
      {/* <NumeroAleatorio/> */}
      {/* <NumeroAleatorio2  min={1} max={10} /> */}
      {/* <DigiteSeuNome/> */}
      <Contador/>
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
    marginTop: 90,
  },
  img: {
    height: 300,
    width: 300,
    marginTop: 30,
  }


});
