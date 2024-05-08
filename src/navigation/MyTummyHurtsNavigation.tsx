import { PageHeader } from '@components';
import { useAuth, useFirstTimeAsyncStorage } from '@hooks';
import analytics from '@react-native-firebase/analytics';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useRef } from 'react';

import { RootStackParamList } from './MyTummyHurtsNavigation.type';
import BowelMovements from '../../src/screens/BowelMovements/BowelMovements';
import CreateAccount from '../../src/screens/CreateAccount/CreateAccount';
import Food from '../../src/screens/Food/Food';
import ImageZoomer from '../../src/screens/ImageZoomer/ImageZoomer';
import Login from '../../src/screens/Login/Login';
import MedicationScreen from '../../src/screens/MedicationScreen/MedicationScreen';
import MenuScreen from '../../src/screens/MenuScreen/MenuScreen';
import Mood from '../../src/screens/Mood/Mood';
import Onboarder from '../../src/screens/Onboarder/Onboarder';
import Pain from '../../src/screens/Pain/Pain';
import Settings from '../../src/screens/Settings/Settings';
import SignedOut from '../../src/screens/SignedOut/SignedOut';
import Summary from '../../src/screens/Summary/Summary';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const MyTummyHurtsNavigation = () => {
  const navigationRef = useNavigationContainerRef();

  const routeNameRef = useRef<string>();

  const { onboarderStatus } = useFirstTimeAsyncStorage();

  const { initializingAuth, user } = useAuth();

  if (initializingAuth || onboarderStatus === undefined) {
    return null;
  }

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={async () => {
        routeNameRef.current = navigationRef.current?.getCurrentRoute()?.name;
        await SplashScreen.hideAsync();
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
            <Stack.Screen name="SignedOut" component={SignedOut} options={{ headerShown: false }} />
            <Stack.Screen name="CreateAccount" component={CreateAccount} />
            <Stack.Screen name="Login" component={Login} />
          </Stack.Group>
        )}
      </Stack.Navigator>
      <StatusBar backgroundColor="#bfa2c8" />
    </NavigationContainer>
  );
};

export default MyTummyHurtsNavigation;
