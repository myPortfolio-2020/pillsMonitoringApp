import { View, Text, TouchableOpacity, Alert } from "react-native";
import React from "react";

import { RootStackParamList } from "@/stackNavigator/StackNavigator";
import { StackNavigationProp } from "@react-navigation/stack";
import CustButton from "@/components/CustButton";
import { goBack } from "expo-router/build/global-state/routing";

interface HomeProp {
  navigation: StackNavigationProp<RootStackParamList, "Home">;
}

const Home = ({ navigation }: HomeProp) => {
  return (
    <View className="flex-1 justify-center items-center">
      <TouchableOpacity
        onPress={() => navigation.navigate("Info", { nm: "alex", sal: 5000 })}
      >
        <Text>Go To Info Page</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Support")}>
        <Text>Go To Support Page</Text>
      </TouchableOpacity>
      <CustButton
        title={"gogback"}
        onPress={() => navigation.navigate("Support")}
      />
    </View>
  );
};

export default Home;
