import { View, Text, Pressable } from 'react-native'
import React, {useState} from 'react'



const UseStateHook = () => {
   
    const [counter, setCounter] = useState(0)
    const handlerCount = ()=>{        
        setCounter(counter + 1) 
    }
  return (
    <View>
      <Text>counter: {counter}</Text>
      <Pressable onPress={handlerCount}>
        <Text>Add Count</Text>
      </Pressable>
    </View>
  )
}

export default UseStateHook