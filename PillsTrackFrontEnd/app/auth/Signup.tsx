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
    <View className="flex-1">
      <View className="justify-end">
        <Text>Signup</Text>
      </View>

      <TouchableOpacity onPress={handlerPress}>
        <Text>Verification Code</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signup;
