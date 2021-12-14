import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Main({navigation}) {
  const [name, setName] = useState('')
  return (
    <View style = {{flex: 1, flexDirection: 'column', backgroundColor: '#ECC9C7', }}>
      <View style = {{flex: 1, backgroundColor: '#ECC9C7', }}>
      </View>
      <View style = {{flex: 1, alignItems: 'center', backgroundColor: '#ECC9C7', }}>
        <Text style = {{fontSize: 40, fontWeight: 'bold', fontFamily: 'Playfair Display',textAlign: 'center', }}>
          daily organizer
        </Text>
      </View>
      <View style = {{flex: 1, backgroundColor: '#ECC9C7', alignItems:'center', }}>
        <View style={{width: '65%', backgroundColor: '#F3DCD4', }}>
          <TextInput
          style = {{fontSize: 24, color: 'black', borderWidth: 2, borderColor: 'black', textAlign: 'center', }}
          placeholder='your name'
          onChangeText={text => {setName(text)}}
        />
        </View>
        <View style={{width: '50%', margin: 10, backgroundColor: 'black', }}>
          <Button
            title = 'continue'
            color = 'black'
            onPress = {() => navigation.navigate('Lists', {name: name})}
          />
        </View>
      </View>
      <View style = {{flex: 1, backgroundColor: '#ECC9C7',}}>

      </View>
    </View>
  );
}

export default Main;
