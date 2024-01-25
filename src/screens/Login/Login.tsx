import auth from '@react-native-firebase/auth';
import { useState } from 'react';
import { Button, View } from 'react-native';

import TextInput from '../../components/TextInput/TextInput';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <TextInput onChangeText={(text) => setEmail(text)} placeholder="Email address" />
      <TextInput
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        placeholder="Password"
      />
      <Button
        title="Sign in"
        onPress={() => {
          auth().signInWithEmailAndPassword(email, password);
        }}
      />
    </View>
  );
};

export default Login;
