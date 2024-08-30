import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import React from "react";
import { RootStackParamList } from "../navigation/StackNavigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

interface SplashProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "SplashScreen">;
}

const SplashScreen = ({ navigation }: SplashProps) => {
  const handlerPress = () => {
    navigation.navigate("Signup");
  };
  return (
    <SafeAreaView>
      <View className="flex-1 justify-center items-center ">
        <Text className="font-fExtraBoldItalic">SplashScreen</Text>
        <TouchableOpacity>
          <Text onPress={handlerPress}>Start</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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
