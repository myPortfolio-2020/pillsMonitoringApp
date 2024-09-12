import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "./Feed";
import Message from "./Message";
const Tab = createBottomTabNavigator();
const HomeSolve = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Message" component={Message} />
    </Tab.Navigator>
  );
};

export default HomeSolve;
