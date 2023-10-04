import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import Api from '../services/Api';

export default function DetalhesRestaurante({ route }) {
  const { restaurante } = route.params;
  const [pratos, setPratos] = useState([]);
  const [bebidas, setBebidas] = useState([]);

  useEffect(() => {
    Api.get(`https://my-json-server.typicode.com/gustavoclay/food/pratos?restaurante_id=${restaurante.id}`)
      .then((response) => {
        setPratos(response.data);
      })
      .catch((error) => {
        console.error('Erro ao buscar pratos', error);
      });
      
    Api.get(`https://my-json-server.typicode.com/gustavoclay/food/bebidas?restaurante_id=${restaurante.id}`)
      .then((response) => {
        setBebidas(response.data);
      })
      .catch((error) => {
        console.error('Erro ao buscar bebidas', error);
      });
  }, [restaurante]);

  return (
    <ScrollView>
    <View style={styles.container}>
      <Card style={styles.card}>
        <Text style={styles.titulo}>Restaurante</Text>
        <Text style={styles.nome}>{restaurante.nome}</Text>
        <Text style={styles.descricao}>{restaurante.descricao}</Text>
        <Image style={styles.imagem} source={{ uri: restaurante.imagem }} />
        <Text style={styles.info}>Nome: {restaurante.nome}</Text>
        <Text style={styles.info}>Tipo de Cozinha: {restaurante.tipo_cozinha}</Text>
        <Text style={styles.info}>Endereço: {restaurante.endereco}</Text>
        <Text style={styles.info}>Horário de Funcionamento: {restaurante.horario_funcionamento}</Text>
      </Card>

      <Card style={styles.card}>
        <Text style={styles.titulo}>Cardápio</Text>

        <View style={styles.cardapioSection}>
          <Text style={styles.cardapioTitulo}>Pratos</Text>
          <FlatList
            data={pratos}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <Card style={styles.cardapioItem}>
                <Text style={styles.cardapioItemNome}>{item.nome}</Text>
                <Text style={styles.cardapioItemPreco}>R$ {item.preco.toFixed(2)}</Text>
                <Text style={styles.cardapioItemDescricao}>{item.descricao}</Text>
              </Card>
            )}
          />
        </View>

        <View style={styles.cardapioSection}>
          <Text style={styles.cardapioTitulo}>Bebidas</Text>
          <FlatList
            data={bebidas}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <Card style={styles.cardapioItem}>
                <Text style={styles.cardapioItemNome}>{item.nome}</Text>
                <Text style={styles.cardapioItemPreco}>R$ {item.preco.toFixed(2)}</Text>
                <Text style={styles.cardapioItemDescricao}>{item.descricao}</Text>
              </Card>
            )}
          />
        </View>
      </Card>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  descricao: {
    color: '#666',
    marginBottom: 8,
  },
  info: {
    marginBottom: 10,
  },
  imagem: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  cardapioContainer: {
    marginTop: 16,
  },
  cardapioSection: {
    marginBottom: 16,
  },
  cardapioTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardapioItem: {
    marginBottom: 8,
  },
  cardapioItemNome: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardapioItemPreco: {
    fontSize: 14,
    color: '#666',
  },
  cardapioItemDescricao: {
    fontSize: 14,
  },
});