// import { View, Text } from "react-native";
// import React from "react";
// import UserNavigation from "../navigation/UserNavigation";
// import User from "../components/User";

// const PreHome = () => {
//   return <User />;
// };

// export default PreHome;

import { View, Text,TouchableOpacity } from "react-native";
import React, { useState } from "react";
import FirstTimeAfterLogin from "../components/FirstTimeAfterLogin";
import TabsNavigation from "../navigation/TabsNavigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/StackNavigation";

interface IPreHomePro {
  navigation:NativeStackNavigationProp<RootStackParamList,'DrugsLog'>
}

const PreHome = ({navigation}:IPreHomePro) => {
  const [firstTimeLogin, FirstTimeLogin] = useState(true);

  const handlerPress = ()=>{
    navigation.navigate("CreateNewPatient")
  }

  return <>{firstTimeLogin ? 
    
    <View className="flex-1 justify-center items-center ">
      <Text>A pill tracking system has not yet been set up</Text>
      <Text>Click the button below</Text>
      <TouchableOpacity onPress={handlerPress} >
        <Text>Create a New Patient</Text>
      </TouchableOpacity>      
    </View> : <TabsNavigation />}</>;
};

export default PreHome;
