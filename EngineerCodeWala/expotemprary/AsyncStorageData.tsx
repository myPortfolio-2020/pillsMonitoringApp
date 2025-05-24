import { View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AsyncStorageData: React.FC = () => {
  const [data, setData] = useState<string>("");

  const saveData = async (data: string) => {
    try {
      await AsyncStorage.setItem("data", data);
      console.log(data);
    } catch (e) {
      // saving error
    }
  };

  return (
    <View>
      <TextInput
        placeholder="text"
        value={data}
        onChangeText={(txt) => setData(txt)}
      />
      <Button title="save data" onPress={() => saveData(data)} />
      <Button title="get Data" />
    </View>
  );
};

export default AsyncStorageData;
