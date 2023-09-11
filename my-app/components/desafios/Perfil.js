import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Perfil = ({ nome, idade, cidade, descricao, imagemPerfil }) => {
    return (
        <View style={styles.container}>
            <Image source={imagemPerfil} style={styles.imagemPerfil} />
            <Text style={styles.nome}>{nome}</Text>
            <Text style={styles.info}>
                {idade} anos - {cidade}
            </Text>
            <Text style={styles.descricao}>{descricao}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginVertical: 20,
    },
    imagemPerfil: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 10,
    },
    nome: {
        fontSize: 24,
        fontWeight: "bold",
    },
    info: {
        fontSize: 18,
        color: "gray",
    },
    descricao: {
        fontSize: 16,
        marginHorizontal: 20,
        textAlign: "center",
    },
});

export default Perfil;