import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function MinMaxCal() {
    const [min, setMin] = useState("");
    const [max, setMax] = useState("");
    const [maxValue, setMaxValue] = useState(null);

    const calculateMaxValue = () => {
        if (min !== "" && max !== "") {
            const newMaxValue = Math.max(parseFloat(min), parseFloat(max));
            setMaxValue(newMaxValue);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textinput}
                placeholder="Digite o valor mínimo"
                placeholderTextColor="white"
                keyboardType="numeric"
                value={min}
                onChangeText={text => setMin(text)}
            />
            <TextInput
                style={styles.textinput}
                placeholder="Digite o valor máximo"
                placeholderTextColor="white"
                keyboardType="numeric"
                value={max}
                onChangeText={text => setMax(text)}
            />
            <Button title="Calcular" onPress={calculateMaxValue} />
            {maxValue !== null && (
                <Text style={styles.resultado}>
                    O valor máximo entre {min} e {max} é: {maxValue}
                </Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    textinput: {
        width: 200,
        height: 40,
        borderWidth: 2,
        borderColor: "white",
        marginVertical: 10,
        paddingHorizontal: 10,
    },
    resultado: {
        marginTop: 20,
        fontSize: 16,
        fontWeight: "bold",
        color: "white"
    },

});
