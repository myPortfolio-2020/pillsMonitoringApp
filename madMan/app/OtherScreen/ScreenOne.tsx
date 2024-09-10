import { View, Text } from "react-native";
import React from "react";
import Menu from "./Menu";

const ScreenOne = () => {
  return (
    <View style={{backgroundColor:'#33bbcc',opacity:1, width:'100%', height:200}}>
      <Text>ScreenOne</Text>
      <Text>This is Screen One</Text>
      
      <View className="mt-10">
        <Menu />
      </View>
    </View>
  );
};

export default ScreenOne;
