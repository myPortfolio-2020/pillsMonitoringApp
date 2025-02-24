import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  RouteProp,
  useNavigationState,
  useRoute,
} from "@react-navigation/native";
import { RootStackParamList } from "@/stackNavigator/StackNavigator";
import { StackNavigationProp } from "@react-navigation/stack";

interface InfoProp {
  navigation: StackNavigationProp<RootStackParamList, "Info">;
}

const Info = ({ navigation }: InfoProp) => {
  const route = useRoute<RouteProp<RootStackParamList, "Info">>();
  const states = useNavigationState((state) => state.routes.length);
  console.log("check Now", states);
  return (
    <View>
      <Text>Info</Text>
      <Text>{route.params.nm}</Text>
      <Text>{route.params.sal}</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Info", { nm: "Jamal", sal: 1000 })}
      >
        <Text>Go To Info Page</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Info;
