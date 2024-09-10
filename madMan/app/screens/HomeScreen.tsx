import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Patient from "./Patient";
import Track from "./Track";

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Track" component={Track} />
      <Tab.Screen name="Patient" component={Patient} />
    </Tab.Navigator>
  );
};

export default HomeScreen;
