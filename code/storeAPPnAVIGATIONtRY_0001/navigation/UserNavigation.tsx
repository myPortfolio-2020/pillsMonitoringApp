import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import User from "../components/User";

import TabsNavigation from "./TabsNavigation";

const Stack = createNativeStackNavigator();

export type UserStackParmList = {
  User: undefined;
  TabsNavigation: undefined;
};

const UserNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="User" component={User} />
    </Stack.Navigator>
  );
};

export default UserNavigation;
