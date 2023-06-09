import React from "react";
import { NavigationContainer } from '@react-navigate/native';
import { createNativeStackNavigator } from '@react-navigation/stack';

const Tab = createNativeStackNavigator();

import Login from "./screem/home/login";
import Create from "./screem/usuario/userForm";
import List from "./screem/usuario/list";

export default function Routes() {
    return (
        <NavigationContainer>
            <Tab.Navigation>
                <Tab.Screen name="Login" component={Login} />
                <Tab.Screen name="Create" component={Create} />
                <Tab.Screen name="List" component={List} />
            </Tab.Navigation>
        </NavigationContainer>
    );
}