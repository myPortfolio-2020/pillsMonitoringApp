import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '@/app/(auth)/SignIn';
import Register from '@/app/(auth)/Register';
import VerificationCode from '@/app/(auth)/VerificationCode';
import SplashScreen from '@/app/screens/SplashScreen';
import UserHome from '@/app/screens/UserHome';
import Home from '@/app/screens/Home';
import CreateNewPatient from '@/app/screens/patients/CreateNewPatient';
import PatientsStack from './PatientsStack';
import DrawerNavigation from './DrawerNavigation';

export type RootStackParamList = {
  // index:undefined,
  SignIn: undefined,
  Register: undefined,
  VerificationCode: undefined,
  SplashScreen: undefined, 
  Home:undefined,
}
const Stack = createStackNavigator<RootStackParamList>();

const StackNav = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
       {/* <Stack.Screen name='index' children={index} options={{headerShown:false}}/>  */}
       <Stack.Screen name='SplashScreen' component={SplashScreen} />     
       <Stack.Screen name='Register' component={Register} />
       <Stack.Screen name='VerificationCode' component={VerificationCode} />
       <Stack.Screen name='SignIn' component={SignIn} />      
       <Stack.Screen name='Home' component={Home} />   
    </Stack.Navigator>
  )
}

export default StackNav