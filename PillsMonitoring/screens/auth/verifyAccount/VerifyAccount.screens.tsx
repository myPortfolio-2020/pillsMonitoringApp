import { View, Text } from 'react-native'
import React, { useRef, useState } from 'react'

const VerifyAccountScreens = () => {

  const [code, setCode] = useState(new Array(4).fill(''))
  
  const inputs = useRef([...Array(4).map(()=>React.createRef())])

console.log(inputs)
  const handleInput = (text:string, index:number)=>{
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode)
  }
  return (
    <View>
      <Text>VerifyAccount.screens</Text>
    </View>
  )
}

export default VerifyAccountScreens