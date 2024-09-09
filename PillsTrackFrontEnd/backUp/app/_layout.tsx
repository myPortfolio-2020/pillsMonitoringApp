import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./navigation/StackNavigation";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Provider } from "react-redux";
import { store } from "./redux/store";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const _layout = () => {
  const [fontsLoaded, error] = useFonts({
    "Inter_18pt-ThinItalic": require("./../assets/fonts/Inter_18pt-ThinItalic.ttf"),
    "Inter_18pt-MediumItalic": require("./../assets/fonts/Inter_18pt-MediumItalic.ttf"),
    "Inter_18pt-Light": require("./../assets/fonts/Inter_18pt-Light.ttf"),
    "Inter_18pt-Italic": require("./../assets/fonts/Inter_18pt-Italic.ttf"),
    "Inter_18pt-ExtraBoldItalic": require("./../assets/fonts/Inter_18pt-ExtraBoldItalic.ttf"),
    "Inter_18pt-BoldItalic": require("./../assets/fonts/Inter_18pt-BoldItalic.ttf"),
    "Inter_18pt-BlackItalic": require("./../assets/fonts/Inter_18pt-BlackItalic.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null;
  }

  if (!fontsLoaded && !error) {
    return null;
  }
  return (
    <>
      <NavigationContainer independent={true}>
        <Provider store={store}>
          <StackNavigation />
        </Provider>
      </NavigationContainer>
    </>
  );
};

export default _layout;
