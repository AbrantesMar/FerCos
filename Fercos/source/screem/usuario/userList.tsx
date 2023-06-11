import React, { useState } from 'react';
import { Alert, View, FlatList, Text, StyleSheet, Button, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import UserViewModel from './viewModel/userViewModel';


export default function UserList() {
  const [users, setUsers] = useState([]);
  const [selectedId, setSelectedId] = useState<string>();
  
  const viewModel = new UserViewModel();
  const fetchUsers = async () => {
    if (viewModel.state != null) {
      await viewModel.fetchUser();
      setUsers(viewModel.state);
    }
  };

  const alertId = async () => {
    Alert.alert('Error', 'Error tentar alterar usuário: ' + selectedId, [
        {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  }

  return(
    <SafeAreaView>
      <Button title="Inserir Usuário" onPress={fetchUsers} />
      <Button title="Inserir Usuário" onPress={alertId} />
      <Text style={styles.title}>Lista de Usuários</Text>
      {!users && <Text>Loading</Text>}
      {users && (
        <FlatList
          data={users}
          keyExtractor={(item) => item.id.toString()}
          extraData={selectedId}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => setSelectedId(item.id)}>
              <View style={styles.userContainer}>
                <Text style={styles.userName}>{item.name}</Text>
                <Text style={styles.userDetails}>Login: {item.birthDate}</Text>
                <Text style={styles.userDetails}>E-mail: {item.changeDate}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: StatusBar.currentHeight || 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 16,
  },
  userContainer: {
    marginBottom: 16,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  userDetails: {
    fontSize: 16,
  },
});