import { View, Text } from "react-native";
import React from "react";
import StackNav from "@/navigation/StackNav";
import SplashScreen from "@/screens/SplashScreen";
import Index from "./index";
import { NavigationContainer } from "@react-navigation/native";

const _layout = () => {
  return (
   <>  
    <NavigationContainer independent={true}>
    <Index/>
      </NavigationContainer>  
    
   </>
  );
};

export default _layout;
