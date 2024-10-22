// Slider
// https://www.npmjs.com/package/react-native-app-intro-slider

import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { router } from 'expo-router'
import { commonStyles } from '@/styles/common/styles'
import AppIntroSlider from 'react-native-app-intro-slider';
import { onboardingSwiperData } from '@/constants/constants'
const WelcomeScreen = () => {
  const renderItem = ({item}:{item: onboardingSwiperDataType})=>(
    <LinearGradient colors={['#ddd', '#eee']} style={{flex:1, justifyContent:'center',
      alignItems:'center'
    }}>
      <View style={commonStyles.commBtn}>
      <Image source={item.image}/>
      <Text>{item.description}</Text>
      <Text>{item.title}</Text>
      </View>     
    </LinearGradient>
  )
  return (
   <AppIntroSlider 
   renderItem={renderItem}
   data = {onboardingSwiperData}
   onDone={()=>{router.push('/login')}}
   onSkip={()=>{router.push('/login')}}
   renderNextButton = {()=>(
    <View>
    <Text  style={commonStyles.commBtn}>Next</Text>
  </View>
   )}
   renderDoneButton={()=>(
    <View>
      <Text  style={commonStyles.commBtn}>Done</Text>
    </View> 
   )}

   showSkipButton={false}
   bottomButton={true}
   dotStyle={commonStyles.dotStyle}
   />
  )
}

export default WelcomeScreen