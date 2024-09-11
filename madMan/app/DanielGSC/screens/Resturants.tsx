import { View, Text, ScrollView } from "react-native";
import React from "react";
import ResturanantsCard from "../component/ResturanantsCard";
import Menu from "@/app/OtherScreen/Menu";

const Resturants = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <View className="p-6">
        <Text className="mb-1 font-semibold text-2xl">Resturants</Text>
        <ScrollView>
          <ResturanantsCard name="Suchi Resturant" />
          <ResturanantsCard name="Burger Resturant" />
          <ResturanantsCard name="Fine Dining Resturant" />
        </ScrollView>
        <Menu />
      </View>
    </View>
  );
};

export default Resturants;
