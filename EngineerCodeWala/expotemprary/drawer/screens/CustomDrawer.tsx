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
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "@/stackNavigator/StackNavigator";

type CustomDrawerProps = DrawerContentComponentProps;
interface CustProp {
  navigation: NavigationProp<RootStackParamList, 'Contact'>
}

const CustomDrawer: React.FC<CustomDrawerProps> = (props, {navigation}:CustProp) => {
  
  return (
    <SafeAreaView>
      <View>
        <Image
          source={require("../../assets/images/about.png")}
          style={{ width: 100, height: 100 }}
        />
        <Text>ProvideLinks as TouchAbleOpacity</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Contact")}>
          <Text>Help</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CustomDrawer;
