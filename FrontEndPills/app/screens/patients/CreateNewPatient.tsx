import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const CreateNewPatient = () => {
  return (
    <View className="flex-row">
      <View>
        <TouchableOpacity style={styles.goBackBtn}>
          <Text>Go Back</Text>
        </TouchableOpacity>
      </View>
      <Text>CreateNewPatient Screen Form</Text>
    </View>
  );
};

export default CreateNewPatient;

const styles = StyleSheet.create({
  goBackBtn:{
    marginRight:12
  }
})
