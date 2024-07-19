import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/navigation/StackNav";

interface ISplashProp {
  navigation: StackNavigationProp<RootStackParamList, "SplashScreen">;
}

const SplashScreen = ({ navigation }: ISplashProp) => {
  const handlerPress = () => {
    navigation.navigate("Register");
  };
  return (
    <View className="flex justify-center items-center">
      <View>
        <Text>SplashScreen!</Text>
        <TouchableOpacity onPress={handlerPress}>
          <Text>Go To Gegister First</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SplashScreen;
