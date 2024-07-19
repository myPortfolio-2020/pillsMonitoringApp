import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import index from '@/app/index';
import SignIn from '@/(auth)/SignIn';
import Register from '@/(auth)/Register';
import VerificationCode from '@/(auth)/VerificationCode';
import SplashScreen from '@/screens/SplashScreen';

export type RootStackParamList = {
  // index:undefined,
  SignIn: undefined,
  Register: undefined,
  VerificationCode: undefined,
  SplashScreen: undefined
}
const Stack = createStackNavigator<RootStackParamList>();

const StackNav = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
       {/* <Stack.Screen name='index' children={index} options={{headerShown:false}}/>  */}
       <Stack.Screen name='SplashScreen' component={SplashScreen} />     
       <Stack.Screen name='Register' component={Register} />
       <Stack.Screen name='SignIn' component={SignIn} />
       <Stack.Screen name='VerificationCode' component={VerificationCode} />
    </Stack.Navigator>
  )
}

export default StackNav