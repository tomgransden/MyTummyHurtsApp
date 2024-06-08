import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import * as Notifications from 'expo-notifications';
import { useEffect, useState } from 'react';
import { Platform } from 'react-native';

import { useCrashReporting } from './use-crash-reporting';

type NullableFirebaseUser = FirebaseAuthTypes.User | null;

export const useAuth = () => {
  const [firebaseUser, setFirebaseUser] = useState<NullableFirebaseUser>();

  const { setUser } = useCrashReporting();

  const [initializingAuth, setInitializingAuth] = useState(true);

  const onAuthStateChanged = async (user: NullableFirebaseUser) => {
    setFirebaseUser(user);

    if (user) {
      setUser(user?.uid);

      if (Platform.OS === 'ios') {
        const pushToken = await Notifications.getDevicePushTokenAsync();

        if (pushToken) {
          const { uid } = auth().currentUser ?? {};

          const userDb = firestore().collection('users').doc(uid);

          userDb.set({ pushToken }, { merge: true });
        }
      }
    }

    if (initializingAuth) setInitializingAuth(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  return { initializingAuth, user: firebaseUser };
};
