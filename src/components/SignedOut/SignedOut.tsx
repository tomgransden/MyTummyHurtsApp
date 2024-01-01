import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';

import Button from '../Button/Button';

const SignedOut = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: '#bfa2c8', justifyContent: 'center' }}>
      <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 32 }}>
        Welcome to My Tummy Hurts
      </Text>

      <View style={{ position: 'absolute', bottom: 40, left: 0, right: 0 }}>
        <Button onPress={() => navigation.navigate('Login')} title="Login" />
        <Button onPress={() => navigation.navigate('CreateAccount')} title="Create an account" />
      </View>
    </View>
  );
};

export default SignedOut;
