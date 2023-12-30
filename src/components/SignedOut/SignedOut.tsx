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

      <Button onPress={() => null} title="Login" />
      <Button onPress={() => navigation.navigate('CreateAccount')} title="Create an account" />
    </View>
  );
};

export default SignedOut;
