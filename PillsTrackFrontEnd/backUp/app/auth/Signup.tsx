import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import React, { useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/StackNavigation";
import globalStyles from "./../../globalStyles";
import images from "./../../constants/images";
import FormInput from "../components/FormInput";

interface SignupProp {
  navigation: NativeStackNavigationProp<RootStackParamList, "Signup">;
}

interface IFields {
  username: string;
  email: string;
  password: string;
  MobileNumber: string;
  confirmPassword: string;
  usernameError: string;
  passwordError: string;
}

const Signup = ({ navigation }: SignupProp) => {
  const [form, setForm] = useState<IFields>({
    username: "",
    email: "",
    password: "",
    MobileNumber: "",
    confirmPassword: "",
    usernameError: "",
    passwordError: "",
  });
  const handlerPress = () => {
    navigation.navigate("VerificationCode");
  };
  return (
    <View className="flex-1" style={globalStyles.screenPad}>
      <View className="flex-1 justify-between">
        <View className="items-end mt-4">
          <Text>Already a Member? Sign In</Text>
        </View>
        <View>
          <View className="flex-row items-center">
            <Image source={images.appLogo} className="mb-2 mr-2" />
            <Text
              className="font-fLight uppercase"
              style={globalStyles.logoStyle}
            >
              Drug <Text style={globalStyles.primaryCol}>log</Text>
            </Text>
          </View>

          <Text
            className="font-fLight uppercase mb-4"
            style={[globalStyles.supportingCol, globalStyles.smTxt]}
          >
            Don’t let them forget
          </Text>
          <Text style={globalStyles.MidTxt}>Sign Up</Text>
          <Text className="mb-4">Please enter details to register</Text>
          <FormInput
            label="Name"
            value={form.username}
            onChangeText={(e) => setForm({ ...form, username: e })}
            placeholder="Enter your name"
          />
          <FormInput
            label="Email"
            value={form.email}
            onChangeText={(e) => setForm({ ...form, email: e })}
            placeholder="Enter your email"
          />
          <FormInput
            label="Mobile number"
            value={form.MobileNumber}
            onChangeText={(e) => setForm({ ...form, MobileNumber: e })}
            placeholder="Enter your mobile number"
          />
          <FormInput
            label="Password"
            value={form.password}
            onChangeText={(e) => setForm({ ...form, password: e })}
            placeholder="Enter your password"
          />
          <FormInput
            label="Confirm password"
            value={form.confirmPassword}
            onChangeText={(e) => setForm({ ...form, confirmPassword: e })}
            placeholder="Confirm password"
          />
        </View>
        <View>
          <Pressable onPress={handlerPress}>
            <Text style={globalStyles.fullSpreadBtn}>Sign up</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({});
