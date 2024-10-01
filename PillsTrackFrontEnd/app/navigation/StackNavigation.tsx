import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../screens/Splash';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={Splash} />
    </Stack.Navigator>
  )
}

export default StackNavigation