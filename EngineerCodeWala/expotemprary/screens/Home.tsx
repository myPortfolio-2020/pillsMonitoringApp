import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "expo-router";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/stackNavigator/StackNavigator";

interface HomeScreenProps {
  navigation: StackNavigationProp<RootStackParamList, "Home">;
}

const Home = ({ navigation }: HomeScreenProps) => {
  return (
    <View className="flex-1" style={style.fbg}>
      <View className=" flex justify-items-center ">
        <TouchableOpacity onPress={() => navigation.navigate("About")}>
          <Text>About</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Help")}>
          <Text>Help</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const style = StyleSheet.create({
  fbg: {
    backgroundColor: "#ccc",
  },
});
