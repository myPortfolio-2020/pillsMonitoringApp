import {
  View,
  Text,
  FlatList,
  useWindowDimensions,
  Animated,
} from "react-native";
import React, { useRef } from "react";
import globalStyles from "@/globalStyles";

interface IText {
  slideText: string;
  id: string;
}

const SplashSlider = () => {
 
  const { width } = useWindowDimensions();
  const scrollX = useRef(new Animated.Value(0)).current;

  const slideItem: IText[] = [
    {
      slideText: "Monitor Your Own Medicine",
      id: "1",
    },
    {
      slideText: "Track Your Family Medicine",
      id: "2",
    },
    {
      slideText: "Give a Reminder Call",
      id: "3",
    },
  ];
  return (
    
    <FlatList
      data={slideItem}
      renderItem={({ item }) => (
        <View style={[{ width }, globalStyles.sliderCard]} className="items-center">
          <Text style={{ fontSize: 21, padding:7 }}>{item.slideText}</Text>
        </View>
      )}
      horizontal
      bounces={false}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default SplashSlider;
