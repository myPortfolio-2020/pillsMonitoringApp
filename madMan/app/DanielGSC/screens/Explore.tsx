import { View, Text } from "react-native";
import React from "react";
import ResturanantsCard from "../component/ResturanantsCard";

const Explore = () => {
  return (
    <View className="flex-1">
      <View className="p-6">
        <Text className="mb-3 font-semibold text-2xl">Explore</Text>
        <ResturanantsCard name="Suchi Resturant" />
        <ResturanantsCard name="Burger Resturant" />
        <ResturanantsCard name="Fine Dining Resturant" />
        <Text className="mb-3 mt-3 font-semibold text-2xl">Most Popular</Text>
        <ResturanantsCard name="Suchi Resturant" />
        <ResturanantsCard name="Burger Resturant" />
      </View>
    </View>
  );
};

export default Explore;
