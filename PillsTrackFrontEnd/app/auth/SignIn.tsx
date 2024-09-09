import { View, Text, Pressable, Image } from "react-native";
import React, { useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/StackNavigation";
import globalStyles from "@/globalStyles";
import images from "@/constants/images";
import FormInput from "../components/FormInput";

interface SignInProp {
  navigation: NativeStackNavigationProp<RootStackParamList, "SignIn">;
}

interface ISignInFields {
  username: string;
  password: string;
  usernameError: string;
  passwordError: string;
}
console.log('signin')
const SignIn = ({ navigation }: SignInProp) => {
  const [form, setForm] = useState<ISignInFields>({
    username: "",
    password: "",
    usernameError: "",
    passwordError: "",
  });
  const handlerOnPress = () => {
    navigation.navigate("DrawerNavigation");
  };

  return (
    <View className="flex-1" style={globalStyles.screenPad}>
      <View className="items-end mt-4">
        <Text>Not Yet Register? Sign Up</Text>
      </View>
      <View className="flex-1 justify-evenly">
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
            className="font-fLight uppercase mb-8"
            style={[globalStyles.supportingCol, globalStyles.smTxt]}
          >
            Don’t let them forget
          </Text>
        </View>
        <View>
          <Text style={globalStyles.MidTxt}>Sign In</Text>
          <Text className="mb-8">Please enter details to login</Text>
          <View>
          <FormInput
            label="User name"
            value={form.username}
            onChangeText={(e) => setForm({ ...form, username: e })}
            placeholder="Enter your name"
          />
          <FormInput
            label="Password"
            value={form.username}
            onChangeText={(e) => setForm({ ...form, password: e })}
            placeholder="Enter password"
          />
          <Pressable onPress={handlerOnPress} className="mt-8">
            <Text style={globalStyles.fullSpreadBtn}>SignIn</Text>
          </Pressable>
        </View>
        </View>     
      </View>
    </View>
  );
};

export default SignIn;
