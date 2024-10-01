// import { View, Text } from "react-native";
// import React from "react";
// import UserNavigation from "../navigation/UserNavigation";
// import User from "../components/User";

// const PreHome = () => {
//   return <User />;
// };

// export default PreHome;

import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import TabsNavigation from "../navigation/TabsNavigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootInnerStackParamList } from "./DrugsLogin";
import { useGetPatientsQuery } from "../redux/slices/api";

interface IPreHomePro {
  navigation: NativeStackNavigationProp<RootInnerStackParamList, "PreHome">;
}

const PreHome = ({ navigation }: IPreHomePro) => {

  const { data } = useGetPatientsQuery();
  console.log('this is preHome', data?.length)

  const handlerPress = () => {
    navigation.navigate("CreateNewPatient");
  };

  return (
    <>
    {
      data?.length === 0 ? (<View className="flex-1 justify-center items-center">
        <Text>A pill tracking system has not yet been set up</Text>
        <Text>Click the button below</Text>
        <Pressable onPress={handlerPress}>
          <Text>Create a New Patient</Text>
        </Pressable>
      </View>) : ( <TabsNavigation />)
    }
   
    </>
  );
};

export default PreHome;
