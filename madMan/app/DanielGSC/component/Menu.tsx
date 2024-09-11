import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Menu = () => {
  return (
    <View className="mb-9">
      <Text className="mb-3 font-semibold text-2xl">Navigation</Text>
      <TouchableOpacity onPress={()=>{
        // goto 
      }}>
        <Text className="text-lg pt-2">Explore</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{
        // goto 
      }}>
        <Text className="text-lg pt-2">Resturant</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{
        // goto 
      }}>
       <Text className="text-lg pt-2">Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Menu;
