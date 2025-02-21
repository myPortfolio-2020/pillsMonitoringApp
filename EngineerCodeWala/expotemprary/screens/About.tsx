import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/stackNavigator/StackNavigator";

interface AboutScreenProp {
  navigation: StackNavigationProp<RootStackParamList, "About">;
}

const About = ({ navigation }: AboutScreenProp) => {
  return (
    <View style={style.fbg}>
      <Text>About</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Help")}>
        <Text>Go To Help</Text>
      </TouchableOpacity>
    </View>
  );
};

export default About;

const style = StyleSheet.create({
  fbg: {
    backgroundColor: "#ddd",
  },
});
