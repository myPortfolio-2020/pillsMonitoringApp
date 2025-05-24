import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "@/screens/Home";
import Info from "@/screens/Info";
import Support from "@/screens/Support";
import Contact from "@/drawer/screens/Contact";

export type RootStackParamList = {
  Home: undefined;
  Info: {
    nm: string;
    sal: number;
  };
  Support: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Info" component={Info} />
      <Stack.Screen name="Support" component={Support} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
