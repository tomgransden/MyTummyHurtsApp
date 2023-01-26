import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';

import MenuScreen from './src/components/MenuScreen/MenuScreen';
import PageHeader from './src/components/PageHeader/PageHeader';
import Summary from './src/components/Summary/Summary';

export type RootStackParamList = {
  MainMenu: undefined;
  Summary: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

SplashScreen.preventAutoHideAsync();

function App(): JSX.Element | null {
  const [fontsLoaded] = useFonts({
    'RubikBubbles-Regular': require('./assets/RubikBubbles-Regular.ttf'),
    Rubik: require('./assets/Rubik-VariableFont_wght.ttf'),
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
          headerShown: true,
          headerTitle: () => <PageHeader />,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#bfa2c8',
          },
          headerBackTitleVisible: false,
          headerTintColor: 'white',
          headerShadowVisible: false,
        }}>
        <Stack.Group>
          <Stack.Screen name="MainMenu" component={MenuScreen} />
          <Stack.Screen name="Summary" component={Summary} />
        </Stack.Group>
      </Stack.Navigator>
      <StatusBar backgroundColor="#bfa2c8" />
    </NavigationContainer>
  );
}

export default App;
