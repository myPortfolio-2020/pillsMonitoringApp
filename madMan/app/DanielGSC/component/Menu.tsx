import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "expo-router";

const Menu = () => {
    const navigation = useNavigation()
  return (
    <View className="mb-9">
      <Text className="mb-3 font-semibold text-2xl">Navigation</Text>
      <TouchableOpacity onPress={()=>{
        navigation.push('Explore')
      }}>
        <Text className="text-lg pt-2">Explore</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{
        navigation.navigate('Resturants')
      }}>
        <Text className="text-lg pt-2">Resturant</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{
        navigation.navigate('Profile')
      }}>
       <Text className="text-lg pt-2">Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Menu;
