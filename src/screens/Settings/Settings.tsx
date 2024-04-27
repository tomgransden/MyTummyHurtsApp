import auth from '@react-native-firebase/auth';
import { useUpdates } from 'expo-updates';
import { View, Text } from 'react-native';

const Settings = () => {
  const { currentUser } = auth();
  const { currentlyRunning } = useUpdates();

  return (
    <View>
      {currentUser ? <Text>Current user: {currentUser.email}</Text> : null}
      {currentlyRunning ? (
        <Text>Version: {currentlyRunning.updateId ?? 'No update ID'}</Text>
      ) : null}
    </View>
  );
};

export default Settings;
