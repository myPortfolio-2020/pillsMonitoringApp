import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/StackNavigation";

interface SignupProp {
  navigation: NativeStackNavigationProp<RootStackParamList, "Signup">;
}

const Signup = ({ navigation }: SignupProp) => {
  const handlerPress = () => {
    navigation.navigate("VerificationCode");
  };
  return (
    <View className="flex-1 justify-center"> 
    <View className="justify-center">
      <View className="items-end">
        <Text>Already a Member? Sign In</Text>
      </View>

      <TouchableOpacity onPress={handlerPress}>
        <Text>Verification Code</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

export default Signup;
