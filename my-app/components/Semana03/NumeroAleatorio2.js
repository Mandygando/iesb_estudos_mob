import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function NumeroAleatorio2(props) {

    const {min, max} = props
    
    const delta = max - min
    const numeroAleatorio = Math.floor(Math.random() * delta) + min

  return (
    <View>
      <Text style={{fontSize: 20}}>O número aleatório é {numeroAleatorio}</Text>
    </View>
  )
}   

const styles = StyleSheet.create({})