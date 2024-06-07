import { usePushNotifications } from '@hooks';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Toast, { ErrorToast, ToastConfig } from 'react-native-toast-message';

import MyTummyHurtsNavigation from './src/navigation/MyTummyHurtsNavigation';

SplashScreen.preventAutoHideAsync();

const toastOptions: ToastConfig = {
  error: (props) => (
    <ErrorToast
      {...props}
      style={{ borderLeftColor: 'red' }}
      text1Style={{
        fontSize: 20,
      }}
      text2Style={{
        fontSize: 16,
      }}
    />
  ),
};

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
      <Toast config={toastOptions} />
    </GestureHandlerRootView>
  );
}

export default App;
