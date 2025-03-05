import { View, Text } from "react-native";
import React from "react";
import ScreenB from "./ScreenB";

const ScreenA = () => {
  return (
    <View>
      <Text>ScreenA</Text>
      <ScreenB/>
    </View>
  );
};

export default ScreenA;
