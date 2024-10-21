import { View, Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "@/styles/styles";

const OnBoardingScreens = () => {
  return (
    <LinearGradient
      colors={["#22ddcc", "#3322cc"]}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <View>
        <Text>sdg</Text>
      </View>
    </LinearGradient>
  );
};

export default OnBoardingScreens;
