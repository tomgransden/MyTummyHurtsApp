import { usePushNotifications } from '@hooks';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import MyTummyHurtsNavigation from './src/navigation/MyTummyHurtsNavigation';

SplashScreen.preventAutoHideAsync();

function App() {
  const [fontsLoaded] = useFonts({
    'RubikBubbles-Regular': require('./assets/RubikBubbles-Regular.ttf'),
    Rubik: require('./assets/Rubik-VariableFont_wght.ttf'),
  });

  usePushNotifications();

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <MyTummyHurtsNavigation />
    </GestureHandlerRootView>
  );
}

export default App;
