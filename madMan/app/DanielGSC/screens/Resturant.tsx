import { View, Text } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootParamList } from "../FoodApp";
import ResturanantsCard from "../component/ResturanantsCard";

type Props = NativeStackScreenProps<RootParamList, "Resturant">;

const Resturant = ({ route, navigation }: Props) => {
  return (
    <View className="p-4">
      <Text className="text-2xl">{route.params.name}</Text>
      <Text>Related Resturant</Text>
      <ResturanantsCard
        name="Sushi 1"
        onPress={() => {
          navigation.push("Resturant", { name: "Sushi 1" });
        }}
      />
      <ResturanantsCard
        name="Sushi 2"
        onPress={() => {
          navigation.push("Resturant", { name: "Sushi 2" });
        }}
      />
      <ResturanantsCard
        name="Sushi 3"
        onPress={() => {
          navigation.push("Resturant", { name: "Sushi 3" });
        }}
      />
    </View>
  );
};

export default Resturant;
