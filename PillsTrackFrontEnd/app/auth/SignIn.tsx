import { View, Text, Pressable } from "react-native";
import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/StackNavigation";
import globalStyles from "@/globalStyles";

interface SignInProp {
  navigation: NativeStackNavigationProp<RootStackParamList, "SignIn">;
}

const SignIn = ({ navigation }: SignInProp) => {
  const handlerOnPress = () => {
    navigation.navigate("DrawerNavigation");
  };

  return (
    <View className="flex-1 justify-center items-center ">
      <Text>SignIn</Text>
      <Pressable onPress={handlerOnPress}>
            <Text style={globalStyles.fullSpreadBtn}>Verify Code</Text>
          </Pressable>
    </View>
  );
};

export default SignIn;
