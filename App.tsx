import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import PageHeader from './src/components/PageHeader/PageHeader';
import CreateAccount from './src/screens/CreateAccount/CreateAccount';
import Food from './src/screens/Food/Food';
import Login from './src/screens/Login/Login';
import MedicationScreen from './src/screens/MedicationScreen/MedicationScreen';
import MenuScreen from './src/screens/MenuScreen/MenuScreen';
import Mood from './src/screens/Mood/Mood';
import Pain from './src/screens/Pain/Pain';
import SignedOut from './src/screens/SignedOut/SignedOut';
import Summary from './src/screens/Summary/Summary';

export type RootStackParamList = {
  MainMenu: undefined;
  Summary: undefined;
  Medication: undefined;
  SignedOut: undefined;
  CreateAccount: undefined;
  Login: undefined;
  Food: undefined;
  Mood: undefined;
  Pain: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const Stack = createNativeStackNavigator<RootStackParamList>();

SplashScreen.preventAutoHideAsync();

function App() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const [fontsLoaded] = useFonts({
    'RubikBubbles-Regular': require('./assets/RubikBubbles-Regular.ttf'),
    Rubik: require('./assets/Rubik-VariableFont_wght.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: true,
            headerTitle: () => <PageHeader />,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#bfa2c8',
            },
            headerTintColor: 'white',
            headerShadowVisible: false,
            headerBackTitleVisible: false,
          }}>
          {user ? (
            <Stack.Group>
              <Stack.Screen name="MainMenu" component={MenuScreen} />
              <Stack.Screen name="Summary" component={Summary} />
              <Stack.Screen name="Medication" component={MedicationScreen} />
              <Stack.Screen name="Food" component={Food} />
              <Stack.Screen name="Mood" component={Mood} />
              <Stack.Screen name="Pain" component={Pain} />
            </Stack.Group>
          ) : (
            <Stack.Group>
              <Stack.Screen
                name="SignedOut"
                component={SignedOut}
                options={{ headerShown: false }}
              />
              <Stack.Screen name="CreateAccount" component={CreateAccount} />
              <Stack.Screen name="Login" component={Login} />
            </Stack.Group>
          )}
        </Stack.Navigator>
        <StatusBar backgroundColor="#bfa2c8" />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
