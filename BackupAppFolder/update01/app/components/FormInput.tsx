// src/components/CustomFormField.tsx
import React from 'react';
import { View, Text, TextInput, StyleSheet, TextInputProps } from 'react-native';

interface FormInputProps extends TextInputProps {
  label: string;
  errorMessage?: string;
  isPassword?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  errorMessage,
  isPassword = false,
  style,
  ...textInputProps
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, style]}
        secureTextEntry={isPassword}
        {...textInputProps}
      />
      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 11,
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
    fontWeight:'bold',
    paddingLeft:4
  },
  input: {
    backgroundColor:'#F4F4F4',
    borderRadius:4,
    borderWidth:1,
    borderColor:'#E6E4E4',
    padding:11,
    marginTop:4,   
  },
  errorText: {
    marginTop: 4,
    fontSize: 12,
    color: 'red',
  },
});

export default FormInput;
