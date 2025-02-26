import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import { DrawerContentComponentProps } from "@react-navigation/drawer";

type CustomDrawerProps = DrawerContentComponentProps;

const CustomDrawer: React.FC<CustomDrawerProps> = (props) => {
  return (
    <SafeAreaView>
      <View>
        <Image
          source={require("../../assets/images/about.png")}
          style={{ width: 100, height: 100 }}
        />
        <Text>ProvideLinks as TouchAbleOpacity</Text>
      </View>
    </SafeAreaView>
  );
};

export default CustomDrawer;
