import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Menu = () => {
  return (
    <View>
      <Text className="mb-2 font-semibold text-2xl">Navigation</Text>
      <TouchableOpacity onPress={()=>{
        // goto 
      }}>
        <Text>Explore</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{
        // goto 
      }}>
        <Text>Resturant</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{
        // goto 
      }}>
        <Text>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Menu;
