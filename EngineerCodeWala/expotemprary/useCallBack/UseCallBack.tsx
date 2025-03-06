import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";

const UseCallBack = () => {
  const [counter, setCounter] = useState<number>(0);

  const fetchData =()=>{
    
  }

  useEffect(()=>{

  },[])

  return (
    <View className="flex-1">
      <View className="flex-1 justify-center align-middle">
        <Text>{counter}</Text>
        <TouchableOpacity onPress={() => setCounter(counter + 1)}>
          <Text>Click Me</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UseCallBack;
