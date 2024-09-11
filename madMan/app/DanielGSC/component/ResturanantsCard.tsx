import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

interface Props {
  name: string;
  onPress: (name:string) => void;
}

const ResturanantsCard: React.FC<Props> = ({ name, onPress }) => {
  return (
    <View>
      <TouchableOpacity onPress={() =>onPress(name)}>
        <Text style={styles.cardStyle}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ResturanantsCard;

const styles = StyleSheet.create({
  cardStyle: {
    backgroundColor: "#FFEFD5",
    elevation: 3,
    padding: 11,
    width: 300,
    marginTop: 4,
    marginBottom: 4,
    borderRadius: 7,
  },
});
