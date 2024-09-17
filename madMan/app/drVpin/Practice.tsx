import { View, Text, Pressable, Alert } from "react-native";
import React, { useState } from "react";
import InnerComp from "./InnerComp";

interface IData {
  title: string;
  msg: string;
}

const Practice = () => {
  const [dataVal, setDatatVal] = useState<string>('read');

  const handlerPress = ({ title, msg }: IData) => {
    setDatatVal('read Again')
    return Alert.alert(title, msg);
  };

  return (
    <View className="flex-1 justify-center items-center">
      <InnerComp dataVal = {dataVal} />
      <Pressable
        onPress={() => handlerPress({ title: "adada", msg: "werwerw" })}
      >
        <Text>Click Here {dataVal}</Text>
      </Pressable>
    </View>
  );
};

export default Practice;
