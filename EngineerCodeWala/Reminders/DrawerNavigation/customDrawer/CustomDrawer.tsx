import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  DrawerContentComponentProps,
  DrawerNavigationProp,
} from "@react-navigation/drawer";
import { useNavigation } from "expo-router";

type CustomDrawerProps = DrawerContentComponentProps;

type DrawerParamList = {
  Contact: undefined;
  About: undefined;
  Policies: undefined;
};

const CustomDrawer: React.FC<CustomDrawerProps> = (props) => {
  const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>();
  return (
    <SafeAreaView>
      <View>
        <Image
          source={require("../../assets/images/about.png")}
          style={{ width: 100, height: 100 }}
        />
        <Text>ProvideLinks as TouchAbleOpacity</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("About")}
          style={{ margin: 10 }}
        >
          <Text>About</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Contact")}
          style={{ margin: 10 }}
        >
          <Text>Contact</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Policies")}
          style={{ margin: 10 }}
        >
          <Text>Policies</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CustomDrawer;
