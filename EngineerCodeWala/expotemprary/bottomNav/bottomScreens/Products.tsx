import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import UseRefExample from "@/components/UseRefExample";
import UseContextHook from "@/components/UseContextHook";

const Products = () => {
  const [bgColor, setBgColor] = useState<string>("red");
  return (
    <View>
      <View style={[style.box, { backgroundColor: bgColor }]}>
        <Text>Products nnn</Text>
      </View>
      <TouchableOpacity onPress={() => setBgColor("green")}>
        <Text>ChangeColor</Text>
      </TouchableOpacity>
      <UseRefExample />
      <UseContextHook />
    </View>
  );
};

export default Products;

const style = StyleSheet.create({
  box: {
    width: 200,
    height: 200,
    margin: 12,
    borderColor: "red",
  },
});
