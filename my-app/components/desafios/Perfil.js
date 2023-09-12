import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Perfil() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.imagem}
                source={require('../../assets/img_perfil.jpg')}
            />
            <View>
                <Text style={styles.texto}>Este é o perfil de Amanda!</Text>
            </View>

            <View style={styles.labelContainer}>
                <Text style={[styles.textoLabel]}>Gênero:</Text>
                <Text style={styles.texto}>Feminino</Text>
            </View>

            <View style={styles.labelContainer}>
                <Text style={[styles.textoLabel]}>Nome:</Text>
                <Text style={styles.texto}>Amanda Vitoria</Text>
            </View>

            <View style={styles.labelContainer}>
                <Text style={[styles.textoLabel]}>Telefone:</Text>
                <Text style={styles.texto}>(61) 98299-9271</Text>
            </View>

            <View style={styles.labelContainer}>
                <Text style={[styles.textoLabel]}>E-mail:</Text>
                <Text style={styles.texto}>amanda.v.ferreira@email.com</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink', 
        alignItems:'center',
        width: '100%', // Ocupar toda a largura da tela
        padding: 20, // Adicionando espaço interno
        
    },

    labelContainer: {
        alignItems: 'center',
        width: '100%',
        padding: 20,
    },

    texto: {
        fontSize: 15,
        color: 'white',
    },

    textoLabel: {
        fontWeight: 'bold',
        textAlign: 'left',
    },

    imagem: {
        width: 250,
        height: 250,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 500,
        padding: 20,
        marginTop: 20,
    },
});
