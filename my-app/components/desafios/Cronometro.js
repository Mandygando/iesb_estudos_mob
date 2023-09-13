import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

let timer = null;
let ss = 0;
let mm = 0;
let hh = 0;
export default function Cronometro() {
    const [display, setDisplay] = useState('00:00:00')
    const [botaoTexto, setBotaoTexto] = useState('Iniciar')
    const [ultimoTempo, setUltimoTempo] = useState(null)

    function start() {
        if (timer !== null) {
            clearInterval(timer);
            timer = null;
            setBotaoTexto('Iniciar')
        } else {
            timer = setInterval(() =>{
                ss++;
                
                if (ss == 60) {
                    ss = 0;
                    mm++;

                }
                if (nn == 60) {
                    mm = 0;
                    hh++;

                }

                let format = (hh < 10 ? '0' : '') + hh
                    + ':' + (mm < 10 ? '0' : '') + mm
                    + ':' + (ss < 10 ? '0' : '') + ss;

                    setDisplay(format)
            }, 100)
            setBotaoTexto('Parar')
        }
    }

    function clear() {
        if (timer !== null) {
            clearInterval(timer);
            timer = null;
        }

        ss = 0;
        nn = 0;
        hh = 0;

        setUltimoTempo(display)
        setDisplay('00:00:00')
        setBotaoTexto('Iniciar')
    }

  return (
    <View>
        <Image
        source={{ uri: ''}}
        style={style.img}/>

      <View style={style.display}>
        <Text style={styles.displayText}>{display}</Text>
      </View>

      <View>
        <TouchableOpacity style={styles.botao}
        onPress={start}>
            <Text style={styles.botaoTexto}>{botaoTexto}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao}
        onPress={clear}>
            <Text style={styles.botaoTexto}>Reiniciar</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.ultimoTempoArea}>
        <Text style={styles.ultimoTempoArea}>{ultimoTempo ? `Último tempo: ${ultimoTempo}` : ''}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    // Defina seus estilos aqui
    img: {
        // Estilos para a imagem
    },
    display: {
        // Estilos para a área de exibição do cronômetro
    },
    displayText: {
        // Estilos para o texto do cronômetro
    },
    botao: {
        // Estilos para os botões
    },
    botaoTexto: {
        // Estilos para o texto dos botões
    },
    ultimoTempoArea: {
        // Estilos para a área do "Último tempo"
    },
    ultimoTempoTexto: {
        // Estilos para o texto do "Último tempo"
    },
})