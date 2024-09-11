import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "expo-router";
import { RootParamList } from "../FoodApp";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";

const Menu = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootParamList>>()
  return (
    <View className="mb-9">
      <Text className="mb-3 font-semibold text-2xl">Navigation</Text>
      <TouchableOpacity onPress={()=>{
        navigation.navigate('Explore')
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
