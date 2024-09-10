import { View, Text } from "react-native";
import React from "react";
import AppNavigator from "./AppNavigator";
import { NavigationContainer } from "@react-navigation/native";

const _layout = () => {
  return <NavigationContainer independent={true}>
    <AppNavigator />
  </NavigationContainer>;
};

export default _layout;
