import { Button } from '@components';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';

import { styles } from './SignedOut.style';

const SignedOut = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to{'\n'}My Tummy Hurts</Text>

      <View style={styles.buttons}>
        <Button onPress={() => navigation.navigate('Login')} label="Login" />
        <Button onPress={() => navigation.navigate('CreateAccount')} label="Create an account" />
      </View>
    </View>
  );
};

export default SignedOut;
