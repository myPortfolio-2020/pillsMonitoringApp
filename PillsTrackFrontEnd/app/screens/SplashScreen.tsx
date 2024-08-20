import {
  View,
  Text,
  TouchableOpacity,  
  StyleSheet,
} from "react-native";
import React from "react";
import { RootStackParamList } from "../navigation/StackNavigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

interface SplashProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'SplashScreen'>
}

const SplashScreen = ({navigation}:SplashProps) => {
  const handlerPress = () => {
    navigation.navigate('Signup')
  };
  return (
    <View style={styles.container}>
      <View className="flex-1 justify-items-center items-center">
        <Text>SplashScreen</Text>
        <TouchableOpacity>
          <Text onPress={handlerPress}>Start</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems:'center'
  },
});
