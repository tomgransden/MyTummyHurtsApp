import auth from '@react-native-firebase/auth';
import { View, Text } from 'react-native';

const Settings = () => {
  const { currentUser } = auth();

  return <View>{currentUser ? <Text>Current user: {currentUser.email}</Text> : null}</View>;
};

export default Settings;
