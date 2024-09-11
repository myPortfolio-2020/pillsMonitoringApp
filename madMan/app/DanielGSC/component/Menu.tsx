import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Menu = () => {
  return (
    <View>
      <Text className="mb-2 font-semibold text-2xl">Navigation</Text>
      <TouchableOpacity onPress={()=>{
        // goto 
      }}>
        <Text className="text-lg">Explore</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{
        // goto 
      }}>
        <Text className="text-lg">Resturant</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{
        // goto 
      }}>
       <Text className="text-lg">Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Menu;
