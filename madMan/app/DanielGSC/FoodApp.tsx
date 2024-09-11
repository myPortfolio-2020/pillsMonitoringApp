import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Explore from "./screens/Explore";
import Resturants from "./screens/Resturants";
import Profile from "./screens/Profile";

const Stack = createNativeStackNavigator();
const FoodApp = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Explore" component={Explore} />
      <Stack.Screen name="Resturants" component={Resturants} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default FoodApp;
