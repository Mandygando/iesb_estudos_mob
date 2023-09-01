import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet} from "react-native";

const App = () => {
  const frases = [
  "''A vida é como um labirinto sem saída, você sempre encontrará um beco sem saída.''",
    "Não importa o quanto você tente, o fracasso sempre será a única constante.''",
    "''A única certeza na vida é que tudo está destinado a dar errado.''",
    "''Sonhar grande? Mais como sonhar para se decepcionar ainda mais.''",
    "''Não há luz no fim do túnel, apenas mais escuridão.''",
    "''A cada passo em frente, você dá dois passos para trás.''",
    "''O otimismo é apenas uma ilusão temporária antes da queda.''",
    "''Nada é impossível, exceto para você.''",
    "''Se você nunca tentar, nunca terá que lidar com o fracasso constante.''",
    "''A esperança é apenas um desperdício de tempo.''",
    "''O sucesso é para os sortudos, não para os esforçados.''",
    "''A mediocridade é o único objetivo alcançável.''",
    "''A ambição só leva à decepção.''",
    "''Pensar positivo só atrai mais negatividade.''",
    "''N''ada é digno de celebração, então por que se importar?''",
    "''Cada novo dia é apenas mais um dia de desgraça.''",
    "''Você nasceu para pagar contas e morrer.''",
    "''A vida é um ciclo interminável de desapontamento.''",
    "''O universo está conspirando contra você.''",
    "''Apenas abandone, porque você nunca vai conseguir.''",
    "''Por que fazer hoje o que você pode fazer amanhã ''",
];

  const [frase, setFrase] = useState("");
  const [quebrado, setQuebrado] = useState(false);

  const quebrarBiscoito = () => {
    if (!quebrado) {
      const randomIndex = Math.floor(Math.random() * frases.length);
      setFrase(frases[randomIndex]);
      setQuebrado(true);
    }
  };

  const reiniciarBiscoito = () => {
    setFrase("");
    setQuebrado(false);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={quebrado ? require("./assets/biscoito-aberto.png") : require("./assets/biscoito-fechado.png")}
      />
      {frase ? (
        <Text style={styles.textofrases}>{frase}</Text>
      ) : null}
      <TouchableOpacity
        onPress={quebrarBiscoito}
        style={[styles.botao, { backgroundColor: quebrado ? "gray" : "#f17ea1" }]}
        disabled={quebrado}
      >
        <Text style={{ color: "white" }}>
          {quebrado ? "Biscoito quebrado!" : "Quebrar o Biscoito"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={reiniciarBiscoito}
        style={[styles.botao, { backgroundColor: quebrado ? "#f17ea1" : "gray" }]}
        disabled={!quebrado}
      >
        <Text style={{ color: "white" }}>
          {quebrado ? "Reiniciar o Biscoito" : "Biscoito não quebrado"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
  },

  textofrases: {
    fontSize: 20,
    fontStyle: "italic",
    color: "#b81466",
    alignItems: "center",
  },

  img: {
    marginTop: 100,
  },

  botao: {
    marginTop: 50,
    padding: 10,
    borderRadius: 20,
    width: 200, 
    alignItems: "center",
  },
});

export default App;
