import * as React from 'react';
import {View, SafeAreaView, Text, TextInput, Button, FlatList, StyleSheet, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function ListScreen({navigation, route}) {
  return (
    <View style={styles.container}>
      <View style={{flex: 4, alignItems: 'center', justifyContent: 'center'}}>
        <Text style = {styles.ToDoTitle}>
          {route.params.name}'s to-do list
        </Text>
        <TextInput
          style = {{fontSize: 24, color: 'black', borderWidth: 2, borderColor: 'black', textAlign: 'center', }}
          placeholder=''
        />
        <View style={{width: '50%', margin: 10, backgroundColor: 'black', }}>
          <Button
            title = 'add to to-do'
            color = 'black'
            onPress = {''}
          />
        </View>
      </View>
      <View style={{flex: 16, }}>
      </View>
      <View style={{flex: 1, }}>

        <View style={styles.button}>
          <Button
            title = 'about'
            color = 'black'
            onPress = {() => navigation.navigate('About')}
          />
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ECC9C7'
  },
  ToDoTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'Playfair Display',
    textAlign: 'center',
  },
  button: {
    width: '100%',
    height: '50%',
    margin: 10,
  },
});

export default ListScreen;
