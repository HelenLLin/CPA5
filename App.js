import React, {useState, useEffect, createContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Text, View, StyleSheet, TextInput, Button, TouchableOpacity, Image  } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Main from './CPA5/Main.js'
import List from './CPA5/List.js'
import About from './CPA5/About.js'
import History from './CPA5/History.js'

const Stack = createNativeStackNavigator();

export default function App() {
  return(
      <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name='Main' component={Main} />
                <Stack.Screen name='Lists' component={List} />
                <Stack.Screen name='About' component={About} />
                <Stack.Screen name='History' component={History} />
            </Stack.Navigator>
        </NavigationContainer>
  );
}
