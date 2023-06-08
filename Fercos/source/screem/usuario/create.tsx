import React from "react";
import { View, Text } from 'react-native';
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

export default function Create() {
    return(
        <View>
            <Header />
            <Text>Criar/Atualizar usuarios</Text>
            <Footer />
        </View>
    );
}