import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PreHome from "./PreHome";
import FirstTimeAfterLogin from "../components/FirstTimeAfterLogin";
import CreateNewPatient from "../components/CreateNewPatient";

const Stack = createNativeStackNavigator();

export type RootInnerStackParamList = {
  FirstTimeAfterLogin: undefined;
  CreateNewPatient: undefined;
  PreHome: undefined;
};

const DrugsLogin = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PreHome" component={PreHome} />
      <Stack.Screen name="FirstTimeAfterLogin" component={FirstTimeAfterLogin} />
      <Stack.Screen name="CreateNewPatient" component={CreateNewPatient} />
    </Stack.Navigator>
  );
};

export default DrugsLogin;
