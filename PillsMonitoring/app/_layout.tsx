import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import "react-native-reanimated";

import { Text, View } from "react-native";
import { Stack } from "expo-router";


export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <View style={{ flex: 1 }}>
      {isLoggedIn ? (
        <View>
          <Text>isLoginTrue</Text>
        </View>
      ) : (
        <Stack screenOptions={{headerShown:false}}>
          
          <Stack.Screen name="index"/>
          <Stack.Screen name="(routes)/welcomeIntro/index"/>
          <Stack.Screen name="(routes)/login/index"/>
          <Stack.Screen name="(routes)/forgotPassword/index"/>
          <Stack.Screen name="(routes)/signUp/index"/>
        </Stack>
      )}
    </View>
  );
}
