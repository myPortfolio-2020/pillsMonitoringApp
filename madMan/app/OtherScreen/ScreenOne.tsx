import { View, Text } from "react-native";
import React from "react";
import Menu from "./Menu";

const ScreenOne = () => {
  return (
    <View>
      <Text>ScreenOne</Text>
      <Text>This is Screen One</Text>
      <View className="mt-10">
        <Menu />
      </View>
    </View>
  );
};

export default ScreenOne;
