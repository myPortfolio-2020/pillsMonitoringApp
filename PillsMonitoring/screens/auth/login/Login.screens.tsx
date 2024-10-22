// import { View, Text, TextInput } from "react-native";
// import React, { useState } from "react";
// import { styles } from "@/styles/styles";

// const LoginScreen = () => {
//   const [isPasswordVisible, setIsPasswordVisible] = useState<Boolean>(false);
//   const [buttonSpinner, setButtonSpinner] = useState(false);

//   const [userInfo, setUserInfo] = useState({
//     email: "",
//     password: "",
//   });

//   const [required, setRequired] = useState("");  
//   const [error, setError] = useState({
//     password: "",
//   });

//   const handlePasswordValidation = (value: string) => {
//     const password = value;
//     const passwordSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/;
//     const passwordOneNumber = /(?=.*[0-9])/;
//     const passwordSixValue = /(?=.{6,})/;
//     if (!passwordSpecialCharacter.test(password)) {
//       setError({
//         ...error,
//         password: "write atleast On specail Characters!",
//       });
     
//     } else if (!passwordOneNumber.test(password)) {
//       setError({
//         ...error,
//         password: "write atleast one number ",
//       });
     
//     } else if (!passwordSixValue.test(password)) {
//       setError({
//         ...error,
//         password: "Atleast six characters require",
//       });
     
//     } else {
//       setError({
//         ...error,
//         password:''
//       })
//       setUserInfo({ ...userInfo, password: value });
//     }
    
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Login.screens</Text>
//       <TextInput
//         style={styles.inputStyle}
//         keyboardType="email-address"
//         value={userInfo.email}
//         onChangeText={(value:string) => {
//           setUserInfo({ ...userInfo, email: value });
//         }}
//       />
//       {required && (
//         <View>
//           <Text>text required</Text>
//         </View>
//       )}
//       <TextInput
//         style={styles.inputStyle}              
//         value={userInfo.password}
//         keyboardType="default"
//         secureTextEntry={!isPasswordVisible}      
//         placeholder = "*****"
//         onChangeText = {handlePasswordValidation}
//       />
//       {error.password && (
//         <View>
//           <Text>{error.password}</Text>
//         </View>
//       )}
//     </View>
//   );
// };

// export default LoginScreen;

// // import { View, Text, TextInput } from 'react-native'
// // import React, {useState} from 'react'
// // import { styles } from "@/styles/styles";
// // const LoginScreens = () => {
// //   const [userInfo, setUserInfo] = useState({
// //     user:'',
// //     password:''
// //   })
// //   return (
// //     <View style={{flex:1, justifyContent:'center' , alignItems:'center'}}>
// //       <Text>Login.screens</Text>
// //       <TextInput style={styles.inputStyle} 
// //       value={userInfo.password}
// //       onChangeText={(value:string)=>{
// //         setUserInfo({
// //           ...userInfo, 
// //           password:value
// //         })
// //       }} />
// //     </View>
// //   )
// // }

// // export default LoginScreens
import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { styles } from "@/styles/styles";

const LoginScreen = () => {
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
    const passwordSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/;
    const passwordOneNumber = /(?=.*[0-9])/;
    const passwordSixValue = /(?=.{6,})/;

    // Perform validation without resetting the password field
    if (!passwordSpecialCharacter.test(value)) {
      setError({ ...error, password: "Password needs at least one special character!" });
    } else if (!passwordOneNumber.test(value)) {
      setError({ ...error, password: "Password needs at least one number!" });
    } else if (!passwordSixValue.test(value)) {
      setError({ ...error, password: "Password must be at least six characters long!" });
    } else {
      setError({ ...error, password: "" }); // Clear the error if validation passes
    }

    // Always set the password value regardless of validation
    setUserInfo({ ...userInfo, password: value });
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Login Screen</Text>
      <TextInput
        style={styles.inputStyle}
        keyboardType="email-address"
        value={userInfo.email}
        onChangeText={(value: string) => {
          setUserInfo({ ...userInfo, email: value });
        }}
      />
      {required && (
        <View>
          <Text>Text required</Text>
        </View>
      )}
      <TextInput
        style={styles.inputStyle}
        value={userInfo.password}
        keyboardType="default"
        secureTextEntry={!isPasswordVisible}
        placeholder="*****"
        onChangeText={handlePasswordValidation} // Validation function
      />
      {error.password && (
        <View>
          <Text>{error.password}</Text>
        </View>
      )}
    </View>
  );
};

export default LoginScreen;
