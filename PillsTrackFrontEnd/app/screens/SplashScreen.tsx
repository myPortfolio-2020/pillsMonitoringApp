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
import { ScrollView } from "react-native-gesture-handler";

interface SplashProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "SplashScreen">;
}

const SplashScreen = ({ navigation }: SplashProps) => {
  const handlerPress = () => {
    navigation.navigate("Signup");
  };
  return (
    <SafeAreaView className="h-full">
      <ScrollView contentContainerStyle={{height:'100%'}}>
      <View className="flex-1 justify-center items-center ">
        <Text className="font-fExtraBoldItalic">SplashScreen</Text>
        <TouchableOpacity>
          <Text onPress={handlerPress}>Start</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>

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
