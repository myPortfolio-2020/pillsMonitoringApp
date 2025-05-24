import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

const CustomTab: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#33ddcc",
      }}
    >
      {state.routes.map((tab, index) => {
        const { options } = descriptors[tab.key];
        const isActive = state.index === index;
        return (
          <TouchableOpacity
            key={tab.key}
            onPress={() => navigation.navigate(tab.name)}
          >
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

            <Text
              style={{
                color: isActive
                  ? options.tabBarActiveTintColor || "blue"
                  : "red",
              }}
            >
              {tab.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomTab;
