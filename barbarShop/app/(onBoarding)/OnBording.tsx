import { View, Text, StyleSheet, Image, Pressable } from "react-native";

import React from "react";
import Swiper from "react-native-swiper";


// https://www.npmjs.com/package/react-native-onboard

const OnBording = ({navigation}:any) => {
 const handlerGo = ()=>{
  navigation.navigate('Hooks')
 }

  const Pages = [
    {
      title: "Welcome to my app",
      subtitle: "page 1",
      imageUri: Image.resolveAssetSource(
        require("./../../assets/images/img1.png")
      ).uri,
    },
    {
      title: "Onboarding",
      subtitle: "Done with React Native Onboarding Swiper",
      imageUri: Image.resolveAssetSource(
        require("./../../assets/images/img2.png")
      ).uri,
    },
    {
      title: "Onboarding 2",
      subtitle: "Done with React Native Onboarding Swiper",
      imageUri: Image.resolveAssetSource(
        require("./../../assets/images/img3.png")
      ).uri,
    },
  ];


  return (
    <View style={styles.container}>
      <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
      <Pressable onPress={handlerGo}>
        <Text>Go</Text>
      </Pressable>
    </View>
  );
};

export default OnBording;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});
