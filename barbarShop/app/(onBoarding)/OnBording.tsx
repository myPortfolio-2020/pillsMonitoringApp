import { View, Text,StyleSheet, Image } from 'react-native'
import {logo} from './../../constants/images'
import React from 'react'
import { OnboardFlow } from 'react-native-onboard';

const OnBording = () => {

   const pages = [
    {
        title: 'Welcome to my app',
        subtitle: 'This is page 1',
        imageUri: 'https://frigade.com/img/example1.png',
      },
      {
        title: 'Welcome to my app',
        subtitle: 'This is page 1',
        imageUri: 'https://frigade.com/img/example1.png',
      },
   ] 
  return (
    <View style={styles.container}>     
      {/* <Image source={require('../../assets/images/logo.png')} /> */}
      {/* <Image source={logo} /> */}
      <OnboardFlow pages = {pages} type={'fullscreen'}
    />
    </View>
  )
}

export default OnBording

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });
  