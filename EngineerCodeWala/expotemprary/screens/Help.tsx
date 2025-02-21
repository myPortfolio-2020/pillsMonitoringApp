import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/stackNavigator/StackNavigator";

interface HelpScreenProp {
  navigation: StackNavigationProp<RootStackParamList, "Help">;
}

const Help = ({ navigation }: HelpScreenProp) => {
  return (
    <View style={style.fbg}>
      <Text>Help</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>GoBack</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Help;

const style = StyleSheet.create({
  fbg: {
    backgroundColor: "#bbbbbb",
  },
});
