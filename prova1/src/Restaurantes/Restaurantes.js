import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Card, Avatar, List, Divider } from 'react-native-paper';
import Api from '../services/Api';

export default function Restaurantes({ navigation }) {
  const [restaurantes, setRestaurantes] = useState([]);

  useEffect(() => {
    Api.get('restaurantes/')
      .then((response) => {
        setRestaurantes(response.data);
      })
      .catch((error) => {
        console.error('Erro ao buscar restaurantes', error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={restaurantes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
  onPress={() => navigation.navigate('RestauranteDetalhes', { restaurante: item })}
  style={[styles.card, { borderColor: 'black', borderWidth: 3 }]}
>
            <Card.Title
              title={item.nome}
              left={() => <Avatar.Image size={55} source={{ uri: item.imagem }} />}
              right={() => <List.Icon icon="chevron-right" style={{ marginTop: 60 }} />}
            />
            <Card.Content>
              <List.Item title={`${item.tipo_cozinha}`} />
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    marginBottom: 10,
    
  },
});
