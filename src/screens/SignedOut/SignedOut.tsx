import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';

import { styles } from './SignedOut.style';
import Button from '../../components/Button/Button';

const SignedOut = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My Tummy Hurts</Text>

      <View style={styles.buttons}>
        <Button onPress={() => navigation.navigate('Login')} title="Login" />
        <Button onPress={() => navigation.navigate('CreateAccount')} title="Create an account" />
      </View>
    </View>
  );
};

export default SignedOut;
