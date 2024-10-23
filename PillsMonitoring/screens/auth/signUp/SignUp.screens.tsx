// stped at 1:22
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { styles } from "@/styles/styles";
import { router } from "expo-router";

const SignUpScreens = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<Boolean>(false);
  const [buttonSpinner, setButtonSpinner] = useState(false);

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const [required, setRequired] = useState("");  
  const [error, setError] = useState({
    password: "",
  });

  const handlePasswordValidation = (value: string) => {
    const password = value;
    const passwordSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/;
    const passwordOneNumber = /(?=.*[0-9])/;
    const passwordSixValue = /(?=.{6,})/;
    if (!passwordSpecialCharacter.test(password)) {
      setError({
        ...error,
        password: "write atleast On specail Characters!",
      });
     
    } else if (!passwordOneNumber.test(password)) {
      setError({
        ...error,
        password: "write atleast one number ",
      });
     
    } else if (!passwordSixValue.test(password)) {
      setError({
        ...error,
        password: "Atleast six characters require",
      });
     
    } else {
      setError({
        ...error,
        password:''
      })     
    }
    setUserInfo({ ...userInfo, password: value });
  };

  const handleSignIn = ()=>{
    router.push('/(routes)/verifyAccount')
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Lets Get Started</Text>
      <Text>Create an account</Text>
      <TextInput
        style={styles.inputStyle}
        keyboardType="email-address"
        value={userInfo.email}
        onChangeText={(value:string) => {
          setUserInfo({ ...userInfo, email: value });
        }}
      />
      {required && (
        <View>
          <Text>text required</Text>
        </View>
      )}
      <TextInput
        style={styles.inputStyle}              
        value={userInfo.password}
        keyboardType="default"
        secureTextEntry={!isPasswordVisible}      
        placeholder = "*****"
        onChangeText = {handlePasswordValidation}
      />
      {error.password && (
        <View>
          <Text>{error.password}</Text>
        </View>
      )}
      <TouchableOpacity  style={styles.btn}>
        <Text>GoogleLogin</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={handleSignIn}>
        <Text>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity  onPress={()=>router.push('/(routes)/login')}>
        <Text>Already an account, Signin</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreens;

