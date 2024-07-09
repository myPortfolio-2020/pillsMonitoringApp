import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const StackNav = () => {
   
  return (
    <Stack.Navigator>
         <Stack.Screen name="index" component={index}/>
    </Stack.Navigator>
  )
}

export default StackNav