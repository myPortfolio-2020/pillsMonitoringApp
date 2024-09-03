import { View, Text, StyleSheet, Pressable, Image, TextInput } from "react-native";
import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/StackNavigation";
import globalStyles from "./../../globalStyles";
import images from "./../../constants/images";

interface SignupProp {
  navigation: NativeStackNavigationProp<RootStackParamList, "Signup">;
}

const Signup = ({ navigation }: SignupProp) => {
  const handlerPress = () => {
    navigation.navigate("VerificationCode");
  };
  return (
    <View className="flex-1 justify-center" style={globalStyles.screenPad}>
      <View className="justify-center">
        <View className="items-end">
          <Text>Already a Member? Sign In</Text>
        </View>
        <View>
          <Image source={images.appLogo} />
          <Text>SignIn</Text>
          <Text>Please enter details to register</Text>
        </View>
        <View>
          <Text>Name</Text>
          <TextInput style={globalStyles.textInput} placeholder="Enter Name"/>
        </View>
        <Pressable onPress={handlerPress}>
          <Text style={globalStyles.fullSpreadBtn}>Sign up</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({});
