import { View, Text, Button } from "react-native";
import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/StackNavigation";
import { TouchableOpacity } from "react-native-gesture-handler";

interface IFirstTimeLogin {
  navigation: NativeStackNavigationProp<RootStackParamList,'FirstTimeAfterLogin'>
}

const FirstTimeAfterLogin = ({navigation}:IFirstTimeLogin) => {
  const handlerPress = ()=>{
    navigation.navigate("CreateNewPatient");
  }
  return (
    <View className="flex-1 justify-center items-center ">
      <Text>A pill tracking system has not yet been set up</Text>
      <Text>Click the button below</Text>
      <TouchableOpacity onPress={handlerPress} >
        <Text>Create a New Patient</Text>
      </TouchableOpacity>
      
    </View>
  );
};

export default FirstTimeAfterLogin;
