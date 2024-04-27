import { PageHeader } from '@components';
import { useFirstTimeAsyncStorage } from '@hooks';
import analytics from '@react-native-firebase/analytics';
import auth from '@react-native-firebase/auth';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import BowelMovements from './src/screens/BowelMovements/BowelMovements';
import CreateAccount from './src/screens/CreateAccount/CreateAccount';
import Food from './src/screens/Food/Food';
import ImageZoomer from './src/screens/ImageZoomer/ImageZoomer';
import Login from './src/screens/Login/Login';
import MedicationScreen from './src/screens/MedicationScreen/MedicationScreen';
import MenuScreen from './src/screens/MenuScreen/MenuScreen';
import Mood from './src/screens/Mood/Mood';
import Onboarder from './src/screens/Onboarder/Onboarder';
import Pain from './src/screens/Pain/Pain';
import Settings from './src/screens/Settings/Settings';
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
  Onboarder: undefined;
  Pain: undefined;
  Settings: undefined;
  BowelMovements: undefined;
  ImageZoomer: { url: string };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const Stack = createNativeStackNavigator<RootStackParamList>();

SplashScreen.preventAutoHideAsync();

function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const [onboarderStatus, setOnboarderStatus] = useState<string | null | undefined>();

  const routeNameRef = useRef<string>();
  const navigationRef = useNavigationContainerRef();

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

  const { getItem } = useFirstTimeAsyncStorage();

  useEffect(() => {
    const getStatus = async () => await getItem();

    getStatus().then((item) => {
      setOnboarderStatus(item);
    });
  }, []);

  if (!fontsLoaded || initializing || onboarderStatus === undefined) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer
        ref={navigationRef}
        onReady={async () => {
          routeNameRef.current = navigationRef.current?.getCurrentRoute()?.name;
        }}
        onStateChange={async () => {
          const previousRouteName = routeNameRef.current;
          const currentRouteName = navigationRef.current?.getCurrentRoute()?.name;

          if (previousRouteName !== currentRouteName) {
            await analytics().logScreenView({
              screen_name: currentRouteName,
              screen_class: currentRouteName,
            });
          }
          routeNameRef.current = currentRouteName;
        }}>
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
              <Stack.Screen name="Settings" component={Settings} />
              <Stack.Screen name="BowelMovements" component={BowelMovements} />
              <Stack.Screen name="ImageZoomer" component={ImageZoomer} />
            </Stack.Group>
          ) : (
            <Stack.Group>
              {onboarderStatus === null ? (
                <Stack.Screen
                  name="Onboarder"
                  component={Onboarder}
                  options={{ headerShown: false }}
                />
              ) : null}
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
