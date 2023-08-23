import React from "react";
import { Text, StyleSheet } from "react-native";

export default function MinMax(props) {
    const { min, max } = props;

    const maxValue = Math.max(min, max);

    return (
        <Text style={styles.text}>
            O maior valor entre {min} e {max} é: {maxValue}
        </Text>
    );
}

const styles = StyleSheet.create({
    text: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
});