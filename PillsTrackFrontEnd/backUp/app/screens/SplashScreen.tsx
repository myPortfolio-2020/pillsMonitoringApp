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
import globalStyles from "./../../globalStyles";

interface SplashProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "SplashScreen">;
}

const SplashScreen = ({ navigation }: SplashProps) => {
  const handlerPress = () => {
    navigation.navigate("Signup");
  };
  return (
    <GestureHandlerRootView>
      <SafeAreaView className="h-full bg-white">
        {/* <ScrollView contentContainerStyle={{ flexGrow: 1 }}> */}
        <View className="flex-1 justify-center">
          <View className="justify-center items-center">
            <Image source={images.appLogo} />
            <Text
              className="font-fLight uppercase"
              style={globalStyles.logoStyle}
            >
              Drug <Text style={globalStyles.primaryCol}>log</Text>
            </Text>
            <Text
              className="font-fLight uppercase mb-10"
              style={[globalStyles.supportingCol, globalStyles.smTxt]}
            >
              Don’t let them forget
            </Text>
            <Image source={images.splashImg} resizeMode="contain" />
            <Text className="font-fLight" style={globalStyles.MidTxt}>
              How it is <Text style={globalStyles.primaryCol}>helpful?</Text>
            </Text>          
              <SplashSlider /> 
            <TouchableOpacity>
              <Text onPress={handlerPress}  style={globalStyles.startBtn}>Start</Text>
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