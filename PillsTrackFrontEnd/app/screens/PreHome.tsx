import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootInnerStackParamList } from "./DrugsLogin";
import { useGetPatientsQuery } from "../redux/slices/api";
import DataFound from "./DataFound";
import TabsNavigation from "../navigation/TabsNavigation";

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
        <TouchableOpacity onPress={handlerPress}>
          <Text>Create a New Patient</Text>
        </TouchableOpacity>
      </View>) : (   <TabsNavigation/>)
    }
   
    </>
  );
};

export default PreHome;
