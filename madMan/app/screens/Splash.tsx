import { View, Text,StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { TRootStackParams } from "../AppNavigator";

interface ISplash {
    navigation: NativeStackNavigationProp<TRootStackParams>
}

const Splash = ({navigation}:ISplash) => {
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('MainScreen')
        },3000)
    },[])
  return (
    <View className="" style={styles.container}>
        <View className="flex-1 items-center justify-center">
        <Text>Splash</Text>
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#ffefa1',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
