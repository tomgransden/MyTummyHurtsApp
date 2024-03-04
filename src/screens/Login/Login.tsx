import { Button, TextInput } from '@components';
import auth from '@react-native-firebase/auth';
import { useState } from 'react';
import { View } from 'react-native';

import { styles } from './Login.style';

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
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
        placeholder="Email address"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        placeholder="Password"
      />
      <Button loading={loading} title="Sign in" onPress={handleSignIn} />
    </View>
  );
};

export default Login;
