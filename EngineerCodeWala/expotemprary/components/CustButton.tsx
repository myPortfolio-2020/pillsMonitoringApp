import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

interface CustButton {
  title: string;
  onPress: ()=>void;
}

const CustButton: React.FC<CustButton> = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustButton;
