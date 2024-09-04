import { View, Text, Pressable, Image } from "react-native";
import React, { useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/StackNavigation";
import globalStyles from "@/globalStyles";
import { SafeAreaView } from "react-native-safe-area-context";
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
      <View className="flex-1 justify-center">
        <Image source={images.appLogo} />
        <Text>Don’t let them forget</Text>
        <Text>SignIn</Text>
        <Text>Please enter details to login</Text>
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
        <Pressable onPress={handlerOnPress}>
          <Text style={globalStyles.fullSpreadBtn}>SignIn</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignIn;
