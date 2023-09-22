import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

let timer = null;
let ss = 0;
let mm = 0;
let hh = 0;

export default function Cronometro() {
    const [display, setDisplay] = useState('00:00:00');
    const [botaoTexto, setBotaoTexto] = useState('Iniciar');
    const [ultimoTempo, setUltimoTempo] = useState(null);
    const [temposSalvos, setTemposSalvos] = useState([]);

    function start() {
        if (timer !== null) {
            clearInterval(timer);
            timer = null;
            setBotaoTexto('Iniciar');
        } else {
            timer = setInterval(() => {
                ss++;

                if (ss === 60) {
                    ss = 0;
                    mm++;
                }
                if (mm === 60) {
                    mm = 0;
                    hh++;
                }

                let format = (hh < 10 ? '0' : '') + hh
                    + ':' + (mm < 10 ? '0' : '') + mm
                    + ':' + (ss < 10 ? '0' : '') + ss;

                setDisplay(format);
            }, 100);
            setBotaoTexto('Parar');
        }
    }

    function clear() {
        if (timer !== null) {
            clearInterval(timer);
            timer = null;
        }

        ss = 0;
        mm = 0;
        hh = 0;

        const tempoAtual = display;
        setUltimoTempo(tempoAtual);

        setTemposSalvos([...temposSalvos, tempoAtual]);

        setDisplay('00:00:00');
        setBotaoTexto('Iniciar');
    }

    function limparHistorico() {
        setTemposSalvos([]);
    }

    return (
        <View>
            <Image source={require("../../assets/crono.png")} />
            <View style={styles.display}>
                <Text style={styles.displayText}>{display}</Text>
            </View>

            <View style={styles.areabotao}>
                <TouchableOpacity style={[styles.botao, styles.botaoIniciar]} onPress={start}>
                    <Icon name="play" size={24} color="white" />
                </TouchableOpacity>

                <TouchableOpacity style={[styles.botao, styles.botaoReiniciar]} onPress={clear}>
                    <Icon name="refresh" size={24} color="white" />
                </TouchableOpacity>

                <TouchableOpacity style={[styles.botao, styles.botaoLimpar]} onPress={limparHistorico}>
                    <Icon name="trash" size={24} color="white" />
                </TouchableOpacity>
            </View>

            <View style={styles.historico}>
                <Text style={styles.historico}>Histórico:</Text>
                {temposSalvos.map((tempo, index) => (
                    <Text key={index} style={[styles.historico, styles.historicoItem]}>{`Tempo ${index + 1}: ${tempo}`}</Text>
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    display: {
        alignItems: 'center',
        marginBottom: 10,
        position: 'relative',
        marginTop: -150, 
    },
    displayText: {
        fontSize: 30,
        textAlign: 'center',
        
    },
    botao: {
        borderRadius: 50,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    botaoIniciar: {
        backgroundColor: 'pink',
    },
    botaoReiniciar: {
        backgroundColor: '#ff1493',
    },
    botaoLimpar: {
        backgroundColor: '#570930',
    },

    areabotao: {
    flexDirection: 'row',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 120,
    height: 70,

    },

    ultimoTempoTexto: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 10,
    },
    historico: {
        fontSize: 25,
        marginTop: 2,
        paddingHorizontal: 25,
        textAlign:'center',
        color:'white',
    },
    historicoItem: {
        fontSize: 20,
        marginBottom: 5,
    },
});
