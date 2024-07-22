import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
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
     
      <View  className="flex-1 items-center justify-center">
        <Text>Splash Screen</Text>
        <TouchableOpacity>
          <Text onPress={handlerPress}>Goto Register Screen</Text>
        </TouchableOpacity>
      </View>
  
  );
};

export default SplashScreen;


