import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const image={uri:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'};

function AboutScreen() {
  return(
    <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ECC9C7', }}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', }}>
        <Text style = {{fontSize: 20, fontFamily: 'Playfair Display', textAlign: 'center', }}>
          This app helps you organize your daily tasks.
          {"\n"}
          You can enter tasks that you need to complete and this app will add each task to a list.
          {"\n"}
          Once the task is completed, you can check it off to remove it from the list.
          {"\n"}
          This app keeps track of all the tasks you've completed to track productivity.
          {"\n"}
          {"\n"}
          Not all features of this app have been implemented yet.
        </Text>
      </View>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
        <Image
          style={{width: '100%',height: '100%'}}
          source={{
            uri: image
          }}
        />
      </View>
    </View>
  );
}

export default AboutScreen;
