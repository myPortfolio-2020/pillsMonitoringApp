import { View, Text, TouchableOpacity, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/StackNavigation";
import images from "@/constants/images";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyles from "@/globalStyles";
import {
  GestureHandlerRootView,
  TextInput,
} from "react-native-gesture-handler";

interface VerificationCodeProp {
  navigation: NativeStackNavigationProp<RootStackParamList, "VerificationCode">;
}

interface IVerifiyCode {
  verificationCode: string;
}

const VerificationCode = ({ navigation }: VerificationCodeProp) => {
  const [verificationCode, setVerificationCode] = useState<IVerifiyCode>();
  const handlerOnPress = () => {
    navigation.navigate("SignIn");
  };
  return (
    <GestureHandlerRootView>
      <SafeAreaView className="flex-1" style={globalStyles.screenPad}>
        <Image source={images.backArrowIcon} />

        <View className="flex-1 justify-center">
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
          <Text style={globalStyles.MidTxt}>VerificationCode</Text>
          <Text className="mb-8">Please enter details to login</Text>
          <View className="items-center">
            <View>
              <Text>Verification code</Text>
              <View className="flex-row">
                <TextInput style={globalStyles.textInput} className="m-1" />
                <TextInput style={globalStyles.textInput} className="m-1" />
                <TextInput style={globalStyles.textInput} className="m-1" />
                <TextInput style={globalStyles.textInput} className="m-1" />
                <TextInput style={globalStyles.textInput} className="m-1" />
              </View>              
            </View>
            <Text>Didn’t receive an OTP?</Text>
            <Text className="mb-8 mt-4" style={globalStyles.primaryCol}>Resend OTP</Text>
          </View>
          <Pressable onPress={handlerOnPress}>
            <Text style={globalStyles.fullSpreadBtn}>Verify Code</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default VerificationCode;
