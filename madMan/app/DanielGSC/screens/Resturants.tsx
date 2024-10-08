import { View, Text, ScrollView } from "react-native";
import React from "react";
import ResturanantsCard from "../component/ResturanantsCard";
import Menu from "@/app/DanielGSC/component/Menu";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootParamList } from "../FoodApp";

type Props = NativeStackScreenProps<RootParamList, 'Resturants'>

const Resturants = ({navigation}:Props) => {
  return (
    <View className="flex-1 justify-center items-center">
      <View className="p-6">
        <Text className="mb-1 font-semibold text-2xl">Resturants</Text>
        <ScrollView>
          <ResturanantsCard name="Suchi Resturant" 
          onPress={(name)=>{
            navigation.navigate('Resturant', {name})
          }} />
          <ResturanantsCard name="Burger Resturant"  
           onPress={(name)=>{
            navigation.navigate('Resturant', {name})
          }} />
          <ResturanantsCard name="Fine Dining Resturant" 
           onPress={(name)=>{
            navigation.navigate('Resturant', {name})
          }} />
        </ScrollView>
       <Menu/>
      </View>
    </View>
  );
};

export default Resturants;
