import { View, Text, Button } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "expo-router";

const ScreenA = () => {
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <SafeAreaView>
      <View>
        <Text>ScreenAhhhhhhhhhhhhhhhhhhhhhhhhh</Text>
        <Text>
          This is coming from Route -{" "}
          {`${route.params.user.nm} and sal is ${route.params.user.sal}`}
        </Text>
        <Button title="go back" onPress={() => navigation.goBack()} />
      </View>
    </SafeAreaView>
  );
};

export default ScreenA;
