import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Text, View, StyleSheet, TextInput, Button, TouchableOpacity, Image  } from 'react-native';

import MainScreen from './CPA1/MainScreen.js'
import ListScreen from './CPA1/ListScreen.js'
import AboutScreen from './CPA1/AboutScreen.js'

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Main' component={MainScreen} />
        <Stack.Screen name='Lists' component={ListScreen} />
        <Stack.Screen name='About' component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
