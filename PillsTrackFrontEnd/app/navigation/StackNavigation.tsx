import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/SplashScreen";
import Signup from "../auth/Signup";
import SignIn from "../auth/SignIn";
import VerificationCode from "../auth/VerificationCode";

export type RootStackParamList = {
    SplashScreen: undefined,
    Signup: undefined,
    VerificationCode: undefined,
    SignIn: undefined,
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="VerificationCode" component={VerificationCode} />
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
