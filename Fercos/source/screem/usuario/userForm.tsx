import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import UserViewModel from './viewModel/userViewModel';

export default function UserForm() {
    const [name, setName] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [cpf, setCpf] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [motherName, setMotherName] = useState('');

    const userViewModel = new UserViewModel();
  
    const handleInsertUser = async () => {
      const user = {
        name,
        login,
        password,
        email,
        phone,
        cpf,
        birthDate,
        motherName
      };
      console.log(user);
      await userViewModel.insertUser(user);
    };
    return(
        <View>
            <TextInput
                placeholder="Nome"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                placeholder="Login"
                value={login}
                onChangeText={setLogin}
            />
            <TextInput
                placeholder="password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />
            <TextInput
                placeholder="E-mail"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <TextInput
                placeholder="phone"
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
            />
            <TextInput
                placeholder="CPF"
                value={cpf}
                onChangeText={setCpf}
                keyboardType="numeric"
            />
            <TextInput
                placeholder="Data de Nascimento"
                value={birthDate}
                onChangeText={setBirthDate}
                keyboardType="numeric"
            />
            <TextInput
                placeholder="Nome da Mãe"
                value={motherName}
                onChangeText={setMotherName}
            />

            <Button title="Inserir Usuário" onPress={handleInsertUser} />
        </View>
    );
}