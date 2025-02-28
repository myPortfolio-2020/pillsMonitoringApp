import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";

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
