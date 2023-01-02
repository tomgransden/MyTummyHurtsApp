import { NavigationContainer } from "@react-navigation/native";
import React, { useCallback, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import MenuScreen from "./MenuScreen";

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
    console.log("no fonts");
    return null;
  }

  console.log("fonts");
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          title: "My tummy hurts",
          headerTintColor: "black",
          headerStyle: { backgroundColor: "darkgrey" },
        }}
      >
        <Stack.Screen name="Menu" component={MenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
