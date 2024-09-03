import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image
} from "react-native";
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
  MobileNumber:string,
  confirmPassword: string;
  usernameError: string;
  passwordError: string;
}

const Signup = ({ navigation }: SignupProp) => {
  const [form, setForm] = useState<IFields>({
    username: '',
    email: '',
    password: '',
    MobileNumber:'',
    confirmPassword: '',
    usernameError: '',
    passwordError: '',
  });
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
        {/* <View>
          <Text>Name</Text>
          <TextInput style={globalStyles.textInput} placeholder="Enter Name" placeholderTextColor="#BDC2C3" />
        </View> */}
        <FormInput
          label="Name"
          value={form.username}
          onChangeText={(e) => setForm({ ...form, username: e })}
          placeholder="Enter your name"
        />
        <FormInput
          label="Email"
          value={form.email}
          onChangeText={(e) => setForm({ ...form,  email: e })}
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
        <Pressable onPress={handlerPress}>
          <Text style={globalStyles.fullSpreadBtn}>Sign up</Text>
        </Pressable>
      </View>
    </View>
 
  );
};

export default Signup;

const styles = StyleSheet.create({});
