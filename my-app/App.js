import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import MinMax from './components/desafios/MinMax';
import MinMaxCal from './components/Semana01/MinMaxCal';
import NumeroAleatorio from './components/desafios/NumeroAleatorio';
import NumeroAleatorio2 from './components/Semana03/NumeroAleatorio2';
import DigiteSeuNome from './components/Semana03/DigiteSeuNome';
import Contador from './components/Semana03/Contador';
import Perfil from './components/desafios/Perfil';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>A Gata Mágica</Text>




      {/* <Image */}
        source={require('./assets/Yuumi_0.jpg')}
        style={styles.img}
      {/* /> */}
      {/* <MinMax min="10" max="20" /> */}
      {/* <MinMaxCal /> */}
      {/* <NumeroAleatorio/> */}
      {/* <NumeroAleatorio2  min={1} max={10} /> */}
      {/* <DigiteSeuNome/> */}
      {/* <Contador/> */}

      <Perfil
        nome="João Silva"
        idade={28}
        cidade="São Paulo, SP"
        descricao="Olá, sou um entusiasta de tecnologia apaixonado por desenvolvimento de aplicativos móveis. Sempre em busca de aprender coisas novas e criar experiências incríveis para os usuários."
        imagemPerfil={require("./assets/img_perfil.jpg")}
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
    marginTop: 90,
  },
  img: {
    height: 300,
    width: 300,
    marginTop: 30,
  }


});
