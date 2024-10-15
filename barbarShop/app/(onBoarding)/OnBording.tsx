import { View, Text,StyleSheet, Image } from 'react-native'
import {onBoardImg1} from './../../constants/images'
import {onBoardImg2} from './../../constants/images'
import React from 'react'
import { OnboardFlow } from 'react-native-onboard';
// https://www.npmjs.com/package/react-native-onboard

const OnBording = () => {

   const Pages = [
    {
        title: 'Welcome to my app',
        subtitle: 'page 1',
        imageUri: Image.resolveAssetSource(require('onBoardImg1')).uri
      },
      {
        title: 'Barbar Intro',
        subtitle: 'page 2 ',
        imageUri: Image.resolveAssetSource(require('onBoardImg1')).uri
      },
   ] 
  return (
    <View style={styles.container}>     
      {/* <Image source={require('../../assets/images/logo.png')} /> */}
      {/* <Image source={logo} /> */}
      <OnboardFlow pages = {Pages} type={'fullscreen'}
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
  