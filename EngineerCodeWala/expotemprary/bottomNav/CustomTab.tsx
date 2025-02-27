import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const CustomTab = ({ state, descriptors, navigation }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#33ddcc",
      }}
    >
      {state.routes.map((tab, index) => {
        return (
          <TouchableOpacity onPress={() => navigation.navigate(tab.name)}>
            <Image
              source={
                tab.name === "Products"
                  ? require("../assets/images/about.png")
                  : tab.name === "Profile"
                  ? require("../assets/images/policy.png")
                  : tab.name === "Search"
                  ? require("../assets/images/help.png")
                  : require("../assets/images/about.png")
              }
              style={{ width: 30, height: 30 }}
            />

            <Text>{tab.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomTab;
