import { View, Text, ScrollView } from "react-native";
import React from "react";
import ResturanantsCard from "../component/ResturanantsCard";

const Resturants = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="mb-11 font-semibold text-2xl">Resturants</Text>
      <ScrollView>
        <ResturanantsCard name="Suchi Resturant" />
        <ResturanantsCard name="Burger Resturant" />
        <ResturanantsCard name="Fine Dining Resturant" />
      </ScrollView>
    </View>
  );
};

export default Resturants;
