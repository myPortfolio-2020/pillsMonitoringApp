import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeSolve from './HomeSolve';
import Profile from './Profile';
import Settings from './Settings';

const Stack = createNativeStackNavigator();

const SolveApp = () => {
  return (
    <Stack.Navigator>
          <Stack.Screen
          name="HomeSolve"
          component={HomeSolve}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  )
}

export default SolveApp