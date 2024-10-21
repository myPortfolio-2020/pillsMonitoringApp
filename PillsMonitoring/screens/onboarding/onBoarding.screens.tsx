import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "@/styles/styles";
import { router } from "expo-router";

const OnBoardingScreens = () => {
  return (
    <LinearGradient
      colors={["#22ddcc", "#3322cc"]}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <View>
        <Text>Start Learning With Me</Text>
      </View>
      <TouchableOpacity style={styles.btn} onPress={()=>router.push('/(routes)/WelcomeIntro')}>
        <Text>Get Started</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default OnBoardingScreens;
