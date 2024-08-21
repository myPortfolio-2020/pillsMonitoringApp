import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from "./navigation/StackNavigation";


const _layout = () => {
  return <>
  <NavigationContainer independent={true}>
    <StackNavigation/>
  </NavigationContainer>
  </>;
};

export default _layout;
