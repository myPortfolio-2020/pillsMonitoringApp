import { View, Text, FlatList, useWindowDimensions } from "react-native";
import React from "react";

interface IText {
  slideText: string;
}

const SplashSlider = () => {
  const { width } = useWindowDimensions();
  const slideItem: IText[] = [
    {
      slideText: "tis is the first text",
    },
    {
      slideText: "tis is the second text",
    },
    {
      slideText: "tis is the Third text",
    },
  ];
  return (
    <FlatList
      data={slideItem}
      renderItem={({ item }) => (
        <View style={{ width }}>
          <Text>{item.slideText}</Text>
        </View>
      )}
      horizontal
      pagingEnabled
      bounces={false}
    />
  );
};

export default SplashSlider;
