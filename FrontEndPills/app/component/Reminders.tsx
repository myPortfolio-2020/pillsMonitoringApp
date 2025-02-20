import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Reminders = () => {
  return (
    // event.nativeEvent.layout - tells all about <view>, with, height, position

    <View>
      <View
        style={styles.box}
        onLayout={(event) => {
          console.log("width", event.nativeEvent.layout);
        }}
      >
        <Text>Reminders</Text>
    
      </View>
    </View>
  );
};

export default Reminders;
const styles = StyleSheet.create({
  box: {
    width: 400,
    height: 400,
    backgroundColor: "red",
  },
});
