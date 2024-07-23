import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import UserScreen from '@/app/screens/UserScreen';
import CreateNewPatient from '@/app/screens/patients/CreateNewPatient';
import UserHome from '@/app/screens/UserHome';

export type TPatientStackParams = {
  UserScreen:undefined,
  CreateNewPatient:undefined,
  UserHome:undefined
}

const Stack = createStackNavigator<TPatientStackParams>();

const PatientsStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="UserHome" component={UserHome} />
      <Stack.Screen name="UserScreen" component={UserScreen} />
      <Stack.Screen name="CreateNewPatient" component={CreateNewPatient} />
    </Stack.Navigator>
  )
}

export default PatientsStack