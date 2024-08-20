import {
  View,
  Text,
  TouchableOpacity,  
  StyleSheet,
} from "react-native";
import React from "react";

const SplashScreen = () => {
  const handlePress = () => {};
  return (
    <View style={styles.container}>
      <View className="flex-1 justify-items-center items-center">
        <Text>SplashScreen</Text>
        <TouchableOpacity>
          <Text>Start</Text>
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
