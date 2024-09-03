import {
  View,
  Text,
  FlatList,
  useWindowDimensions,
  Animated,
} from "react-native";
import React, { useRef } from "react";

interface IText {
  slideText: string;
  id: string;
}

const SplashSlider = () => {
  const { width } = useWindowDimensions();
  const scrollX = useRef(new Animated.Value(0)).current;

  const slideItem: IText[] = [
    {
      slideText: "tis is the first text",
      id: "1",
    },
    {
      slideText: "tis is the second text",
      id: "2",
    },
    {
      slideText: "tis is the Third text",
      id: "3",
    },
  ];
  return (
    <FlatList
      data={slideItem}
      renderItem={({ item }) => (
        <View style={{ width }}>
          <Text style={{ fontSize: 24 }}>{item.slideText}</Text>
        </View>
      )}
      horizontal
      bounces={false}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default SplashSlider;
