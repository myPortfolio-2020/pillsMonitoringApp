import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import UserScreen from '@/app/screens/UserScreen';

export type PatientStackParamList = {
  UserScreen:undefined
}
const Stack = createStackNavigator()
const PatientsStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='UserScreen' component={UserScreen}/>
    </Stack.Navigator>
  )
}

export default PatientsStack