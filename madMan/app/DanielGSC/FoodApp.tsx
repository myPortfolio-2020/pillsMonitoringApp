import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Explore from "./screens/Explore";
import Resturants from "./screens/Resturants";
import Profile from "./screens/Profile";
import Resturant from "./screens/Resturant";

export type RootParamList = {
    Explore:undefined;
    Profile:undefined;
    Resturants:undefined;
    Resturant:{
      name:string;
    }
}

const Stack = createNativeStackNavigator<RootParamList>();
const FoodApp = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Explore" component={Explore} />
      <Stack.Screen name="Resturants" component={Resturants} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Resturant" component={Resturant} />
    </Stack.Navigator>
  );
};

export default FoodApp;