import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from "react-native";
import React from "react";
import { RootStackParamList } from "../navigation/StackNavigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import images from "./../../constants/images";
import SplashSlider from "../components/SplashSlider";
import globalStyles from './../../globalStyles'

interface SplashProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "SplashScreen">;
}

const SplashScreen = ({ navigation }: SplashProps) => {
  const handlerPress = () => {
    navigation.navigate("Signup");
  };
  return (
    <GestureHandlerRootView>
      <SafeAreaView className="h-full">
        {/* <ScrollView contentContainerStyle={{ flexGrow: 1 }}> */}
        <View className="flex-1 justify-center">
          <View className="justify-center items-center">
            <Image source={images.appLogo} />
            <Text className="font-fExtraBoldItalic" style={globalStyles.logoStyle}>Drug log</Text>
            <Text className="font-fExtraBoldItalic">Don’t let them forget</Text>
            <Image source={images.splashImg} resizeMode="contain" />
            <Text>How it is helpful?</Text>
            <SplashSlider />
            <TouchableOpacity>
              <Text onPress={handlerPress}>Start</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* </ScrollView> */}
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
