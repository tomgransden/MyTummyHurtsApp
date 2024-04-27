import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { useEffect, useState } from 'react';

type NullableFirebaseUser = FirebaseAuthTypes.User | null;

export const useAuth = () => {
  const [user, setUser] = useState<NullableFirebaseUser>();

  const [initializingAuth, setInitializingAuth] = useState(true);

  const onAuthStateChanged = (user: NullableFirebaseUser) => {
    setUser(user);
    if (initializingAuth) setInitializingAuth(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  return { initializingAuth, user };
};
