import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function NumeroAleatorio() {
    const min = 0;
    const max = 100;
    const [numeroAleatorio, setNumeroAleatorio] = useState(null);

    const gerarNumeroAleatorio = () => {
        const novoNumeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
        setNumeroAleatorio(novoNumeroAleatorio);
    };

    return (
        <View style={styles.container}>
            <Button title="Gerar Número Aleatório" onPress={gerarNumeroAleatorio} />
            {numeroAleatorio !== null && (
                <Text style={styles.numero}>
                    Número aleatório entre {min} e {max}: {numeroAleatorio}
                </Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginTop: 20,
    },
    numero: {
        fontSize: 18,
        marginTop: 10,
    },
});
