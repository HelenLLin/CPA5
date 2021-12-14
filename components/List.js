import React, { useState, createContext, useContext, useEffect } from 'react';
import {View, SafeAreaView, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function List({navigation, route}) {
    const[toDo, setToDo] = useState('')
    const[dueDate, setDueDate] = useState('')
    const[completed, setCompleted] = useState(false)
    const[toDoList, setToDoList] = useState([]);

    useEffect(() => {getToDo()}, [])

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

    const getToDo = async() => {
        try {
            const jsonValue = await AsyncStorage.getItem('@toDoList')
            let data = null
            if(jsonValue != null) {
                data = JSON.parse(jsonValue)
                setToDoList(data)
            } else {
                setToDoList([])
                setToDo('')
                setDueDate('')
                setCompleted('')
            }
        } catch(e) {
            console.log('cound not get data')
            console.dir(e)
    }}

    const renderToDoList = ({item}) => {
        return(
            <View style={styles.flatlistItem}>
                <TouchableOpacity style = {{}}
                    onPress={() => {}}>
                    <Text style={{fontSize:20, }}>{item.toDo} </Text>
                    <Text style={{fontSize:20, }}>Complete By: {item.dueDate}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    const clearData = async() => {
        try {
            await AsyncStorage.clear()
        } catch(e) {
            console.log('could not clear data')
            console.dir(e)
        }
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
      <SafeAreaView style={styles.flatlist}>
          <FlatList
              data={toDoList}
              renderItem={renderToDoList}
              keyExtractor={item => item.toDo}
          />
      </SafeAreaView>
      <View style={styles.botRowButtons}>
      <SafeAreaView style={styles.button}>
        <Button
          title = 'history'
          color = 'black'
          onPress = {() => navigation.navigate('History', {data: toDoList})}
        />
      </SafeAreaView>
      <SafeAreaView style={styles.button}>
          <Button
            title = 'clear list'
            color = 'black'
            onPress = {() => {
                clearData()
                setToDoList([])}}
          />
      </SafeAreaView>
      <SafeAreaView style={styles.button}>
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
  button: {
    width: '20%',
    margin: 10,
  },
  botRowButtons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  flatlist: {
    flex: 15,
    alignItems: 'left',
    justifyContent: 'flex-start',
  },
  flatlistItem: {
    flexDirection: 'column',
    backgroundColor: '#c7eaec',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
})

export default List;
