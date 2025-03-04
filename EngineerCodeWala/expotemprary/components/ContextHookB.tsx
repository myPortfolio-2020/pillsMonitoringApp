import { View, Text } from "react-native";
import React from "react";
import ContextHookC from "./ContextHookC";

const ContextHookB = () => {
  return (
    <View>
         <Text>B</Text>
      <ContextHookC />
    </View>
  );
};

export default ContextHookB;
