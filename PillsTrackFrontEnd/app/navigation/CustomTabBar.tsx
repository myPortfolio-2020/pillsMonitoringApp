// src/App.tsx
import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const CustomTabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  return (
    <View style={styles.tabBarContainer}>
      <View style={styles.leftTabsContainer}>
        {state.routes.slice(0, 3).map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tabButton}
            >
              <Ionicons
                name={
                  route.name === "Home"
                    ? "home-outline"
                    : route.name === "Patients"
                    ? "person-outline"
                    : "bar-chart-outline"
                }
                size={24}
                color={isFocused ? "#1BB9E6" : "#191516"}
              />
            </TouchableOpacity>
          );
        })}
      </View>
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate("CreateNewPatient")}
      >
        <Ionicons name="add" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default CustomTabBar;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabBarContainer: {
    flexDirection: "row",
    height: 0,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftTabsContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-around",
  },
  tabButton: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  floatingButton: {
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: "#1BB9E6",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 30,
    bottom: 80,
    elevation: 3,
  },
});
