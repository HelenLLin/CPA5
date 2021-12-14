import React, { useState, createContext, useContext } from 'react';
import {View, SafeAreaView, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function List({navigation, route}) {
    const[toDo, setToDo] = useState('')
    const[dueDate, setDueDate] = useState('')
    const[completed, setCompleted] = useState(false)
    const[toDoList, setToDoList] = useState([]);

    const addToDo = async(value) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('@toDoList', jsonValue)
            console.log('stored')
        } catch(e) {
            console.log('cound not store')
            console.dir(e)
        }
    }

    const renderToDoList = ({item}) => {
        return(
            <View style={{flexDirection: 'column', backgroundColor: '#c7eaec', padding: 20, marginVertical: 8, marginHorizontal: 16, }}>
                <TouchableOpacity style = {{}}
                    onPress={() => {}}>
                    <Text style={{fontSize:20, }}>{item.toDo} </Text>
                    <Text style={{fontSize:20, }}>Complete By: {item.dueDate}</Text>
                </TouchableOpacity>
            </View>
        )
    }

  return (
    <View style={styles.container}>
      <View style={{flex: 4, alignItems: 'center', justifyContent: 'center'}}>
        <Text style = {styles.ToDoTitle}>
          {route.params.name}'s to-do list
        </Text>
        <TextInput
          style = {{fontSize: 24, color: 'black', borderWidth: 2, borderColor: 'black', textAlign: 'center', marginBottom: 10, }}
          value = {toDo}
          placeholder='to-do'
          onChangeText={text => {
              setToDo(text);
          }}
        />
        <TextInput
          style = {{fontSize: 24, color: 'black', borderWidth: 2, borderColor: 'black', textAlign: 'center', }}
          value = {dueDate}
          placeholder='due date'
          onChangeText={text => {
              setDueDate(text);
          }}
        />
        <View style={{flexDirection: 'row', margin: 10, backgroundColor: 'black', alignItems: 'center', justifyContent: 'space-around',}}>
          <Button
            title = 'add to to-do'
            color = 'black'
            onPress = {() => {
                const newToDo =
                    toDoList.concat({
                        'toDo': toDo,
                        'dueDate': dueDate,
                        'completed': false
                    })
                setToDoList(newToDo)
                addToDo(newToDo)
                setToDo('')
                setDueDate('')
                setCompleted(false);
            }}
          />
        </View>
      </View>
      <SafeAreaView style={{flex: 15, alignItems: 'left', justifyContent: 'flex-start', }}>
          <FlatList
              data={toDoList}
              renderItem={renderToDoList}
              keyExtractor={item => item.toDo}
          />
      </SafeAreaView>
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', }}>

      <SafeAreaView style={{width: '20%', margin: 10, }}>
        <Button
          title = 'history'
          color = 'black'
          onPress = {() => navigation.navigate('History')}
        />
      </SafeAreaView>
      <SafeAreaView style={{width: '20%', margin: 10, }}>
          <Button
            title = 'clear list'
            color = 'black'
            onPress = {() => setToDoList([])}
          />
      </SafeAreaView>
      <SafeAreaView style={{width: '20%', margin: 10, }}>
          <Button
            title = 'about'
            color = 'black'
            onPress = {() => navigation.navigate('About')}
          />
      </SafeAreaView>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECC9C7'
  },
  ToDoTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'Playfair Display',
    textAlign: 'center',
  },
});

export default List;
