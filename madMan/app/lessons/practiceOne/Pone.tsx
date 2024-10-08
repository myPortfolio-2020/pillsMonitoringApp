import { View, Text, Button } from "react-native";
import React from "react";

const Pone = ({ navigation }: any) => {

  return (
    <View className="flex-1">
      <View className="flex-1 justify-center items-center">
        <Text>Pone</Text>
        <View className="mb-3">
          <Button title="go to another screen" onPress={()=>navigation.navigate("Ptwo")} />
        </View>        
      </View>
    </View>
  );
};

export default Pone;
