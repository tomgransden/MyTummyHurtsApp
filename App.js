import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import MenuScreen from "./src/components/MenuScreen";
import Summary from "./src/components/Summary";

const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync();

function App() {
  const [fontsLoaded] = useFonts({
    "RubikBubbles-Regular": require("./assets/RubikBubbles-Regular.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="MainMenu" component={MenuScreen} />
        <Stack.Screen name="Summary" component={Summary} />
      </Stack.Navigator>
      <StatusBar backgroundColor="#bfa2c8" barStyle="light-content" />
    </NavigationContainer>
  );
}

export default App;
