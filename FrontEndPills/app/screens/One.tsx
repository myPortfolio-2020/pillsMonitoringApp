import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import Button from "../component/Button";

const One = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text>One</Text>
      <Button
        title={"Click One"}
        onPress={() => {
          alert("one");
        }}
      />
      <FlatList
        data={["a", "b", "c", "d", "e"]}
        renderItem={({ item, index }) => {
          return (
            <View>
              <Text style={style.myList}>{`items-${item} ${index + 1}`}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default One;

const style = StyleSheet.create({
  myList: {
    color: "#44ddcc",
    fontSize: 44,
  },
});
