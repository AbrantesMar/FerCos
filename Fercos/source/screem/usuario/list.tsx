import React from "react";
import { View, Text } from 'react-native';

export default function List() {
    return(
        <View>
            <Header />
            <Text>Listar usuarios</Text>
            <Footer />
        </View>
    );
}