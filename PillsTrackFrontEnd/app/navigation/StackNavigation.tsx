import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../screens/Splash';
import Signup from '../auth/Signup';
import VerificationCode from '../auth/VerificationCode';
import SignIn from '../auth/SignIn';

export type RootStackParamList = {
  Splash: undefined;
  Signup: undefined;
  VerificationCode: undefined;
  SignIn: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="VerificationCode" component={VerificationCode} />
      <Stack.Screen name="SignIn" component={SignIn} />

    </Stack.Navigator>
  )
}

export default StackNavigation