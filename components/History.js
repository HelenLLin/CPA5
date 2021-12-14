import React, { useState } from 'react';
import {View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function History({Navigation, route}) {
    const{toDoList} = route.params;

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

    return(
        <View style={styles.container}>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style = {styles.title}>
                    history
                </Text>
                <SafeAreaView style={styles.flatlist}>
                    <FlatList
                        data={toDoList}
                        renderItem={renderToDoList}
                        keyExtractor={item => item.toDo}
                    />
                </SafeAreaView>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECC9C7'
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'Playfair Display',
    textAlign: 'center',
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

export default History;
