import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/navigation/StackNav";

interface IRegisterProp {
  navigation:StackNavigationProp<RootStackParamList,'Register'>
}

const Register = ({navigation}:IRegisterProp) => {
  const handlerPress = ()=>{
      navigation.navigate('VerificationCode')
  }
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Register Screen</Text>
      <TouchableOpacity onPress={handlerPress}>
        <Text>Goto Verification</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;


