import React from "react";
import { View, Text } from 'react-native';
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

export default function Login() {
    return(
        <View
            style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Header />
            <Text>Login</Text>
            <Text>Essa tela irá conter o longin da aplicação.</Text>
            <Footer />
        </View>
    )
}