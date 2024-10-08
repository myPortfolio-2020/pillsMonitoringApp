import { View, Text } from "react-native";
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Pone from "./Pone";
import Ptwo from "./Ptwo";
import Pthree from "./Pthree";

const Stack = createNativeStackNavigator();

const Pnav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Pone" component={Pone} />
      <Stack.Screen name="Ptwo" component={Ptwo} />
      <Stack.Screen name="Pthree" component={Pthree} />
    </Stack.Navigator>
  );
};

export default Pnav;
