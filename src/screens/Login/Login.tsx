import auth from '@react-native-firebase/auth';
import { useState } from 'react';
import { View } from 'react-native';

import Button from '../../components/Button/Button';
import TextInput from '../../components/TextInput/TextInput';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    setLoading(true);

    await auth()
      .signInWithEmailAndPassword(email, password)
      .catch(() => setLoading(false));

    setLoading(false);
  };

  return (
    <View style={{ marginTop: 20, marginHorizontal: 12 }}>
      <TextInput
        style={{ marginBottom: 16 }}
        onChangeText={(text) => setEmail(text)}
        placeholder="Email address"
      />
      <TextInput
        style={{ marginBottom: 16 }}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        placeholder="Password"
      />
      <Button loading={loading} title="Sign in" onPress={handleSignIn} />
    </View>
  );
};

export default Login;
