import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function About() {
  return(
    <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ECC9C7', }}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', }}>
        <Text style = {{fontSize: 40, fontFamily: 'Playfair Display', fontWeight:'bold', textAlign: 'center', }}>
            About
        </Text>
        <Text style = {{fontSize: 20, fontFamily: 'Playfair Display', textAlign: 'center', }}>
            This app helps you organize the tasks you have to complete.
            {"\n"}
            You can enter tasks that you need to complete as well as the date you have to complete it by.
            {"\n"}
            The item will be added to a list.
            {"\n"}
            You can clear the list at any point.
            {"\n"}
            {"\n"}
        </Text>
        <Text style = {{fontSize: 40, fontFamily: 'Playfair Display', fontWeight:'bold', textAlign: 'center', }}>
            Dev Notes
        </Text>
        <Text style = {{fontSize: 20, fontFamily: 'Playfair Display', textAlign: 'center', }}>
            Features In Development:
            {"\n"}
            • Deletion of single items from list
            {"\n"}
            • Dedicated log-in page that stores your to-do list with a login
            {"\n"}
            • Expanding to-do list elements for further details
        </Text>
      </View>
    </View>
  );
}

export default About;
