import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { Avatar, Card, List } from 'react-native-paper';
import Api from '../../services/Api';

export default function Home({ navigation }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    Api.get('/users')
      .then(response => {
        setUsers(response.data.users);
      })
      .catch(err => {
        console.log('Erro ao carregar a lista de usuários: ', err);
      })
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
          onPress={() => {
            navigation.navigate('UserPosts', { userId: item.id });
          }}
          >
            <Card style={styles.card}>
              <Card.Content>
              <Avatar.Image 
                  size={70} 
                  source={{ uri: item.image }} 
                  style={styles.avatar} 
                />
                <Text>{`${item.firstName} ${item.lastName}`}</Text>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  card: {
    marginVertical: 8,
  },
});