import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { useNavigation } from "expo-router";

type CustomDrawerProps = DrawerContentComponentProps;

const CustomDrawer: React.FC<CustomDrawerProps> = (props) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View>
        <Image
          source={require("../../assets/images/about.png")}
          style={{ width: 100, height: 100 }}
        />
        <Text>ProvideLinks as TouchAbleOpacity</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Help")}>
          <Text>Help</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CustomDrawer;
