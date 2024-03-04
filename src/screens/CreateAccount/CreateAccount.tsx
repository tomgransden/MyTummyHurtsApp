import { Button, TextInput } from '@components';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useState } from 'react';
import { View } from 'react-native';

import { styles } from './CreateAccount.style';

const CreateAccount = () => {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const createAccount = async () => {
    setLoading(true);
    const authResult = await auth().createUserWithEmailAndPassword(username, password);

    await firestore().collection('users').doc(authResult.user.uid).set({});

    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(text) => setUsername(text)}
        style={styles.input}
        placeholder="Email address"
      />
      <TextInput
        onChangeText={(text) => setPassword(text)}
        style={styles.input}
        placeholder="Password"
        textContentType="password"
        secureTextEntry
      />
      <Button loading={loading} onPress={createAccount} title="Create account" />
    </View>
  );
};

export default CreateAccount;
