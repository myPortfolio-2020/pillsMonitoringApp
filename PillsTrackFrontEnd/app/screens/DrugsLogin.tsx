import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PreHome from "./PreHome";
import CreateNewPatient from "../components/CreateNewPatient";

const Stack = createNativeStackNavigator();

export type RootInnerStackParamList = {
  FirstTimeAfterLogin: undefined;
  CreateNewPatient: undefined;
  PreHome: undefined;
};
console.log('I am drugsLogin')
const DrugsLog = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PreHome" component={PreHome} />
      <Stack.Screen name="CreateNewPatient" component={CreateNewPatient} />
    </Stack.Navigator>
  );
};

export default DrugsLog;
