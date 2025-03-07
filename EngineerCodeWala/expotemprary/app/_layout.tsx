import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";

import DrawerNavigation from "@/drawer/DrawerNavigation";
import UseContextHook from "@/components/UseContextHook";
import UseContextEx from "@/useContext/UseContextEx";
import UseCallBack from "@/useCallBack/UseCallBack";
import UseMemo from "@/useCallBack/UseMemo";
import UseMemoOrUseEffect from "@/useCallBack/UseMemoOrUseEffect";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  // return ( <StackNavigator />);
  return <UseMemoOrUseEffect />;
}
