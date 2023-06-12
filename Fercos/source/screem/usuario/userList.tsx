import React, { useState } from 'react';
import { Alert, View, FlatList, Text, StyleSheet, Button, StatusBar, TouchableOpacity, TextInput } from 'react-native';
import UserViewModel from './viewModel/userViewModel';
import ItemList from '../../components/ListUsers/ItemList';


export default function UserList() {
  const [users, setUsers] = useState([]);
  const [selectedId, setSelectedId] = useState<string>();
  const [search, filterParams ] = useState<string>();
  
  const viewModel = new UserViewModel();
  const fetchUsers = async () => {
    if (viewModel.state != null) {
      await viewModel.fetchUser();
      setUsers(viewModel.state);
    }
  };

  const alertId = async () => {
    if (selectedId === undefined) {
      viewModel.alert('Error', 'Não existe usuário selecionado');
      return
    }
    viewModel.alert('Usuário', 'Usuário selecionado tem o index de: ' + selectedId)
  };

  const filterData = async (name: string) => {
    if(name === "")
    {
      fetchUsers()
      return
    }
    setUsers(users.filter(user => user.name.includes(name)));
  };

  const deleteUsers = async () => {
    viewModel.deleteAllUser(users);
    setUsers([]);
    viewModel.alert('Usuário', 'Todos os usuários foram deletados');
  };

  const deleteUser = async (user: any) => {
    viewModel.deleteUser(user.email, user);
    setUsers([]);
    viewModel.alert('Usuário', 'O usuário foi deletado');
  };

  return(
    <View>
      <View style={styles.containerHorizontal}>
        <Button title="Inserir" onPress={fetchUsers} />
        <Button title="Selecionar" onPress={alertId} />
        <Button title="Deletar Todos" onPress={deleteUsers} />
      </View>
      
      <TextInput
          onChangeText={(name) => filterData(name)}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
        />
      <Text style={styles.title}>Lista de Usuários</Text>
      {!users && <Text>Loading</Text>}
      {users && (
        <FlatList
          data={users}
          keyExtractor={(item) => item._id.toString()}
          extraData={selectedId}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => setSelectedId(item._id)}>
              <ItemList user={item} onPress={() => deleteUser(item)}  />
            </TouchableOpacity>
          )}
        />
      )}
      
    </View>
  );
}

const styles = StyleSheet.create({
  containerHorizontal: {
    flex: 1,
    flexDirection: 'row'
  },
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