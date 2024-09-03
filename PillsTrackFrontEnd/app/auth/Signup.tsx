import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/StackNavigation";
import globalStyles from './../../globalStyles'

interface SignupProp {
  navigation: NativeStackNavigationProp<RootStackParamList, "Signup">;
}

const Signup = ({ navigation }: SignupProp) => {
  const handlerPress = () => {
    navigation.navigate("VerificationCode");
  };
  return (
    <View className="flex-1 justify-center" style={globalStyles.container}>
      <View className="justify-center">
        <View className="items-end">
          <Text>Already a Member? Sign In</Text>
        </View>

        <Pressable onPress={handlerPress}>
          <Text>Verification Code</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({

})
