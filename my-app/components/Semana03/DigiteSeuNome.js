import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

export default function DigiteSeuNome() {

    const [nome, setNome] = useState('')
    const [valorDigitado, setValorDigitado] = useState('')


    return (
        <View>
            <Text style={styles.texto}>Digite seu Nome</Text>
            <Text style={styles.texto}>{nome}</Text>
            <TextInput 
                style={styles.input}
                onChangeText={e => setValorDigitado(e)}
                placeholder='Digite seu nome'
                placeholderTextColor="white"
            
            />  

            <Button 
                title='Enviar'
                onPress={()=> setNome(valorDigitado)}

            />

        </View>
    )
}

const styles = StyleSheet.create({
    texto: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: 'bold',
    },
    input:{
        fontSize: 20,
        color: 'red',
        borderWidth: 1,
        borderColor: '#fff',
        margin: 10
    }
})