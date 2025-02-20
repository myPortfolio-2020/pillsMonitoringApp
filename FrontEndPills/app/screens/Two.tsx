import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Button from "../component/Button";

const Two = () => {
  const [nm, setNm] = useState("");
  return (
    <View
      style={styles.box}
      onLayout={(event) => {
        console.log("width", event.nativeEvent.layout);
      }}
    >
      <Text>Two</Text>
      <Text numberOfLines={2} ellipsizeMode="tail">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
        laudantium provident perferendis corporis dolorem? Ab libero reiciendis
        consequuntur, laborum consectetur rerum ea, commodi deserunt culpa
        doloremque, mollitia explicabo odio. Ratione vel maxime animi labore
        magnam neque laboriosam vero laudantium aspernatur officia doloribus
        nulla nemo exercitationem sint incidunt, laborum at mollitia soluta
        veniam repellendus quis. Et harum provident beatae debitis illo, non
        veritatis enim quidem dignissimos aspernatur obcaecati tenetur incidunt
        sapiente ab labore sunt corrupti amet architecto fugiat.
      </Text>
      <TextInput
        style={styles.borderLine}
        secureTextEntry={true}
        numberOfLines={2}
        multiline={true}
        onChangeText={(text) => {
          setNm(text);
        }}
      ></TextInput>
      <Text>{nm}</Text>
      <Button
        title={"Click Two"}
        onPress={() => {
          alert("Two");
        }}
      />
      <TouchableOpacity style={styles.borderLine} activeOpacity={0}>
        <Text>try Click!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Two;

const styles = StyleSheet.create({
  box: {
    width: 400,
    height: 400,
    backgroundColor: "red",
  },
  borderLine: {
    borderColor: "red",
    height: 30,
    backgroundColor: "blue",
  },
});
