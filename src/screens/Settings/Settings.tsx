import auth from '@react-native-firebase/auth';
import { getDevicePushTokenAsync } from 'expo-notifications';
import { useUpdates } from 'expo-updates';
import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

const Settings = () => {
  const { currentUser } = auth();
  const { currentlyRunning } = useUpdates();
  const [pushToken, setPushToken] = useState<string | undefined>();

  useEffect(() => {
    getDevicePushTokenAsync().then(({ data }) => {
      setPushToken(data);
    });
  }, []);

  return (
    <View>
      {currentUser ? <Text>Current user: {currentUser.email}</Text> : null}
      {currentlyRunning ? (
        <Text>Version: {currentlyRunning.updateId ?? 'No update ID'}</Text>
      ) : null}
      {pushToken ? <Text>Push token: ${pushToken}</Text> : null}
    </View>
  );
};

export default Settings;
