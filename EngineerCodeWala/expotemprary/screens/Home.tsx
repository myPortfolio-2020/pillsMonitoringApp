import { View, Text, Button, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "expo-router";

const Home = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ScreenA", {
            user: {
              nm: "Ahmed",
              sal: 2000,
            },
          })
        }
      >
        <Text>Go TO screen A</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
